// import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../auth/context/AuthContext";

export const Navbar = () => {

  
  // const { user } = useContext( AuthContext );
  // const navigate = useNavigate();

  // console.log(user);

  // const onLogout = () => {
    
  //   navigate('/login', {
  //     replace: true
  //   });
  // }

  return (
    <nav className="bg-gray-700  w-[250px] ">
      {/* <Link className="" to="/">
        Asociaciones
      </Link> */}

      <h3 className="text-center text-white m-2">Menu</h3>
      <div className="flex flex-col w-full bg-gray-600 text-white p-4 gap-2" >
          {/* <NavLink className={(isActive) => `${isActive ? 'active' : ''}`} to="/roles"> */}
          <NavLink className="text-xl" to="/roles">
            Roles
          </NavLink>

          <NavLink className="text-xl" to="/usuarios">
            Usuarios
          </NavLink>

          <NavLink className="text-xl" to="/bitacoras">
            Bitacoras
          </NavLink>

          <NavLink className="text-xl" to="/enlaces">
            Enlaces
          </NavLink>
      </div>

      {/* <div className="">
        <ul className="">
          <NavLink className="" to="/login">
            Logout
          </NavLink>
        </ul>
      </div> */}
      {/* <button 
        // onClick={onLogout}
      >
        Logout
      </button> */}
    </nav>
  );
};
