import express from "express";
import next from "next";

import routes from "./routes";

const port = process.env.PORT ?? 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "../client" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    
    server.use("/api", routes);
    server.get("*", (req, res) => handle(req, res));

    server.listen(port, () => {
        console.log("> Ready on http://localhost:" + port);
    });
});
