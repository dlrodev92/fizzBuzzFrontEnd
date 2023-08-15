import { useState } from "react"

export default function LoginContainer({handleAuth}){
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const res = await fetch('http://localhost/fizzBuzzBackend/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
    
            const data = await res.json();
    
            if (data.error) {
                alert('Login unsuccessful, enter valid credentials');
                alert(data.error);
            } else {
                localStorage.setItem('token', data.token);// this should be storage in a cookie to meet security standards.
                try {
                    const send = await fetch('http://localhost/fizzBuzzBackend/validateLogin', {
                        method: 'GET',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    });
    
                    const data2 = await send.json();
    
                    if (data2.error) {
                        alert(data2.error);
                    } else {
                        alert('Login successful');
                        handleAuth(data2.authorized);
                    }
                } catch (error) {
                    alert('An error occurred while validating login.');
                    console.error(error);
                }
            }
        } catch (error) {
            alert('Login unsuccessful due to an error.');
            console.error(error);
        }
    }

    return(
        <div className="bg-blue-300 h-[80%] w-[90%] md:w-[48%] rounded-xl shadow-xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">Login</h1>
                <form
                 className="w-[80%]  md:w-[50%] h-[70%] md:h-[50%] bg-slate-50 rounded-lg flex flex-col gap-3 items-center justify-start"
                 onSubmit={handleSubmit}
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