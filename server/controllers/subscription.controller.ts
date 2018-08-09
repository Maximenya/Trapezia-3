import Client from "../models/client.model";
import { Request, Response } from "express";

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

  addNewSubscription: function (req: Request, res: Response) {
    const newSubscription = req.body;
    Client.findOneAndUpdate({_id: req.params.clientId},
      {$push: {subscriptions: newSubscription}},
      {runValidators: true}).then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  updateSubscription: function (req: Request, res: Response) {
    Client.findOneAndUpdate({_id: req.params.clientId, "subscriptions._id": req.params.subscriptionId},
      {$set: {"subscriptions.$": req.body}},
      {new: true}).then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  getAllSubscriptions: function (req: Request, res: Response) {
    Client.findOne({_id: req.params.clientId}).then((client: any) => {
      if (client && client.subscriptions) {
        res.json(client.subscriptions);
      } else {
        res.json([]);
      }
    }, (err) => {
      res.json(err);
    });
  },

  getAllActiveSubscriptions: function (req: Request, res: Response) {
    Client.findOne({_id: req.params.clientId}).then((client: any) => {
      if (client && client.subscriptions) {
        const activeSubscriptions = client.subscriptions.find((element: any) => {
          return element.counter > 0 && element.lastDate >= Date.now();
        });
        res.json(activeSubscriptions || []);
      } else {
        res.json([]);
      }
    }, (err) => {
      res.json(err);
    });
  },

};

export default SubscriptionController;
