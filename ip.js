const { lookup } = require('dns')

lookup('localhost', { all: true }, (err, addresses) => {
  console.log(addresses)
})
