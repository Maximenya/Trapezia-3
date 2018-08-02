"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const visit_controller_1 = __importDefault(require("../controllers/visit.controller"));
const router = express_1.Router();
router.route("/:clientId")
    /** POST /visits - add new visit to client */
    .post(visit_controller_1.default.addNewVisit)
    /** PUT /visits - finish clients visit */
    .put(visit_controller_1.default.finishVisit);
router.route("/")
    /** GET /visits - load clients climbing now */
    .get(visit_controller_1.default.loadClimbingNow);
exports.default = router;
//# sourceMappingURL=visit.route.js.map