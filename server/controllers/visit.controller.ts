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
      {runValidators: true}).then((client: any) => {
      if (newVisit.visitType === TYPE_SUBSCRIPTION) {
        if (client && client.subscriptions) {
          const currentSubscription = client.subscriptions.find((element: any) => {
            return element._id == subscriptionId;
          });
          if (currentSubscription) {
            Client.findOneAndUpdate({_id: req.params.clientId, "subscriptions._id": subscriptionId},
              {$set: {"subscriptions.$.counter": currentSubscription.counter - 1}}).then((client) => {
              res.json(client);
            }, (err) => {
              res.json(err);
            });
          }
        }
      } else {
        res.json(client);
      }
    }, (err) => {
      res.json(err);
    });
  },

  finishVisit: function (req: Request, res: Response) {
    Client.findOneAndUpdate({_id: req.params.clientId, "visitsHistory.checkOut": undefined},
      {$set: {"visitsHistory.$.checkOut": req.body.checkOut}}).then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  loadClimbingNow: function (_req: Request, res: Response) {
    Client.find({"visitsHistory.checkOut": undefined}).then((clients) => {
      res.json(clients);
    }, (err) => {
      res.json(err);
    });
  }

};

export default VisitController;
