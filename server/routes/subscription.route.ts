import { Router } from "express";
import subscriptiontController from "../controllers/subscription.controller";

const router = Router();

router.route("/:clientId")
/** POST /visits/:clientId - add new visit to client */
    .post(subscriptiontController.addNewSubscription)

/** GET /visit/:clientIds - get all subscriptions for client */
    .get(subscriptiontController.getAllSubscriptions);

/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/active")
    .get(subscriptiontController.getAllActiveSubscriptions);

/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/:subscriptionId")
    .put(subscriptiontController.updateSubscription);


export default router;
