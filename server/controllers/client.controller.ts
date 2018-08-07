import Client from "../models/client.model";
import { Request, Response } from "express";

const ClientController = {

  /* {
       "phone": "+3333333333",
       "firstName": "Alex",
       "middleName": "",
       "lastName": "Maximenua",
       "email": "max@gmail.com",
       "birthDate": "22.11.1994",
       "document": "",
       "registrationDate": "",
       "sex": "male",
       "knowFrom": "",
       "parentAgreed": ""
   } */
  addNewClient: function (req: Request, res: Response) {
    const newClient = new Client(req.body);

    newClient.save((err, client) => {
      if (err) {
        res.send(err);
      }
      res.json(client);
    });
  },

  getClientWithID: function (req: Request, res: Response) {
    Client.findById(req.params.clientId, (err, client) => {
      if (err) {
        res.send(err);
      }
      res.json(client);
    });
  },

  getAllClients: function (_req: Request, res: Response) {
    Client.find({}, (err, client) => {
      if (err) {
        res.send(err);
      }
      res.json(client);
    });
  },

  searchClients: function (req: Request, res: Response) {
    const regex = new RegExp("^" + req.params.q + ".*$", "i");
    Client.find({
      $or: [
        {
          lastName:
            {
              $regex: regex
            }
        },
        {
          firstName:
            {
              $regex: regex
            }
        }
      ]
    }, (err, client) => {
      if (err) {
        res.send(err);
      }
      res.json(client);
    }).limit(5);
  },

  updateClient: function (req: Request, res: Response) {
    Client.findOneAndUpdate({ _id: req.params.clientId }, req.body, { new: true }, (err, client) => {
      if (err) {
        res.send(err);
      }
      res.json(client);
    });
  },

  deleteClient: function (req: Request, res: Response) {
    Client.remove({ _id: req.params.clientId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted client!" });
    });
  },

  deleteAllClients: function (_req: Request, res: Response) {
    Client.remove({}, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted all clients!" });
    });
  }

};

export default ClientController;
