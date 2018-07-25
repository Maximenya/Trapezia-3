import Client from "../models/client.model";
import { Request, Response } from "express";

const VisitController = {

    addNewVisit: function (req: Request, res: Response) {
        const newVisit = req.body;
        Client.findOneAndUpdate({_id: req.params.clientId}, {$push: {visitsHistory: newVisit}}, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },

};

export default VisitController;