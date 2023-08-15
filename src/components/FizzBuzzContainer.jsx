export default function FizzBuzzContainer(){
    return(
        <div className="bg-blue-300 h-[80%] w-[90%] md:w-[48%] rounded-xl shadow-xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">FizzBuzz</h1>
            <div className="w-[80%] h-[80%] bg-slate-50 rounded-xl flex flex-col items-center justify-start gap-3 ">
                <button className="text-lg font-bold w-[150px] h-[40px] bg-blue-300 rounded-lg mt-10 hover:bg-slate-50 hover:scale-105 hover:border-2 hover:border-blue-300 ">
                    Get FizzBuzz
                </button>
                <ul className="w-[90%] h-[80%] rounded-xl bg-slate-500">

                </ul>

            </div>
        </div>
    )
}