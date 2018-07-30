import { Router } from "express";
import subscriptiontController from "../controllers/subscription.controller";

const router = Router();

router.route("/:clientId")
/** POST /visits - add new visit to client */
    .post(subscriptiontController.addNewSubscription);


export default router;
