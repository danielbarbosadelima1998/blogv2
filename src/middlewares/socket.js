module.exports = io => {
  io.on('connection', (socket) => {
    console.log(socket.id);
    let token = socket.handshake.query.token;
    console.log(token)
    // ...
  });

  return (req, res, next) => {
    req.io = io;
    next();
  };
};