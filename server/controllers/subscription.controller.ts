import Client from "../models/client.model";
import { Request, Response } from "express";

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

    addNewSubscription: function (req: Request, res: Response) {
        const newSubscription = req.body;
        Client.findOneAndUpdate({_id: req.params.clientId},
            {$push: {subscriptions: newSubscription}},
            {runValidators: true},
            (err, client) => {
                if (err) {
                    res.send(err);
                }
                res.json(client);
            });
    },

    updateSubscription: function (req: Request, res: Response) {
        Client.findOneAndUpdate({_id: req.params.clientId, "subscriptions._id": req.params.subscriptionId},
            {$set: {"subscriptions.$": req.body}},
            {new: true},
            (err, client) => {
                if (err) {
                    res.send(err);
                }
                res.json(client);
            });
    },

    getAllSubscriptions: function(req: Request, res: Response) {
        Client.findOne({_id: req.params.clientId}, (err, client: any) => {
            if (err) {
                res.send(err);
            } else if (client && client.subscriptions) {
                res.json(client.subscriptions);
            } else {
                console.log(client);
                console.log(client.subscriptions);
                res.json([]);
            }
        });
    },

    getAllActiveSubscriptions: function(req: Request, res: Response) {
        Client.findOne({_id: req.params.clientId}, (err, client: any) => {
            if (err) {
                res.send(err);
            } else if (client && client.subscriptions) {
                const activeSubscriptions = client.subscriptions.find((element: any) => { return element.counter > 0 && element.lastDate >= Date.now(); });
                res.json(activeSubscriptions || []);
            } else {
                res.json([]);
            }
        });
    },



};

export default VisitController;