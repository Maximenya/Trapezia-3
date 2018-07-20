import { Router } from "express";
import clientController from "../controllers/client.controller";

const router = Router(); // eslint-disable-line new-cap

router.route("/")
  /** GET /api/users - Get list of users */
  .get(clientController.getAllClients)

  /** POST /api/users - Create new user */
  .post(clientController.addNewClient);

router.route("/:clientId")
  /** GET /api/users/:userId - Get user */
  .get(clientController.getClientWithID)

  /** PUT /api/users/:userId - Update user */
  .put(clientController.updateClient)

  /** DELETE /api/users/:userId - Delete user */
  .delete(clientController.deleteClient);

export default router;
