import io from 'socket.io-client'
class SocketDemo {
  render() {
    const url = 'http://localhost:8080'
    const socket = io(url)
    socket.on('request', (msg) => {
        const div = document.createElement('div')
        div.innerHTML = msg
        document.querySelector('.box').append(div)
        console.log('msg', msg)
      })
  }
}

const socketDemo = new SocketDemo()

socketDemo.render()