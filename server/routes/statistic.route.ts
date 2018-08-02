import { Router } from "express";
import statisticController from "../controllers/statistic.controller";

const router = Router();

router.route("/allPeople")
/** POST /visits/:clientId - add new visit to client */
    .get(statisticController.getTotalPeople);

export default router;
