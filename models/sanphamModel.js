// import thư viện
const mongoose = require('mongoose');

// khai báo sản phẩm
const SanphamSchema = mongoose.Schema({
    hinhanh: {
        type: String,
        required: true,
    },
    ten: {
        type: String,
        required: true,
    },
    gia: {
        type: Number,
        required: true,
    },
    soluong: {
        type: Number,
        required: true,
    },
    tonkho: {
        type: Boolean,
    }
});

const SanphamModel = mongoose.model('sanpham', SanphamSchema);

module.exports = SanphamModel;