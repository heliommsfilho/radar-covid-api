import mongoose from "mongoose";
import * as dotenv from "dotenv";
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
        this.connect();
        console.log(`Performing query in '${model.modelName}' with filters: ${JSON.stringify(filter)}`);
        const cases = await model.find(filter).exec();
        this.disconnect();

        return cases;
    }
}