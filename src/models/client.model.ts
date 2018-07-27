import { Schema, model } from "mongoose";

const SubscriptionSchema = new Schema({
    type: {
        type: Number,
        required: [true, "Subscription type is required."],
        enum: [21, 22, 23, 24, 25, 26]
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
    climbingShoes: {type: Number, default: 0},
    harness: {type: Number, default: 0},
    magnesia: {type: Number, default: 0},
    carabine: {type: Number, default: 0},
    griGri: {type: Number, default: 0}
});

const VisitSchema = new Schema({
    type: {
        type: Number,
        validate : {
            validator : (value: number) =>  {
                return [11, 13, 14, 15, 16, 17, 18, 19, 20].indexOf(value) > 0;
            },
            message: "{VALUE} is unknown type."
        },
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
        type: Number,
        required: [true, "Visit saleTime is required."],
        default: Date.now
    },
    rent: {type: RentSchema}
});

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
    birthDate: {type: Date},
    document: {type: String},
    registrationDate: {type: Date},
    sex: {type: String},
    knowFrom: {type: String},
    parentAgreed: {
        type: Boolean,
        default: Date.now
    },
    subscriptions: [SubscriptionSchema],
    visitsHistory: [VisitSchema]

}, {timestamps: true});


const Client = model("Client", ClientSchema);
export default Client;
