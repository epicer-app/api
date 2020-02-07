import express from "express";
import falcorExpress from "falcor-express";
import Router from "falcor-router";
import * as path from 'path';

const app = express();

app.use("/model.json", falcorExpress.dataSourceRoute((req, res) => {
    return new Router([{
        route: "greeting",
        get: () => {
            return { path:["greeting"], value: "Hello World" };
        }
    }]);
}));

app.use(express.static(path.join(__dirname, "../static")));

app.listen(3000);