import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
     const { totalItems } = useCart();
     const [mode, setMode] = useContext(ThemeContext);

     const { i18n, t } = useTranslation();
  return (
    <div>
      <footer>
        <div className="logo">
          <img
            width={100}
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/logo.png"
            alt=""
          />
          <div className="icon">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
        <div className="categories">
          <h2> {t("title.13")}</h2>
          <span> {t("title.14")}</span>
          <span> {t("title.15")}</span>
          <span> {t("title.16")}</span>
          <span>Jewellry</span>
        </div>
        <div className="help">
          <h2> {t("title.17")}</h2>
          <span>{t("title.17")}</span>
          <span>{t("title.18")}</span>
          <span>{t("title.19")}</span>
          <span>{t("title.20")}</span>
          <span>{t("title.21")}</span>
        </div>
        <div className="servis">
          <h2>{t("title.22")}</h2>
          <span>{t("title.23")}</span>
          <span>{t("title.24")}</span>
          <span>{t("title.25")}</span>
          <span>{t("title.26")}</span>
          <span>{t("title.27")}</span>
        </div>
        <div className="right">
          <img
            width={80}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrbVBF3aFy-HGf0brMAwU1VLnv4MA0kjUehz96yXZ&s"
            alt=""
          />

          <h5>{t("title.28")}</h5>

          <span>{t("title.29")}</span>
          <form action="">
            <input type="email" placeholder="Email adress..." />
            <button>{t("title.30")}</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
