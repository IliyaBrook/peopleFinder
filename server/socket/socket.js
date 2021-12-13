module.exports = io => {
  const onlineStateSpace = io.of('/onlineState');
  onlineStateSpace.on('connection', socket => {
    console.log(`user Id: ${socket.id} connected`)

    socket.on('loggedIn', user => {
      console.log('loggedIn:', user)
      socket.broadcast.emit('userLoggedIn', { ...user, socketId: socket.id })
    })
    socket.on('loggedOut', user => {
      console.log('loggedOut:', user)
      socket.broadcast.emit('userLoggedOut', { ...user, socketId: socket.id })
    })
    socket.on('disconnect', reason => {
      console.log(reason)
      console.log(`User id: ${socket.id} disconnect`)
    })
  })

}
