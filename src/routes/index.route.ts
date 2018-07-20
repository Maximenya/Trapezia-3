import { Router } from "express";
import userRoutes from "./client.route";

const router = Router();

router.use("/clients", userRoutes);

export default router;
