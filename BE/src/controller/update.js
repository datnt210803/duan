import express from 'express'
const router = express.Router()

const data = [
    { id: 1, name: "Chuột", price: 100 },
    { id: 2, name: "Bàn phím", price: 200 },
    { id: 3, name: "Màn hình", price: 500 },
]

// Updated
// router.put('/products/:id', (req, res) => {
//     try {
//         const id = req.params.id
//     const updateData = req.body
//     const productIndex = data.findIndex(item => item.id == id)
//     console.log(productIndex);
//     if (productIndex >= 0) {
//         data[productIndex] = {...data[productIndex], ...updateData}
//         res.send(data[productIndex])
//         res.end()
//     } else {
//         res.status(400).send("Sản phẩm không tồn tại!")
//     }
//     } catch (error) {
//         res.status(500).send({
//             message: "Server error"
//         })
//     }
// })

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updateData = req.body
        const productIndex = data.findIndex(item => item.id == id)
        console.log(productIndex);
        if (productIndex >= 0) {
            data[productIndex] = { ...data[productIndex], ...updateData }
            res.send(data[productIndex])
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
export default updateProduct