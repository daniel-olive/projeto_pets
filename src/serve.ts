import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";
import router from "./routes";

dotenv.config();

const serve = express();

serve.set("view engine", "mustache");
serve.set("views", path.join(__dirname, "views"));
serve.engine("mustache", mustache());

serve.use(express.static(path.join(__dirname, "../public")));

serve.use(mainRoutes);

serve.use(express.json());
serve.use(express.urlencoded({ extended: true }));

serve.use(router);

serve.use((req, res) => {
    res.render("pages/404");
});

serve.listen(process.env.PORT);

