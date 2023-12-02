import { Express } from "express";
import topicRoutes from "./topics.route";
import songRoutes from "./song.route";
import userRoutes from "./user.route";

const clientRoutes = (app: Express): void => {
    app.use(`/topics`,topicRoutes);
    app.use(`/songs`,songRoutes);
    app.use(`/users`,userRoutes);
}
export default clientRoutes;