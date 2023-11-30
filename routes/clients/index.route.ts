import { Express } from "express";
import topicRoutes from "./topics.route";

const clientRoutes = (app: Express): void => {
    app.use(`/topics`,topicRoutes);
}
export default clientRoutes;