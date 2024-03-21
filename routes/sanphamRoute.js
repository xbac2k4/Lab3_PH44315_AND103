const express = require('express');
const router = express.Router();
const SanphamModel = require('../models/sanphamModel');

router.get('/', async (req, res) => {
    try {
        const sanpham = await SanphamModel.find();//lấy dữ liệu 
        res.send(sanpham); // hiển thị lên trình duyệt
        console.log(sanpham);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});
//post
router.post('/sanpham', async (req, res) => {
    try {
        let sp = req.body;
        let sanpham = await SanphamModel.create(sp);
        res.send(sanpham);
        console.log(sanpham);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});
//put
router.put('/sanpham/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const sp= req.body;
        // const sanphams = new sanpham({ ten, gia, soluong, tonkho });
        const update = await SanphamModel.findByIdAndUpdate(_id, sp, { new: true });
        res.json(update);
        console.log(update);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});
//delete
router.delete('/sanpham/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const deleteSp = await sanpham.findByIdAndDelete(_id);
        res.json(deleteSp);
        console.log(deleteSp);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});
module.exports = router;