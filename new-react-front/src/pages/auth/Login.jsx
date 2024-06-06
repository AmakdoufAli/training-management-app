import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import './login.css';


export default function Login () {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('user')){
            setShow(true);
        }else{
            setShow(false);
            navigate('/');
        }
    },[]);

    const [auth, setAuth] = useState();

    const Auth = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/findUser', auth);
            if (response.data) {
                if (response.data.res === false) {
                    alert("There is no user with the provided credentials");
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
        show && (
            <section className="bg-cover bg-center min-h-screen flex items-center justify-center backgroundimg backGround">
                <div className="bg-white bg-opacity-90 p-10 rounded-xl shadow-lg max-w-md w-full">
                    {/* <div className="text-center">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                            Sign in to your account
                        </h1>
                    </div> */}
                    <img src="images/logo.png" width={80} style={{borderRadius: '100%', margin: 'auto'}} alt="ofppt" />
                    <form className="space-y-6 mt-5" onSubmit={Auth}>
                        <div>
                            <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="login" id="login" onChange={(e)=>setAuth({...auth, email: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Mot de pass</label>
                            <input type="password" name="password" id="password" onChange={(e)=>setAuth({...auth, password: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none">Se Connecter</button>
                    </form>
                </div>
            </section>
        )
    )
}