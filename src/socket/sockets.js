import { io } from "socket.io-client";

export const checkOnline = io("/onlineState", {
  reconnection: false,
  upgrade:false,
  rejectUnauthorized:false,
});