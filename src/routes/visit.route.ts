import { Router } from "express";
import visitController from "../controllers/visit.controller";

const router = Router();

router.route("/:clientId")
/** POST /visits - add new visit to client */
    .post(visitController.addNewVisit);



export default router;
