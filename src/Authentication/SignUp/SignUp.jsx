import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        setRegisterError('');

        if(password.length < 6) {
            setRegisterError('Password should at least 6 characters or longer');
            return;
        }
        else if(!/[A-z]/.test(password)) {
            setRegisterError('Your password should have at least one Capital letter ');
            return;
        }
        else if(!/[>>!#$%&*?<< ]/.test(password)){
            setRegisterError('Your password should have at least on special character')
            return;
        }


        
         // // create user in firebase
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire('You registration complete successfully !')
            })
            .catch(error => {
                console.log(error);
                setRegisterError('Email-already-in-use');
            })
            form.reset();

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Welcome to our academicNest assaignment group. Stay connected and be your best version. bestwishes...</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <h3 className="text-center text-green-300">SignUp</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" value="Sign Up" className="btn btn-outline btn-primary" />

                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700 text-center">{registerError}</p>
                    }
                
                    <p className="text-center mb-3">Already have an account <Link to='/login' className="text-red-600">Login</Link> please </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;