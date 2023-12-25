
import express from 'express'
const router = express.Router()
import Joi from 'joi'
const data = [
    { id: 1, name: "Chuột", price: 100 },
    { id: 2, name: "Bàn phím", price: 200 },
    { id: 3, name: "Màn hình", price: 500 },
]
const productSchema=Joi.object({
    name:Joi.string().required(),
    price:Joi.number().min(100).required()
})
// router.post('/products', (req, res) => {
//     try {
//         const newData = req.body
//         data.push(newData)
//         res.send(data)
//     } catch (error) {
//         res.status(500).send({
//             message: "Server error"
//         })
//     }
// })

const add=async(req,res)=>{
    try {
        const newData = req.body
        data.push(newData)
        res.send(data)
    } catch (error) {
        res.status(500).send({
            message: "Server error"
        })
    }
}
export default add
