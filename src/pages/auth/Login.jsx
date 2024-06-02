import { useState } from "react"


export default function Login () {

    const [auth, setAuth] = useState();

    const Auth = (e) =>{
        e.preventDefault();
        console.log(auth);
    }

    return (
        <form onSubmit={Auth} className="w-1/2 mx-auto text-center mt-20 space-y-4">
            <label htmlFor="">Login</label>&nbsp;&nbsp;&nbsp;
            <input type="text" name="login" id="login" onChange={(e)=>setAuth({...auth, login: e.target.value})} className="ring-2" /><br />
            <label htmlFor="">Password</label>&nbsp;&nbsp;&nbsp;
            <input type="text" name="password" id="password" onChange={(e)=>setAuth({...auth, password: e.target.value})} className="ring-2" /> <br />
            <input type="submit" value="Login" className="cursor-pointer bg-blue-700 p-3 rounded-lg text-white font-semibold" />
        </form>
    )
}