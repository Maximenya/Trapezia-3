import { Schema, model } from "mongoose";

const SubscriptionSchema = new Schema({
    type: {
        type: Number,
        required: [true, "Subscription type is required."]
    },
    saleTime: {
        type: Date,
        required: [true, "Subscription saleTime is required."],
        default: Date.now
    },
    firstDate: {
        type: Date,
        required: [true, "Subscription firstDate is required."],
        default: Date.now
    },
    lastDate: {
        type: Date,
        required: [true, "Subscription lastDate is required."]
    },
    counter: {
        type: Number,
        required: [true, "Subscription counter is required."]
    }
});

const RentSchema = new Schema({
    climbingShoes: {type: Number},
    harness: {type: Number},
    magnesia: {type: Number},
    carabine: {type: Number},
    griGri: {type: Number}
});

const VisitSchema = new Schema({
    type: {
        type: Number,
        required: [true, "Visit type is required."]
    },
    checkIn: {
        type: Number,
        required: [true, "Visit checkIn is required."],
        default: Date.now
    },
    checkOut: {type: Number},
    keyNumber: {type: Number},
    saleTime: {
        type: Number,
        required: [true, "Visit saleTime is required."],
        default: Date.now
    },
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
