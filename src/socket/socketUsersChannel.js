import React from "react";
import { io } from "socket.io-client";
import { eventChannel, END} from 'redux-saga'
import { checkOnline as ioSocket } from './sockets'

const checkOnline = ioSocket
export const socketUsersChannel = () => {
  return eventChannel( emit => {
    const unsubscribe = () => {
      io.of("/onlineState", subscriber)
    }
    const subscriber = (event) => {
      emit(event)
    }
    checkOnline.on("userLoggedIn", subscriber);
    checkOnline.on("userLoggedOut", subscriber);
    return unsubscribe
  })
};
