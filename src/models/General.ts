import mongoose from "mongoose";

export type GeneralDocument = mongoose.Document & {
    board: Array<string>;
};

const generalSchema = new mongoose.Schema(
    {
        board: Array<string>()
    }, 
    { 
        timestamps: true 
    }
);

export const ChessBoard = mongoose.model<GeneralDocument>("GeneralDoc", generalSchema);
