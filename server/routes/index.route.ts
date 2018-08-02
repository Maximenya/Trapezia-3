import { Router } from "express";
import userRoutes from "./client.route";
import visitRoutes from "./visit.route";
import subscriptionRoutes from "./subscription.route";
import statisticRoutes from "./statistic.route";

const router = Router();

router.use("/clients", userRoutes);
router.use("/visits", visitRoutes);
router.use("/subscriptions", subscriptionRoutes);
router.use("/statistic", statisticRoutes);

export default router;
