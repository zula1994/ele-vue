const express = require('express');
const app = express();
const path = require('path');
const socketio = require('socket.io');
// 端口
const port = process.env.PORT || 3000;
// 静态资源目录
app.use(express.static(path.resolve(__dirname, 'static')));
// 启动页面
app.use(function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// 创建服务
const server = app.listen(port, function() {
    console.log('Listening on port: ' + port);
});

// 使用socket.io
const io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    socket.emit('connected');
});
