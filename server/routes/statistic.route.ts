import { Router } from "express";
import statisticController from "../controllers/statistic.controller";

const router = Router();

router.route("/gender")
  /** POST /visits/:clientId - add new visit to client */
  .get(statisticController.getGenderStats);

router.route("/age")
  /** POST /visits/:clientId - add new visit to client */
  .get(statisticController.getAgeStats);

export default router;
