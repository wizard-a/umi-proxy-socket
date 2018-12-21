const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    socket.emit('request', '发消息了！！！');
    setInterval(() => {
        socket.emit('request', '发消息了！！！');
    }, 5000)
    console.log('socket connection success');
 });
server.listen(3001, () => {
    console.log('server start');
});