import { useState } from "react"

export default function LoginContainer(){
    const [user, setUser] = useState({})
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="bg-blue-300 h-[80%] w-[90%] md:w-[48%] rounded-xl shadow-xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">Login</h1>
                <form
                 className="w-[80%]  md:w-[50%] h-[70%] md:h-[50%] bg-slate-50 rounded-lg flex flex-col gap-3 items-center justify-start"
                 
                 >
                    <label className="text-lg font-thin mt-10">Username</label>
                    <input
                     className="bg-slate-50 w-[60%] border-2 border-blue-300 rounded shadow-xl outline-none"
                     type="text"
                     placeholder="Username"
                     name="username"
                     onChange={handleChange} 
                     required
                      />
                    <label className="text-lg font-thin">Password</label>
                    <input
                     className="bg-slate-50 w-[60%] border-2 border-blue-300 rounded shadow-xl outline-none"
                     type="password"
                     placeholder="Password"
                     name="password"
                     onChange={handleChange} 
                     required
                      />
                    <button className="text-lg font-bold w-[150px] h-[40px] bg-blue-300 rounded-lg mt-10 hover:bg-slate-50 hover:scale-105 hover:border-2 hover:border-blue-300 ">Login</button>
                </form>
        </div>
    )
}