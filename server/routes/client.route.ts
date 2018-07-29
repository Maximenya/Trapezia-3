import { Router } from "express";
import clientController from "../controllers/client.controller";

const router = Router();

router.route("/")
  /** GET /clients - Get list of clients */
  .get(clientController.getAllClients)

  /** POST /clients - Create new client */
  .post(clientController.addNewClient);

router.route("/:clientId")
  /** GET /clients/:clientId - Get client */
  .get(clientController.getClientWithID)

  /** PUT /clients/:clientId - Update client */
  .put(clientController.updateClient)

  /** DELETE /clients/:clientId - Delete client */
  .delete(clientController.deleteClient);

export default router;
