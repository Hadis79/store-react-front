import { useLocation, useNavigate } from "react-router-dom";
import "./modal.css";
import { useState } from "react";

export const Modal = ({ setShowModal, cart, setCart }) => {
  const [close, setClose] = useState(false);
  // const getProducts=localStorage.getItem(JSON.parse('products'))
  // console.log(getProducts);
  //closeModal
  const closeModal = () => {
    setClose(true);
    setShowModal(false);
  };
  //remove product handler
  const removeProductHandler = (id) => {
    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
  };
  console.log('modal cart',cart);
  return (
    <>
      <div className={`modal ${close && "close"}`}>
        <div className="content"></div>

        <table>
          <tr className="header">
            <th>Details</th>
          </tr>{" "}
          <tr className="title">
            <th>Product</th>
            <th>price</th>
            <th>delete</th>
          </tr>
          {cart.length!==0 ?
            cart.map((item) => {
              return (
                <tr className="modal-items">
                  <td>{item.title.slice(0, 10)}</td>
                  <td>{item.price}</td>
                  <td onClick={() => removeProductHandler(item.id)}>
                    <i className="fa fa-trash" />
                  </td>
                </tr>
              );
            }):<div className="empty-cart">you havn't add product yet...</div>}
          <div className="modal-btn">
            <div className="ok-btn" onClick={() => closeModal()}>
              <button>Ok</button>
            </div>
            <div className="ok-btn" onClick={() => closeModal()}>
              <button>Cancle</button>
            </div>
          </div>
        </table>
      </div>
    </>
  );
};
