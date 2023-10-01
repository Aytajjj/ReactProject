import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";


const SingleCard = ({ photo, title,  price, product ,id }) => {
   const { totalItems } = useCart();
   const [mode, setMode] = useContext(ThemeContext);
   const { i18n, t } = useTranslation();
  const { addItem } = useCart();
  return (
    <Col sm={6} md={4} style={{ padding: "20px" }}>
      <Card data-aos="zoom-in-up">
        <Card.Img height={300} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}$</Card.Text>
          <Button
            style={{ margin: "20px" }}
            onClick={() => {
              addItem(product);
              toast.success("Product added");
              console.log("salam");
            }}
            variant="info "
          >
            {t("title.12")}
          </Button>
          <LinkContainer to={`/product/${id}`}>
            <Button
              onClick={() => {
                console.log("salam");
              }}
              variant="secondary"
            >
              {t("title.11")}
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
