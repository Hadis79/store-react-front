import { useLocation, useNavigate } from "react-router-dom";
import "./modal.modules.css";
import { useState } from 'react/cjs/react.development';

export const Modal = () => {
  
const [close,setClose]=useState(false)
  //closeModal
  const closeModal=()=>{
setClose(true)
}
  return (
    <>
      <div className={`modal ${close&& 'close'}`}>
        <div className="content"></div>
        <table>
          <tr className="header">
            <th>Details</th>
          </tr>{" "}
          <tr className="title">
            <th>Product</th>
            <th>Quantity</th>
            <th>date</th>
            <th>delete</th>
          </tr>
          <tr className="modal-items">
            <td>hard</td>
            <td>2</td>
            <td>2022-20-1</td>
            <td><i className="fa fa-trash"/></td>
          </tr>
          <tr className="modal-items">
            <td>hard</td>
            <td>2</td>
            <td>2022-20-1</td>
            <td><i className="fa fa-trash"/></td>
          </tr>
        <div className="modal-btn">
          <div className='ok-btn' onClick={()=>closeModal()}>
            <button>Ok</button>
          </div>
          <div className='ok-btn' onClick={()=>closeModal()}>
            <button>Cancle</button>
          </div>
        </div>
        </table>
      </div>
    </>
  );
};
