const WSPort = 10843;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: WSPort });
 
wss.on(`connection`, (ws) => {
    ws.on(`message`, (message) => {
        console.log(`RECIEVED: ${message}`);
    });
});