"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_model_1 = __importDefault(require("../models/client.model"));
const SubscriptionController = {
    /*
  {
    "subscriptionType":"22" ,
    "saleTime": "11/20/2018 16:11",
    "firstDate": "11/20/2018",
    "lastDate":"11/30/2018",
    "counter": "5"
}
     */
    addNewSubscription: function (req, res) {
        const newSubscription = req.body;
        client_model_1.default.findOneAndUpdate({ _id: req.params.clientId }, { $push: { subscriptions: newSubscription } }, { runValidators: true }, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    updateSubscription: function (req, res) {
        client_model_1.default.findOneAndUpdate({ _id: req.params.clientId, "subscriptions._id": req.params.subscriptionId }, { $set: { "subscriptions.$": req.body } }, { new: true }, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    getAllSubscriptions: function (req, res) {
        client_model_1.default.findOne({ _id: req.params.clientId }, (err, client) => {
            if (err) {
                res.send(err);
            }
            else if (client && client.subscriptions) {
                res.json(client.subscriptions);
            }
            else {
                console.log(client);
                console.log(client.subscriptions);
                res.json([]);
            }
        });
    },
    getAllActiveSubscriptions: function (req, res) {
        client_model_1.default.findOne({ _id: req.params.clientId }, (err, client) => {
            if (err) {
                res.send(err);
            }
            else if (client && client.subscriptions) {
                const activeSubscriptions = client.subscriptions.find((element) => {
                    return element.counter > 0 && element.lastDate >= Date.now();
                });
                res.json(activeSubscriptions || []);
            }
            else {
                res.json([]);
            }
        });
    },
};
exports.default = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map