const { IncomingMessage } = require('http');
const { Socket } = require('net');

function MyIcomingMessage (socket) {
  if (!(this instanceof MyIcomingMessage)) {
    return new MyIcomingMessage(socket);
  }

  IncomingMessage.call(this, socket);
}

Object.setPrototypeOf(MyIcomingMessage.prototype, IncomingMessage.prototype);
Object.setPrototypeOf(MyIcomingMessage, IncomingMessage);

new MyIcomingMessage(new Socket());
