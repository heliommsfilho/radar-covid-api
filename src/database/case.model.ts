import * as mongoose from "mongoose";

export interface ICases extends mongoose.Document {
    date: number,
    cases: Map<string, number>
}

const casesSchema = new mongoose.Schema({
    date: { type: Number },
    cases: { type: Map, of: Number }
});

export const ActiveModel    = mongoose.model<ICases>('Active', casesSchema);
export const SuspectModel   = mongoose.model<ICases>('Suspect', casesSchema);
export const ConfirmedModel = mongoose.model<ICases>('Confirmed', casesSchema);
export const DeadModel      = mongoose.model<ICases>('Dead', casesSchema);
export const RecoveredModel = mongoose.model<ICases>('Recovered', casesSchema);