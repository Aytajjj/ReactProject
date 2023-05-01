import React from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart'

const Basket = () => {
    const {isEmpty,items,updateItemQuantity,removeItem, cartTotal} = useCart();
  return (
    <>
      {isEmpty ? (
        <LinkContainer to="/home">
          <div className="d-flex justify-content-center">
            <img
              src="https://media3.giphy.com/media/Aik2hwXn0dUTrVkbIP/giphy.gif?cid=6c09b952trmto9sxvlbit3z2kb9wlp3ydkjpb53db8pwmyuo&rid=giphy.gif&ct=s"
              alt=""
            />
            <Button style={{height:50}}>Back</Button>
          </div>
        </LinkContainer>
      ) : (
        <>
          <Container>
            <h1 className="my-5 text-center ">Your Basket</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((value) => (
                  <tr>
                    <td>1</td>
                    <td>
                      <img width={50} src={value.photo} alt="" />
                    </td>
                    <LinkContainer to={`/products/${value.id}`}>
                      <td className="text-primary">
                        {value.title.substring(0, 30)}...
                      </td>
                    </LinkContainer>
                    <td>{value.price * value.quantity}$</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => {
                          updateItemQuantity(value.id, value.quantity - 1);
                          toast.error("Product removed");
                        }}
                      >
                        -
                      </Button>
                      <span className="mx-2">{value.quantity}</span>
                      <Button
                        variant="success"
                        onClick={() => {
                          updateItemQuantity(value.id, value.quantity + 1);
                          toast.success("Product added");
                        }}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeItem(value.id);
                          toast.error("Product removed");
                        }}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4 className="mt-3 ">Total Price:{cartTotal}$</h4>
          </Container>
          <LinkContainer to="/">
            <Button>Back</Button>
          </LinkContainer>
        </>
      )}
    </>
  );
}

export default Basket