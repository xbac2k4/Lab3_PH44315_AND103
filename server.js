const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sanphamRoute = require('./routes/sanphamRoute');
const app = express();//tao doi tuong moi
//Tạo port
const PORT = 3000;
// link connect
const uri = 'mongodb+srv://admin:nxb29122k4@cluster0.t3xxdmo.mongodb.net/md18309'
// mongodb+srv://<username>:<password>@cluster0.t3xxdmo.mongodb.net/<tên database>

//Kết nối mongodb
mongoose.connect( uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Kết nối thành công đến server");
}).catch((err)=>{
    console.error(err);
});
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', sanphamRoute);

//Chạy server
app.listen(PORT,()=>{
    console.log(`Server đang chạy cổng ${PORT}`);
});