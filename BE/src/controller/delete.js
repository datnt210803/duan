import express from 'express'
const router = express.Router()

const data = [
    { id: 1, name: "Chuột", price: 100 },
    { id: 2, name: "Bàn phím", price: 200 },
    { id: 3, name: "Màn hình", price: 500 },
]

// Delete
// router.delete("/products/:id", (req, res) => {
//     try {
//         const id = req.params.id
//         const productIndex = data.findIndex(item => item.id == id)
//         if (productIndex >= 0) {
//             data.splice(productIndex, 1)
//             res.json(data)
//             res.send("Delete completed")
//             res.end()
//         } else {
//             res.status(400).send("Sản phẩm không tồn tại!")
//         }
//     } catch (error) {
//         res.status(500).send({
//             message: "Server error"
//         })
//     }

// })

const deleteProduct=async(req,res)=>{
    try {
        const id = req.params.id
        const productIndex = data.findIndex(item => item.id == id)
        if (productIndex >= 0) {
            data.splice(productIndex, 1)
            res.json(data)
            res.send("Delete completed")
            res.end()
        } else {
            res.status(400).send("Sản phẩm không tồn tại!")
        }
    } catch (error) {
        res.status(500).send({
            message: "Server error"
        })
    }
}
export default deleteProduct