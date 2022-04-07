import * as express from "express";
const router = express.Router();

import addressRouter from "./address";
import stateRouter from "./updatedb";
import senRouter from "./updateSen";

// localhost:3000/api/address/
router.use("/address", addressRouter);
router.use("/state", stateRouter);
router.use("/sen", senRouter);

export default router;