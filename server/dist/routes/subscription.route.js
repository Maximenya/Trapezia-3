"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subscription_controller_1 = __importDefault(require("../controllers/subscription.controller"));
const router = express_1.Router();
router.route("/:clientId")
    /** POST /visits/:clientId - add new visit to client */
    .post(subscription_controller_1.default.addNewSubscription)
    /** GET /visit/:clientIds - get all subscriptions for client */
    .get(subscription_controller_1.default.getAllSubscriptions);
/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/active")
    .get(subscription_controller_1.default.getAllActiveSubscriptions);
/** GET /visits/:clientId/active - get all subscriptions for client */
router.route("/:clientId/:subscriptionId")
    .put(subscription_controller_1.default.updateSubscription);
exports.default = router;
//# sourceMappingURL=subscription.route.js.map