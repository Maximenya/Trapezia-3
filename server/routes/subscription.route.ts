import { Router } from "express";
import subscriptionController from "../controllers/subscription.controller";

const router = Router();

router.route("/:clientId")
/** POST /visits/:clientId - add new visit to client */
    .post(subscriptionController.addNewSubscription)

/** GET /visit/:clientIds - get all subscriptions for client */
    .get(subscriptionController.getAllSubscriptions);

/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/active")
    .get(subscriptionController.getAllActiveSubscriptions);

/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/:subscriptionId")
    .put(subscriptionController.updateSubscription);


export default router;
