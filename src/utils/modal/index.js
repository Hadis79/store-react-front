import { useLocation, useNavigate } from "react-router-dom";
import "./modal.modules.css";

export const Modal = ({ title, message, setShowModal }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("showw");
  const modalClickedHandler = () => {
    //redirect
    if (pathname === "/login") {
      navigate("/");
    }
    setShowModal(false);
  };
  return (
    <>
      <div className="content"></div>
      <section className="modal">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <hr />
        <div className="message">
          <p> {message}</p>
        </div>
        <div className="button">
          <button onClick={modalClickedHandler}>OK</button>
        </div>
      </section>
    </>
  );
};
