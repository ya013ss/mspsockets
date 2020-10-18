const WSPort = 10843;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: WSPort });
 
console.log(`Ready.`);

wss.on(`connection`, (ws) => {
    console.log(`Oohh! A new connection?`);
    ws.on(`message`, (message) => {
        console.log(`RECIEVED: ${message}`);
    });
});
