import { default as Client } from "../models/Client";
import { Request, Response } from "express";

export default class ClientController {


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
    public addNewClient(req: Request, res: Response) {
        const newClient = new Client(req.body);

        newClient.save((err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    }

    public getClientWithID(req: Request, res: Response) {
        Client.findById(req.params.clientId, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    }

    public getAllClients(_req: Request, res: Response) {
        Client.find({}, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    }

    public updateClient(req: Request, res: Response) {
        Client.findOneAndUpdate({ _id: req.body.clientId }, req.body, { new: true }, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    }

    public deleteClient(req: Request, res: Response) {
        Client.remove({ _id: req.body.clientId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted client!"});
        });
    }

    public deleteAllClients(_req: Request, res: Response) {
        Client.remove({}, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted all clients!"});
        });
    }

    public loadClimbingNow(_req: Request, res: Response) {
        Client.find({}, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    }


}