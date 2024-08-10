import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Abogado = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Gestión de Citas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/objetos">
                Objetos
              </Link>
            </li>
          </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Abogado;
