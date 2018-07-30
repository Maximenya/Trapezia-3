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


};

export default VisitController;