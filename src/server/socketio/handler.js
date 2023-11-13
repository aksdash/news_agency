export async function IOHandler(io){
    const users = {}
    io.on ("connection", (socket) => {
        console.log(`New Client connetcted : ${socket.id}`)
        
        socket.on('join', (name) => {
            socket.username = name;
            console.log(`${name} joined the chat`);
        // Broadcast a message to all clients about the new user joining
            io.emit('message', { username: name, message: `${name} joined the chat` });
        });

        socket.on('message', (data) => {
            console.log(`Message from ${data.username}: ${data.message}`);
            // Broadcast the message to all clients
            io.emit('message', { username: data.username, message: data.message });
          });
        
          // Handle user disconnect
          socket.on('disconnect', () => {
            console.log('A user disconnected');
            // Broadcast a message to all clients about the user leaving
            io.emit('message', { username: 'System', message: 'A user left the chat' });
          });
   
    })
}