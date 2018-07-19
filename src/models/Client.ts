import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    phone: {type: String},
    firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    email: {type: String},
    birthDate: {type: String},
    document: {type: String},
    registrationDate: {type: String},
    sex: {type: String},
    knowFrom: {type: String},
    parentAgreed: {type: Number}

}, { timestamps: true });


const Client = mongoose.model("Client", clientSchema);
export default Client;
