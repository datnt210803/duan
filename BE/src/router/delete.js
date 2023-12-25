import express from "express";
import deleteProduct from "../controller/delete.js"

const router=express.Router()
// Miiddleware
router.use((req, res, next) => {
    console.log(req.url);
    next()
})
router.delete("/products/:id",deleteProduct)
export default router