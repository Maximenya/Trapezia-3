import Client from "../models/client.model";
import { Request, Response } from "express";

const StatisticController = {


    getTotalPeople: function (_req: Request, res: Response) {
        Client.aggregate([
            {
                $group: {_id: "$sex", count: {$sum: 1}}
            }
        ]).then((stat) => {
            res.json(stat);
        }, (err) => {
            res.json(err);
        });
    }


};

export default StatisticController;