import express from "express";
import showProduct from "../controller/products.js"

const router=express.Router()
// Miiddleware
router.use((req, res, next) => {
    console.log(req.url);
    next()
})
router.get("/products",showProduct)
export default router