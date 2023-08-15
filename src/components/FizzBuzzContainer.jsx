import { useState } from "react";

export default function FizzBuzzContainer({isAuthorized}){
    const [fizzBuzz, setFizzBuzz] = useState([]);
    const [isFizzBuzzList, setIsFizzBuzzList] = useState(false);
    
    async function handleFizzBuzz() {
        if(isAuthorized){//if user is authorized then only fetch data
                try {
                  const response = await fetch("http://localhost/fizzBuzzBackend/fizzbuzz");
                  const data = await response.json();
                  setFizzBuzz(data);
                  setIsFizzBuzzList(!isFizzBuzzList);
                } catch (error) {
                  console.error("Error fetching FizzBuzz data:", error);
                }
        }else{
            alert("User Not Authorized")
        }
    }

    const fizzBuzzList = fizzBuzz.map((item, index) => {
        let backgroundColor = "";
        let animation = "";
        switch (item) {
          case "FizzBuzz":
            backgroundColor = "bg-blue-300";
            animation = "animate-pulse";
            break;
          case "Fizz":
            backgroundColor = "bg-green-300";
            break;
          case "Buzz":
            backgroundColor = "bg-red-300";
            break;
          default:
            backgroundColor = "bg-slate-50";
        }
      
        return (
          <li
            key={index}
            className={`w-[80%] h-[100%] rounded-xl flex flex-col items-center justify-center ${backgroundColor} ${animation}`}
          >
            <h1 className="text-2xl font-bold">{item}</h1>
          </li>
        );
      });

   
    return(
        <div className="bg-blue-300 h-[80%] w-[90%] md:w-[48%] rounded-xl shadow-xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">FizzBuzz</h1>
            <div className="w-[80%] h-[80%] bg-slate-50 rounded-xl flex flex-col items-center justify-start gap-3 ">
                <button
                 className="text-lg font-bold w-[150px] h-[40px] bg-blue-300 rounded-lg mt-10 hover:bg-slate-50 hover:scale-105 hover:border-2 hover:border-blue-300"
                 onClick={handleFizzBuzz}
                 >
                    {isFizzBuzzList ? "Close" : "Get FizzBuzz"}
                </button>
                <ul className="w-[90%] h-[80%] rounded-xl bg-slate-50 mb-3 grid grid-cols-4 grid-flow-row gap-2 p-2 overflow-y-scroll">
                    {isFizzBuzzList ? fizzBuzzList : null}
                </ul>

            </div>
        </div>
    )
}