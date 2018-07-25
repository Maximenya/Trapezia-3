import { Schema, model } from "mongoose";

const SubscriptionSchema = new Schema({
    type: {type: Number},
    saleTime: {type: Date},
    firstDate: {type: Date},
    lastDate: {type: Date},
    counter: {type: Number},
    current: {type: Number},
    fancyName: {type: String}
});

const RentSchema = new Schema({
    climbingShoes: {type: Number},
    harness: {type: Number},
    magnesia: {type: Number},
    carabine: {type: Number},
    griGri: {type: Number}
});

const VisitSchema = new Schema({
    type: {type: Number},
    checkIn: {type: Number},
    checkOut: {type: Number},
    keyNumber: {type: Number},
    saleTime: {type: Number},
    fancyName: {type: Number},
    rent: {type: RentSchema}
});

const ClientSchema = new Schema({
    phone: {type: String},
    firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    email: {type: String},
    birthDate: {type: Date},
    document: {type: String},
    registrationDate: {type: Date},
    sex: {type: String},
    knowFrom: {type: String},
    parentAgreed: {type: Boolean},
    subscriptions: [SubscriptionSchema],
    visitsHistory: [VisitSchema]

}, { timestamps: true });


const Client = model("Client", ClientSchema);
export default Client;
