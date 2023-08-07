import Logo from "../svg/Logo";
import {Link,NavLink} from  'react-router-dom' 
const NavBar=()=>{

   const btnLink="block inline-block py-1 text-black hover:text-primary cursor-pointer mr-4"
   const activeLink="block inline-block py-1 text-primary mr-4"
    return(
        <header className="pt-0">
            <nav className="flex items-center justify-between bg-accent p-6 mb-2">
                <div className="flex items-center mr-5">
                   <Logo ></Logo>
                   <span className="font-semibold text-2x1 mx-2 uppercase">ChatBot Bar</span> 
                </div>
                <div className="grow flex items-center">
              <div className="grow">
                <NavLink to="/" className={({isActive})=>isActive?"btn-primary-active":"btn-primary"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>isActive?"btn-primary-active":"btn-primary"}>About</NavLink>
                {/* <Link to="/" className={btnLink}>Home</Link>
                <Link to="/about" className={btnLink}>About</Link>            */}
              </div>
              <NavLink to="/login" className={({isActive})=>isActive?"btn-primary-active":"btn-primary"}>Login</NavLink>
              <NavLink to="/signin" className={({isActive})=>isActive?activeLink:btnLink}>Signin</NavLink>
{/*           
                    <Link to="/login" className={btnLink}>Login</Link>
                <Link to="/signin" className={btnLink}>Signin</Link>   */}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;