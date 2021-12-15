import "./modal.modules.css";

export const Modal = ({ title, message,setShowModal }) => {
     console.log('showw');
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
          <button onClick={()=>setShowModal(false)}>OK</button>
        </div>
      </section>
    </>
  );
};
