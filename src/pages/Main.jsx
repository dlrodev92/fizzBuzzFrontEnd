import FizzBuzzContainer from "../components/FizzBuzzContainer"
import LoginContainer from "../components/LoginContainer"
export default function Main(){
    return(
    <div className="w-screen h-screen flex items-center justify-center gap-5">
        <FizzBuzzContainer/>
        <LoginContainer/>
    </div>
    )
}