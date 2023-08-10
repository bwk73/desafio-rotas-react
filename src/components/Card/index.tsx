import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Card() {

  return (
      <div className="card">
        <nav>
            <NavLink to="1" className={({isActive}) => isActive ? "menu-item-card menu-active" : "menu-item-card"}>
                Computadores
            </NavLink>
            <NavLink to="2" className={({isActive}) => isActive ? "menu-item-card menu-active" : "menu-item-card"}>
                Eletrônicos
            </NavLink>
            <NavLink to="3" className={({isActive}) => isActive ? "menu-item-card menu-active" : "menu-item-card"}>
                Livros
            </NavLink>
        </nav>
      </div>
  );
}
