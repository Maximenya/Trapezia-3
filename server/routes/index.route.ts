import { Router } from "express";
import userRoutes from "./client.route";
import visitRoutes from "./visit.route";

const router = Router();

router.use("/clients", userRoutes);
router.use("/visits", visitRoutes);

export default router;
