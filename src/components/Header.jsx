import React from "react";
import { Button ,NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { totalItems } = useCart();
  const [mode, setMode] = useContext(ThemeContext);

  const { i18n, t } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className="header-one">
        <div className="left-side">
          <span>Order</span>
          <div className="line"></div>
          <span>FAQs</span>
          <div className="line"></div>
          <span>Contact</span>
        </div>
        <div className="right-side">
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Store Location </span>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <span>support@wrish.com</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="header-two">
        <nav>
          <ul>
            <li >
              {t("title.0")}

            </li>
            
            <li>
              {t("title.1")}
            </li>
            <li>
              {t("title.2")}
            </li>
            <li>
              {t("title.3")}
            </li>
          </ul>
        </nav>

        <div className="logo">
          <img
            width={100}
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/logo.png"
            alt=""
          />
        </div>
        <span> {t("title.4")}</span>
        <Button
          variant={mode === "light" ? "light" : "warning"}
          className="ms-3 text-dark"
          onClick={() => {
            mode === "light" ? setMode("dark") : setMode("light");
            mode === "light"
              ? localStorage.setItem("mode", "dark")
              : localStorage.setItem("mode", "light");
          }}
        >

          {mode === "light" ? "🌙" : "☀️"}
        </Button>
        <LinkContainer to="/Login">
         <Button>
          Login
        </Button>
        </LinkContainer>
       
        <NavDropdown title={t("title.5")} id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Button
              onClick={() => {
                handleClick("az");
              }}
            >
              AZ
            </Button>
          </NavDropdown.Item>

          <NavDropdown.Item>
            <Button
              onClick={() => {
                handleClick("en");
              }}
            >
              EN
            </Button>
          </NavDropdown.Item>
        </NavDropdown>

        <div className="icon">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <LinkContainer to="/basket">
            <Button variant="success">
              <i className="fa-solid fa-cart-shopping"></i>
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              >
                {totalItems}
              </span>
            </Button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default Header;
