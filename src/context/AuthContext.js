import { message } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const Auth = createContext();

const initialState = {
  isAuthenticated: false,
  user: {},
  isAdmin: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      return {
        isAuthenticated: true,
        isAdmin: payload.isAdmin,
        user: payload.user,
      };
    case "SET_LOGOUT":
      return {
        isAuthenticated: false,
        isAdmin: false,
        user: {},
      };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    try {
      dispatch({ type: "SET_LOGOUT" });
      localStorage.removeItem("token");
      message.success("Successfully Logout.");
      setTimeout(() => {
        navigate("/auth/login");
      }, 500);
    } catch (err) {
      console.log("error", err);

      message.error("Something went wrong while logging out");
    }
  },[navigate, dispatch]);

  //   ************Set user from token*************

  const setUserFromToken = useCallback(async (token) => {
    setIsAppLoading(true);
    try {
      const res = await axios.get("http://locahost:8000/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        const user = res.data.user;
        if (!user || !user.role) {
          console.log("User not found or role missing");
          handleLogout();
        }
        const isAdmin = user.role.includes("admin");
        dispatch({ type: "SET_LOGIN", payload: { user, isAdmin } });
      } else {
        handleLogout();
      }
    } catch (err) {
      console.log("error", err);
      dispatch({ type: "SET_LOGOUT" });
      message.success("Session expired, please log in again.");
      navigate("/auth/login");

      localStorage.removeItem("token");
    } finally {
      setIsAppLoading(false);
    }
  },[navigate, handleLogout]);


const checkTokenExpiration=useCallback(()=>{
  const token =localStorage.getItem("token")
  if(token){
    const decodeToken = jwtDecode(token)
    const currentTime = Date.now()/1000
if(decodeToken.exp < currentTime){
 message.error("Session expired, please log in again.");
        handleLogout();
}

}
},[handleLogout])

useEffect(()=>{
    const interval= setInterval(()=>{
      checkTokenExpiration()
    },5000)
const fetchToken =async()=>{
    const token = localStorage.getItem("token")
    if(token){
        await setUserFromToken(token)
    }else{
        setIsAppLoading(false)
    }
}
fetchToken()
return ()=>{
    clearInterval(interval)
}


})




  return <Auth.Provider value={{...state,handleLogout,setUserFromToken,isAppLoading,dispatch,}} >{children}</Auth.Provider>;
}

export const useAuthContext = () => useContext(Auth);
