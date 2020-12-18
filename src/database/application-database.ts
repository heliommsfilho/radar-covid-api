import mongoose from "mongoose";
import { ActiveModel, ConfirmedModel, DeadModel, ICases, RecoveredModel, SuspectModel } from "./case.model";
import { CasesQueryFilter } from "./cases-query.filter";

export class ApplicationDatabase {

    public static async getActiveCases(filter: CasesQueryFilter) {
        return this.executeQuery(ActiveModel, filter);
    }

    public static async getSuspectCases(filter: CasesQueryFilter) {
        return this.executeQuery(SuspectModel, filter);
    }

    public static async getConfirmedCases(filter: CasesQueryFilter) {
        return this.executeQuery(ConfirmedModel, filter);
    }

    public static async getDeadCases(filter: CasesQueryFilter) {
        return this.executeQuery(DeadModel, filter);
    }

    public static async getRecoveredCases(filter: CasesQueryFilter) {
        return this.executeQuery(RecoveredModel, filter);
    }

    public static async getLastUpdate() {
        this.connect();
        console.log(`Getting last update information`);
        const lastActive = await ActiveModel.find().sort({ date: 'desc' }).limit(1).exec();
        const lastConfirmed = await ConfirmedModel.find().sort({ date: 'desc' }).limit(1).exec();
        const lastDead = await DeadModel.find().sort({ date: 'desc' }).limit(1).exec();
        const lastRecovered = await RecoveredModel.find().sort({ date: 'desc' }).limit(1).exec();
        const lastSuspect = await SuspectModel.find().sort({ date: 'desc' }).limit(1).exec();
        this.disconnect();

        return { lastActive, lastConfirmed, lastDead, lastRecovered, lastSuspect };
    }

    private static connect() {

        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB connection URL not defined');
        }

        const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : '';

        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
            if (err)  {
                console.log(err.message);
            }
        });
    }

    private static disconnect() {
        mongoose.disconnect();
    }

    private static async executeQuery(model: mongoose.Model<ICases>, filter: CasesQueryFilter) {
        const criteriaQuery = this.getCriteriaQuery(filter);
        this.connect();
        console.log(`Performing query in '${model.modelName}' with filters: ${JSON.stringify(criteriaQuery)}`);
        const cases = await model.find(criteriaQuery).exec();
        this.disconnect();

        return cases;
    }

    private static getCriteriaQuery(filter: any): any {
        const day = filter.day;
        const endDay = filter.endDay;

        if (day && endDay) {
            return  { date: { $gte: day, $lte: endDay } };
        }

        if (day) {
            return { date: day };
        }

        return {};
    }
}