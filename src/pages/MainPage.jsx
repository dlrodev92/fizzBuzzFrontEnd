import FizzBuzzContainer from "../components/FizzBuzzContainer"
import LoginContainer from "../components/LoginContainer"
import { useState } from "react"

export default function MainPage(){
    const [isAuthorized, setIsAuthorized] = useState(false) 

    const handleAuth = (value) => {
        setIsAuthorized(value)
    }

    return(
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-5 p-3">
        <LoginContainer handleAuth={handleAuth}/>
        <FizzBuzzContainer isAuthorized={isAuthorized}/>
    </div>
    )
}