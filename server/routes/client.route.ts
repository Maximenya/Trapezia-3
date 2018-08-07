import { Router } from "express";
import clientController from "../controllers/client.controller";

const router = Router();

router.route("/")
  /** GET /clients - Get list of clients */
  .get(clientController.getAllClients)

  /** POST /clients - Create new client */
  .post(clientController.addNewClient)

  /** DELETE /clients - Delete all clients */
  .delete(clientController.deleteAllClients);

router.route("/:clientId")
  /** GET /clients/:clientId - Get client */
  .get(clientController.getClientWithID)

  /** PUT /clients/:clientId - Update client */
  .put(clientController.updateClient)

  /** DELETE /clients/:clientId - Delete client */
  .delete(clientController.deleteClient);

router.route("/search/:q")
/** GET /clients/search/:q - client auto complete */
  .get(clientController.searchClients);


export default router;
