import {Router} from 'express';
const router: Router = Router();
import * as controller from "../../controllers/client/user.controller";
import * as validate from "../../validate/clients/user.validate";

router.get("/register",controller.register );

router.post("/register",validate.registerPost,controller.registerPost );

export default router;
