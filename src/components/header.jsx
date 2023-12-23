import React from "react";
import logo from '../logo.png'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"  style={{ backgroundColor: "none"}}>
            <div className="logo" style={{ display: "flex", gap: "10px" }}>
            <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
            <a className="navbar-brand" style={{ color: "darkslategray" }}>
                {/* <Link to={'/'} className="nav-link"> */}
                Поиск животных
                {/* </Link> */}
            </a>
            </div>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={'/'} className="nav-link">
                    Главная
                </Link>
                </li>

                <li className="nav-item">
                <Link to={'/personal_cab'} className="nav-link">
                    Личный кабинет
                </Link>
                </li>

                <li className="nav-item">
                <Link to={'/add_advert_page'} className="nav-link">
                    Добавить объявление
                </Link>
                </li>

                <li className="nav-item">
                <Link to={'/search_advert'} className="nav-link">
                    Поиск по объявлениям
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;