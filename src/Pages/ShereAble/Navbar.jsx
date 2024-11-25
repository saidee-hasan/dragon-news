import { Link, NavLink, useNavigate } from "react-router-dom"
import userDefaultPic from '../../assets/user.png'
import { useContext } from "react"
import { OurContext } from "../../contextProvider/AuthContext"
import { signOut } from "firebase/auth"
import auth from "../../firebase.config"
import { ToastContainer, toast } from "react-toastify"

const Navbar = () => {



const {user} = useContext(OurContext)

const NavLinks = <>
<li><NavLink to={'/'}>Home</NavLink></li>
<li><NavLink to={'/about'}>About</NavLink></li>
<li><NavLink to={'/career'}>Career</NavLink></li>
 </>
  const navigate = useNavigate();
const handleSignOut = () =>{
  signOut(auth).then(() => {
    navigate('/');
  }).catch((error) => {
    console.log('error' , error)
  });
}



console.log(user?.photoURL)
  return (
<div className="navbar bg-base-100 mb-8">
  <div className="navbar-start">
    <div className="dropdown">
 
    
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{NavLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
{NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full mx-1">
        <img 
        src={user?.photoURL || userDefaultPic} 
        alt="User  Profile" 
        className="rounded-full w-32 h-32 object-cover" // Add any additional styling here
      />
        </div>
      </label>
      {user ? ( 
  <button onClick={handleSignOut} className="btn hover:bg-neutral-800 bg-neutral-700 text-teal-50"> 
    Log Out
  </button>
) : (
  <Link to={'/login'} className="btn hover:bg-neutral-800 bg-neutral-700 text-teal-50">
    Log In
  </Link>
)}
  </div>

</div>

  )
}

export default Navbar
