import { Router } from "express";
import statisticController from "../controllers/statistic.controller";

const router = Router();

router.route("/gender")
  /** GET /statistic/gender - retrieve gender statistic  */
  .get(statisticController.getGenderStats);

router.route("/age")
  /** GET /statistic/age - retrieve age statistic */
  .get(statisticController.getAgeStats);

  router.route("/knowFrom")
/** GET /statistic/knowFrom - retrieve know From statistic */
  .get(statisticController.knowFromStats);

  router.route("/registrationDate")
/** GET /statistic/registrationDate - retrieve registration date statistic */
  .get(statisticController.getRegMonthStats);

  router.route("/subscriptions")
/** GET /statistic/subscriptions - retrieve registration date statistic */
  .get(statisticController.subscriptionsStats);

  router.route("/attendance")
/** GET /statistic/attendance - retrieve registration date statistic */
  .get(statisticController.getAttendanceStats);

export default router;
