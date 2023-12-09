import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin=(e)=>{
       e.preventDefault();
       const userInfo ={
         email,password
    }
    console.log(userInfo.email, userInfo.password);

       signIn(userInfo.email, userInfo.password)
       .then(result=>{
        setSuccess(result.user);
        toast.success('login successful')
        navigate('/');
    })
        .catch(err=>{
           setError(err.message);
           toast.error(err.message);
        })
    }
    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-[url('https://i.ibb.co/sQcvbPP/login.jpg')] bg-cover h-screen bg-slate-900 bg-blend-overlay">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16  lg:px-8 lg:py-24 ">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="lg:text-[50px] font-[700] sm:text-3xl text-white font-Montstreet uppercase">Welcome!</h1>

                        <p className="mt-4 text-teal-500">
                        To remember our login details, we use the Remember Password Option displayed in Official site or work in an email account or any social / login to your sites.
                        </p>
                    </div>

                    <form onSubmit={handleLogin}
                    action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4 ">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-[20px]  font-[600] text-gray-500">
                                No account?
                                <Link to='/register'><a className="underline font-Montstreet text-red-500" href="">Sign up</a></Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                
            </section>
        </div>
    );
};

export default Login;