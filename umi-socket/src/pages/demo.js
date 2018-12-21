import React, { Component } from 'react'
import io from 'socket.io-client'

export class Demo extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'http://localhost:8000'
    const socket = io(url);
    socket.on('request', (msg) => {
        const { data } = this.state;
        data.push(msg);
        this.setState({
          data: [...data],
        })
        console.log('msg', msg)
      })
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {
          data.map(d => {
            return <div>{d}</div>
          })
        }
      </div>
    )
  }
}

export default Demo
