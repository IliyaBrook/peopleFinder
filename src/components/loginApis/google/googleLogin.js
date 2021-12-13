import React from "react";
import { useDispatch } from "react-redux";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import * as keys from '../conf.json'
import { GoogleLoginButton } from "./styles";
import googleSvg from "../../../images/google1.svg";
import { LOG_IN, SET_USER_DATA } from "../../../reduxStore/reducers/authorizeUser/authorizeUserTypes";


export const GoogleLogin = (props) => {
  const dispatch = useDispatch()

  const googleLoginOnFailure = (errors) => {
    console.error(errors)
  }
  const googleLoginOnSuccess = (googleRes) => {
    if (googleRes) {
      try {
        const { profileObj:{name, email, imageUrl} } = googleRes
        localStorage.setItem("userData",JSON.stringify({name, email, imageUrl}))
        return dispatch({type:SET_USER_DATA, payload:{name, email, imageUrl}})
      }catch (error) {
        console.error('Google login error: ', error)
      }
    }
  }

  const { signIn } = useGoogleLogin({
    onSuccess:googleLoginOnSuccess,
    clientId:keys.googleAuth,
    onFailure:googleLoginOnFailure,
  })

  return (
    <>
      <GoogleLoginButton
        onClick={signIn}
        {...props}
      >
        <img src={googleSvg} alt="google"/>
      </GoogleLoginButton>
    </>
  )
};