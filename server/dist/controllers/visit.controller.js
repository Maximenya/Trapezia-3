"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_model_1 = __importDefault(require("../models/client.model"));
const TYPE_SUBSCRIPTION = 20;
const VisitController = {
    /*
    {
    "visitType": "11",
    "checkIn": "11/20/2018 16:11",
    "checkOut": "1/20/2018 17:11",
    "keyNumber": "22",
    "saleTime": "1/20/2018 16:11",
    "rent": {
        "climbingShoes": "0",
        "harness": "0",
        "magnesia": "0",
        "carabine": "0",
        "griGri": "0"
        }
    }
     */
    addNewVisit: function (req, res) {
        const newVisit = req.body;
        const subscriptionId = req.body.subscriptionId;
        client_model_1.default.findOneAndUpdate({ _id: req.params.clientId }, { $push: { visitsHistory: newVisit } }, { runValidators: true }, (err, client) => {
            if (err) {
                res.send(err);
            }
            else if (client && client.subscriptions) {
                if (newVisit.visitType === TYPE_SUBSCRIPTION) {
                    const currentSubscription = client.subscriptions.find((element) => {
                        return element._id == subscriptionId;
                    });
                    client_model_1.default.findOneAndUpdate({ _id: req.params.clientId, "subscriptions._id": subscriptionId }, { $set: { "subscriptions.$.counter": currentSubscription.counter - 1 } }, (err, client) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json(client);
                    });
                }
            }
        });
    },
    finishVisit: function (req, res) {
        client_model_1.default.findOneAndUpdate({ _id: req.params.clientId, "visitsHistory.checkOut": undefined }, { $set: { "visitsHistory.$.checkOut": req.body.checkOut } }, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    loadClimbingNow: function (_req, res) {
        client_model_1.default.find({ "visitsHistory.checkOut": undefined }, (err, clients) => {
            if (err) {
                res.send(err);
            }
            res.json(clients);
        });
    }
};
exports.default = VisitController;
//# sourceMappingURL=visit.controller.js.map