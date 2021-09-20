const SocketClient = {
  path: {
    bithumbPublicSocket: process.env.REACT_APP_BITHUMB_PUBLIC_SOCKET_PATH,
  },
  publicInstance(socketUrl) {
    if (!socketUrl) return;
    const ws = new WebSocket(socketUrl);
    ws.binaryType = 'arraybuffer';

    return ws;
  },
};

export default SocketClient;
