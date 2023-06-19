import React from "react";
import "./Header.scss";
import "../../assets/img/whatsapp.png";
import login from "../../assets/img/login.png";
import search from "../../assets/img/search.png";
import cart from "../../assets/img/cart.png";
import logo from "../../assets/img/logo.png";
import whatsapp from "../../assets/img/whatsapp.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__top">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
            <p>Готовые проекты и индивидуальное проектирование домов</p>
          </div>
          <div className="header__email">
            <p className="email__title">E-mail для связи:</p>
            <p className="email__value">stroyizhivi@mail.ru</p>
          </div>
          <div className="header__contact">
            <img src={whatsapp} alt="WhatsApp" />
            <div className="phone">
              <p>8(800)707-05-89</p>
              <span>Отвечаем: с 10:00 до 19:00</span>
            </div>
            <button className="return__call">Обратный звонок</button>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__bottom__item">
            <Link className="menu__link">
              <p>
                Каталог
                <MdKeyboardArrowDown className="h_arrow_down" />
              </p>
            </Link>
          </div>
          <div className="header__bottom__item">
            <Link className="menu__link">проектирование</Link>
          </div>
          <div className="header__bottom__item">
            <Link className="menu__link">строительство</Link>
          </div>
          <div className="header__bottom__item">
            <Link className="menu__link">о компании</Link>
          </div>

          <div className="header__bottom__item">
            <Link className="menu__link">блог</Link>
          </div>
          <div className="header__bottom__item">
            <Link className="menu__link">клиентам</Link>
          </div>
          <div className="header__bottom__item">
            <Link className="menu__link">контакты</Link>
          </div>
          <div className="header__bottom__item">
            <div className="login__search__cart">
              <Link className="login log__item">
                <img src={login} alt="Login" />
              </Link>
              <Link className="search log__item">
                <img src={search} alt="Search" />
              </Link>
              <Link className="cart log__item">
                <img src={cart} alt="Cart" />
                <span>3</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
