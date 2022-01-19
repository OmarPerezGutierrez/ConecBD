const mosca = require('mosca')

const broker = new mosca.Server({
    port: 9000
})

broker.on('ready', () =>{
    console.log('mosca is Ready!!')
})

broker.on('clientConnected', (client) =>{
    console.log('New Cliente: ' + client.id)
})
broker.on('published', (packet) => {
    console.log(packet.payload.toString())
})