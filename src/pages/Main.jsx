import FizzBuzzContainer from "../components/FizzBuzzContainer"
import LoginContainer from "../components/LoginContainer"
export default function Main(){
    return(
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-5 p-3">
        <LoginContainer/>
        <FizzBuzzContainer/>
    </div>
    )
}