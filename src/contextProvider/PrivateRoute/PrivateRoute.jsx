import { useContext } from "react"
import { OurContext } from "../AuthContext"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

const {user} = useContext(OurContext)
const location = useLocation()
console.log('location', location)
if(user){
  return children;
} 
 return <Navigate state={location.pathname} to={'/login'} />



}

export default PrivateRoute