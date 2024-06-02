import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";


export default function Login () {

    const [auth, setAuth] = useState();
    const navigate = useNavigate();

    const Auth = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/findUser', auth);
            if (response.data) {
                if (response.data.res === false) {
                    console.log("There is no user with the provided credentials");
                } else {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    navigate('/');
                }
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form onSubmit={Auth} className="w-1/2 mx-auto text-center mt-20 space-y-4">
            <label htmlFor="">Login</label>&nbsp;&nbsp;&nbsp;
            <input type="text" name="login" id="login" onChange={(e)=>setAuth({...auth, email: e.target.value})} className="ring-2" /><br />
            <label htmlFor="">Password</label>&nbsp;&nbsp;&nbsp;
            <input type="text" name="password" id="password" onChange={(e)=>setAuth({...auth, password: e.target.value})} className="ring-2" /> <br />
            <input type="submit" value="Login" className="cursor-pointer bg-blue-700 p-3 rounded-lg text-white font-semibold" />
        </form>
    )
}