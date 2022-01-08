import { useContext } from "react"
import { useLocation, Navigate, Routes } from "react-router-dom"
import { appContext } from "../../context/HerosContext"

function Auth({ children }) {
    const {auth} = useContext(appContext)
    let {navigateMemo} = useContext(appContext)
    let location = useLocation()
    navigateMemo = location.pathname
    
   
    if(!auth){
        return <Navigate to="/login" state={{memory:navigateMemo}}/>
    }
    return (
        <Routes>
            {children}
        </Routes>
    )
}

export default Auth
