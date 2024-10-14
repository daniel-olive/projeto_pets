import { Router } from "express";
import * as pageControle from "../controllers/pageControle";
import * as searchController from "../controllers/searchController";

const router = Router();

router.get("/", pageControle.home);
router.get("/dogs", pageControle.dogs);
router.get("/cats", pageControle.cats);
router.get("/fishes", pageControle.fishes);
router.get("/search", searchController.search);

export default router;
