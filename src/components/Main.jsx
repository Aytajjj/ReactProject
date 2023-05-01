import React, { useState,useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import SingleCard from "./SingleCard";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import { useCart } from "react-use-cart";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Main = () => {
useEffect(()=>{
AOS.init();

}
)
    const { totalItems } = useCart();
    const [mode, setMode] = useContext(ThemeContext);

    const { i18n, t } = useTranslation();

    

  const [watch] = useContext(ProductContext);
  return (
    <section>
      {console.log(watch)}
      <main>
        <div data-aos="fade-up" className="image">
          <img
            width={1518}
            height={600}
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/slider-3-2.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <span> {t("title.6")}</span>
          <h1> {t("title.7")}</h1>
          <p> {t("title.8")}</p>
          <button> {t("title.9")}</button>
        </div>
        <section className="main-two">
          <div data-aos="fade-up" className="card">
            <div className="img">
              <img
                width={400}
                height={300}
                src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/banner-1-2.jpg"
                alt=""
              />
            </div>

            <div className="text">
              <h2>{t("title.31")}</h2>
              <span>{t("title.9")}</span>
            </div>
          </div>
          <div data-aos="fade-up" className="card">
            <div className="img">
              <img
                width={400}
                height={300}
                src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/banner-2-2.jpg"
                alt=""
              />
            </div>

            <div className="text">
              <h2>{t("title.31")}</h2>
              <span>{t("title.9")}</span>
            </div>
          </div>
          <div data-aos="fade-up" className="card">
            <div className="img">
              <img
                width={400}
                height={300}
                src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/banner-3-1.jpg"
                alt=""
              />
            </div>

            <div className="text">
              <h2>{t("title.31")}</h2>
              <span>{t("title.9")}</span>
            </div>
          </div>
        </section>
        <div className="cards">
          <div className="">
            <h1 className="title"> {t("title.10")}</h1>
            <Container>
              <Row>
                {watch.slice(0, 6).map((character) => {
                  return (
                    <SingleCard
                      key={character.id}
                      id={character.id}
                      photo={character.photo}
                      title={character.title}
                      price={character.price}
                      product={character}
                    />
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;
