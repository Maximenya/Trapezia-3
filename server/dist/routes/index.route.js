"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_route_1 = __importDefault(require("./client.route"));
const visit_route_1 = __importDefault(require("./visit.route"));
const subscription_route_1 = __importDefault(require("./subscription.route"));
const router = express_1.Router();
router.use("/clients", client_route_1.default);
router.use("/visits", visit_route_1.default);
router.use("/subscriptions", subscription_route_1.default);
exports.default = router;
//# sourceMappingURL=index.route.js.map