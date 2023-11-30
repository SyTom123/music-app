import { Request, Response, Router } from "express";
import Topic from "../../models/topic.model";
import * as controller from "../../controllers/client/topics.controller"
const router: Router = Router();
router.get("/", controller.topics );
export default router;