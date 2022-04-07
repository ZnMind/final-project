import * as express from "express";
const router = express.Router();

import db from "../db";

/* router.get("/", async (req, res) => {
    
    try {
        let test = await db.address.all();
        res.json(test);
    } catch(e) {
        console.log(e);
    }
}) */

router.get("/:id?", async (req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            const address = await db.address.one(id);
            res.json(address);
        } else {
            const address = await db.address.all();
            res.json(address);
        }
    } catch(e) {
        console.log(e);
    }
})

router.post("/", async (req, res) => {
    try {
        let body = req.body;
        let dbRes = await db.address.insert(body.address);
        res.status(200).json(dbRes);
    } catch(e) {
        console.log(e);
    }
})

export default router;