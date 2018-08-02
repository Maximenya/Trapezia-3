"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_model_1 = __importDefault(require("../models/client.model"));
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
    addNewClient: function (req, res) {
        const newClient = new client_model_1.default(req.body);
        newClient.save((err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    getClientWithID: function (req, res) {
        client_model_1.default.findById(req.params.clientId, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    getAllClients: function (_req, res) {
        client_model_1.default.find({}, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    updateClient: function (req, res) {
        client_model_1.default.findOneAndUpdate({ _id: req.params.clientId }, req.body, { new: true }, (err, client) => {
            if (err) {
                res.send(err);
            }
            res.json(client);
        });
    },
    deleteClient: function (req, res) {
        client_model_1.default.remove({ _id: req.params.clientId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted client!" });
        });
    },
    deleteAllClients: function (_req, res) {
        client_model_1.default.remove({}, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted all clients!" });
        });
    }
};
exports.default = ClientController;
//# sourceMappingURL=client.controller.js.map