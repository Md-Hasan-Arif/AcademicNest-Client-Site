// import { useContext } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

// import { AuthContext } from "../Providers/AuthProviders";


const Navbar = () => {
    const { user, } = useContext(AuthContext)

    // const handleLogOut =()=>{
    //     logOut()
    //     .then(()=>{})
    //     .catch(error => console.log(error))
    // }
    const navItems = <>
        <li><Link to="/" className="text-sky-400 font-semibold">All Assignment</Link></li>
        <li><Link to="/CreateAssignment" className="text-green-300 font-semibold">Create Assignment</Link></li>
        <li><Link to="/" className="text-sky-400 font-semibold">Home</Link></li>
        <li><Link to="/" className="text-green-300 font-semibold">Home</Link></li>

        {/* <li><Link to="/about">About</Link></li>
        {
        user?.email ? <>
         <li><Link to="/bookings">Bookings</Link></li>
         <li><button onClick={handleLogOut}>Log Out</button></li>
        </>
        : <li><Link to="/login">Login</Link></li>
       } */}
    </>
    return (
        // <div className="navbar bg-base-100 h-28 mb-4">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 {
        //                     navItems
        //                 }
        //             </ul>
        //         </div>
        //         {/* <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link> */}
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {
        //                 navItems
        //             }
        //         </ul>
        //     </div>
        //     <div className="navbar-end ">
        //         <button className='btn btn-outline btn-warning'>APPOINTMENT</button>
        //     </div>
        // </div>
        <div className="navbar bg-base-100 h-24 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="text-2xl text-green-600 md:pl-5">AcademicNest</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end  grid grid-cols">

                <div className="  text-end ">
               
                    <Link to='/register'><button className="btn btn-outline btn-info ">SignUp/Login</button></Link>
                </div>
               
                <div className="border mt-1">
                    {
                        user && <span className="text-sm text-yellow-300"> User : {user.email}</span>
                    }

                </div>


            </div>
        </div>


    );



};


export default Navbar;