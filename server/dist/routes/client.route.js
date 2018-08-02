"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const router = express_1.Router();
router.route("/")
    /** GET /clients - Get list of clients */
    .get(client_controller_1.default.getAllClients)
    /** POST /clients - Create new client */
    .post(client_controller_1.default.addNewClient);
router.route("/:clientId")
    /** GET /clients/:clientId - Get client */
    .get(client_controller_1.default.getClientWithID)
    /** PUT /clients/:clientId - Update client */
    .put(client_controller_1.default.updateClient)
    /** DELETE /clients/:clientId - Delete client */
    .delete(client_controller_1.default.deleteClient);
exports.default = router;
//# sourceMappingURL=client.route.js.map