import { Router } from "express";
import visitController from "../controllers/visit.controller";

const router = Router();

router.route("/:clientId")
  /** POST /visits - add new visit to client */
  .post(visitController.addNewVisit)

  /** PUT /visits - finish clients visit */
  .put(visitController.finishVisit);

router.route("/")
  /** GET /visits - load clients climbing now */
  .get(visitController.loadClimbingNow);



export default router;
