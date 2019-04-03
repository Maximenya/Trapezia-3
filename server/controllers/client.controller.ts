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
    newClient.save().then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  getClientWithID: function (req: Request, res: Response) {
    Client.findById(req.params.clientId).then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  getAllClients: function () {
    return Client.find({});
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
    const options = {new: true};
    Client.findOneAndUpdate({_id: req.params.clientId}, req.body, options).then((client) => {
      res.json(client);
    }, (err) => {
      res.json(err);
    });
  },

  deleteClient: function (req: Request, res: Response) {
    Client.remove({_id: req.params.clientId}).then(() => {
      res.json({message: "Client successfully deleted!"});
    }, (err) => {
      res.json(err);
    });
  },

  deleteAllClients: function (_req: Request, res: Response) {
    Client.remove({}).then(() => {
      res.json({message: "Clients successfully deleted!"});
    }, (err) => {
      res.json(err);
    });
  }

};

export default ClientController;
