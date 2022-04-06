import * as express from "express";
const router = express.Router();

import addressRouter from "./test";

// localhost:3000/api/chirps/
router.use("/address", addressRouter);

export default router;