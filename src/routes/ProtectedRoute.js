import { Navigate } from "react-router-dom"
export const ProtectedRoute = ({childern}) => {

    const token =  JSON.parse(sessionStorage.getItem("token"))

    return token ? childern : <Navigate to="/login" />
     

}
