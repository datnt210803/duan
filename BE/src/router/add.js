import express from "express";
import add from "../controller/add.js"

const router=express.Router()
// Miiddleware
router.use((req, res, next) => {
    console.log(req.url);
    next()
})
router.post("/products",add)
export default router