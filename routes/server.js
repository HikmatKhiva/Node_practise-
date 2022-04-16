import { Router } from "express";
import { getAll, create, remove } from "../controller/server.js";

const router = Router();
router.get("/api/server/",getAll);
router.post("/api/server", create);
router.delete("/api/server/:id",remove);
export default router