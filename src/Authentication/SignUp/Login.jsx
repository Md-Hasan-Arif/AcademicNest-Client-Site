import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firbase.config";






const Login = () => {

    const {signIn} = useContext(AuthContext);
    const [LoginError, setLoginError] =  useState('');
    const location = useLocation();
    const navigate = useNavigate();

   
    const Auth = auth;
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(Auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .the(error => {
            console.log('error', error.message)
            setLoginError(error.message);
        })

    }

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        setLoginError('');
       
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            const from = location.state?.from?.pathname || "/";
              Swal.fire('You have successfully logged in !');
              navigate(from, {replace: true})
        })
        .catch(error => {
        console.log(error)
        setLoginError(error.message)  // Redirect to the original page or home page
        });
    }
   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-outline btn-accent" />
                        </div>
                    </form>
                    {
                        <button className="text-green-300" onClick={handleGoogleLogin}>Login with Google</button>
                    
                    }
                    {
                        LoginError && <p className="text-center text-red-700">{LoginError}</p>
                    }
                    <p className="text-center mb-3">If you are new then <Link to="/register" className="text-red-600">SignUp</Link> first</p>
                </div>
            </div>
        </div>
    );
};

export default Login;