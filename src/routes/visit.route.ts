import { Router } from "express";
import visitController from "../controllers/visit.controller";

const router = Router(); // eslint-disable-line new-cap

router.route("/")
/** GET /api/users - Get list of users */
    .post(visitController.addNewVisit);



export default router;
