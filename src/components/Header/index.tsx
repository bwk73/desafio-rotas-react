import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header>
        <div className="container">
                <nav className="navbar">
                    <div>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                            Início 
                        </NavLink>
                        <NavLink to="/prod" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                            Produtos
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                            Sobre nós
                        </NavLink>
                    </div>
                   <div>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                            <img src={homeIcon} alt="home" /> 
                        </NavLink>
                   </div>
                </nav>
        </div>
    </header>
  );
}
