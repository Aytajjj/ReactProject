import React, { useContext } from "react";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";
import { Container ,Row } from "react-bootstrap";

const Watches = () => {
  const [watch] = useContext(ProductContext);

  return (
    <section>
      <h1 className="title">Popular products</h1>
      <Container >
        <Row>
          {watch.slice(7,14).map((item) => {
            return (
              <SingleCard
                title={item.title}
                key={item.id}
                id={item.id}
                photo={item.photo}
                price={item.price}
                product={item}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Watches;
