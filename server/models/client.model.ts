import { Schema, model } from "mongoose";
import config from "config";

const SubscriptionSchema = new Schema({
    subscriptionType: {
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

SubscriptionSchema.path("subscriptionType").validate(function(type: number) {
    const subscriptionTypes: [number] = config.get("client.model.subscriptionTypes");
    return subscriptionTypes.indexOf(type) !== -1;
}, "Unknown type provided.");

const RentSchema = new Schema({
    climbingShoes: {type: Number, default: 0},
    harness: {type: Number, default: 0},
    magnesia: {type: Number, default: 0},
    carabine: {type: Number, default: 0},
    griGri: {type: Number, default: 0}
});

const VisitSchema = new Schema({
    subscriptionId: {
        type: String,
    },
    visitType: {
        type: Number,
        required: [true, "Visit type is required."],
    },
    checkIn: {
        type: Date,
        required: [true, "Visit checkIn is required."],
        default: Date.now
    },
    checkOut: {type: Date},
    keyNumber: {type: Number},
    saleTime: {
        type: Date,
        required: [true, "Visit saleTime is required."],
        default: Date.now
    },
    rent: {type: RentSchema}
});

VisitSchema.path("visitType").validate(function(type: number) {
    const visitTypes: [number] = config.get("client.model.visitTypes");
    return visitTypes.indexOf(type) !== -1;
}, "Unknown type provided.");

const ClientSchema = new Schema({
    phone: {type: String},
    firstName: {
        type: String,
        required: [true, "Client firstName is required."]
    },
    middleName: {type: String},
    lastName: {
        type: String,
        required: [true, "Client lastName is required."]
    },
    email: {type: String},
    birthDate: {
        type: Date,
        default: "01/01/0001"
    },
    document: {type: String},
    registrationDate: {type: Date},
    sex: {type: String,
        required: [true, "Client sex is required."]
    },
    knowFrom: {type: String},
    parentAgreed: {
        type: Boolean,
        default: false
    },
    subscriptions: [SubscriptionSchema],
    visitsHistory: [VisitSchema]

}, {timestamps: true});


const Client = model("Client", ClientSchema);
export default Client;
