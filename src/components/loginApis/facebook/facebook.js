import { useDispatch } from "react-redux";
import FbLogin from "react-facebook-login";
import { FacebookLoginStyled } from "./styles";
import * as keys from "../conf.json";
import { LOG_IN, SET_USER_DATA } from "../../../reduxStore/reducers/authorizeUser/authorizeUserTypes";

export const FacebookLogin = () => {
  const dispatch = useDispatch();
  const responseFacebook = (facebookRes) => {
    if (facebookRes) {
      try {
        const { name, email, picture: { data: { url } } } = facebookRes;
        localStorage.setItem("userData", JSON.stringify({ name, email, imageUrl: url }));
        return dispatch({ type: SET_USER_DATA, payload: { name, email, image: url } });
      }catch (error) {
        console.error('Facebook login error: ', error)
      }
    }
  };

  return (
    <>
      <FacebookLoginStyled>
        <FbLogin
          fields="name,email,picture"
          appId={keys.facebookAuth}
          autoLoad={false}
          textButton={"facebook"}
          callback={responseFacebook} />
      </FacebookLoginStyled>
    </>
  );
};