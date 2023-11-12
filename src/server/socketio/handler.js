export async function IOHandler(io){
    const users = {}
    io.on ("connection", (socket) => {
        console.log(`New Client connetcted : ${socket.id}`)
        
        socket.on('join', (name) => {
            socket.username = name;
            socket.broadcast.emit('userJoined', name);
        });


        
        socket.on("send_message" , (data) => {
            socket.broadcast.emit("receive_message", {...data, sender : socket.data})
        })

        socket.on('chatMessage', (message) => {
            io.emit('chatMessage', {
              user: socket.username,
              message: message,
              time: new Date().toLocaleTimeString(),
            });
         });
         

        socket.on("disconnect", () => {
            console.log(`Client disconnected: ${socket.id}`)
        })
   
    })
}