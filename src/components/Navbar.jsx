import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { FcLike } from "react-icons/fc";

const Navbar = () => {

    const { dataApi } = useContext(ContextAPI);
    const counter = dataApi.filter(data => data.liked == true);    

  return (
    <nav className="navbar">
        <div>
        <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
        </div>      
        <div className="counterHeart">
            <FcLike className="icon" />
            <p>{counter.length}</p>
        </div>     
    </nav>
  );
};

export default Navbar;
