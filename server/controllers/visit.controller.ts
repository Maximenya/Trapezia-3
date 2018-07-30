import Client from "../models/client.model";
import { Request, Response } from "express";

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

    addNewVisit: function (req: Request, res: Response) {
        const newVisit = req.body;
        const subscriptionId = req.body.subscriptionId;
        Client.findOneAndUpdate({_id: req.params.clientId},
            {$push: {visitsHistory: newVisit}},
            {runValidators: true},
            (err, client: any) => {
                if (err) {
                    res.send(err);
                } else if (client && client.subscriptions) {
                    if (newVisit.visitType === TYPE_SUBSCRIPTION) {
                        client.subscriptions.forEach((element: any) => {
                            if (element._id === subscriptionId) {
                                element.counter--;
                            }
                        });
                        client.save();
                    }
                }
            });
    },

    finishVisit: function (req: Request, res: Response) {
        Client.findOneAndUpdate({_id: req.params.clientId, "visitsHistory.checkOut": undefined},
            { $set: { "visitsHistory.$.checkOut" : req.body.checkOut } },
            (err: any, client: any) => {
                if (err) {
                    res.send(err);
                }
                res.json(client);
            });
    },

    loadClimbingNow: function(_req: Request, res: Response) {
        Client.find({ "visitsHistory.checkOut": undefined }, (err, clients) => {
            if (err) {
                res.send(err);
            }
            res.json(clients);
        });
    }

};

export default VisitController;