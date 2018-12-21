const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    setTimeout(() => {
        socket.emit('request', '收到发消息了！！！');
    }, 0)
    setInterval(() => {
        socket.emit('request', '收到发消息了！！！');
    }, 5000)
    console.log('socket connection success');
 });
server.listen(3000, () => {
    console.log('server start');
});