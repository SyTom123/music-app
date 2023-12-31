import { Express } from "express";
import topicRoutes from "./topics.route";
import songRoutes from "./song.route";
import userRoutes from "./user.route";
import * as userMiddleware from "../../middleware/client/user.middleware";

const clientRoutes = (app: Express): void => {
    app.use(userMiddleware.infoUser);
    app.use(`/topics`, topicRoutes);
    app.use(`/songs`,songRoutes);
    app.use(`/users`,userRoutes);
}
export default clientRoutes;