import * as express from "express";
const router = express.Router();

import addressRouter from "./address";
import stateRouter from "./updatedb";

// localhost:3000/api/address/
router.use("/address", addressRouter);
router.use("/state", stateRouter);

export default router;