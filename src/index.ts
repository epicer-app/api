import express from "express";
import falcorExpress from "falcor-express";
import Router, { GetRoute } from "falcor-router";
import * as path from 'path';
import cors from "cors";

import {recipes} from './routes/recipes';
import { popular } from "./routes/popular";

const app = express();

const corsOptions = {
    "origin": true,
    "credentials": true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use("/model.json", falcorExpress.dataSourceRoute((req, res) => {
    return new Router([{
        route: "greeting",
        get: () => {
            return { path:["greeting"], value: "Hello World" };
        }
    },
    ...recipes,
    ...popular,
    ]);
}));

app.use(express.static(path.join(__dirname, "../static")));

app.listen(3000);