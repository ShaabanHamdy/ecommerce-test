import { useContext } from "react";
import { Prouductscontext } from "../contexte/context";
export default function Carts() {
  const { cartDetail, sendToCart, decrement, removeCart } =
    useContext(Prouductscontext);

  return (
    <>
      <div className="mt-5">
        <h2>Cart Item </h2>
      </div>
      {cartDetail < 1 ? <h5>empty</h5> : ""}
      {cartDetail.map((value) => (
        <div
          key={value.id}
          className="cartitemts overflow-hidden mt-5 pt-5 ms-5  "
        >
          <div className="cartimg float-left">
            <img className="w-100" src={value.image} alt="" />
          </div>
          <div className="cart-caption  float-right">
            <h5 className="my-2">{value.title}</h5>
            <p>{value.price} </p>
            <button onClick={() => sendToCart(value)} className="btn btn-info">
              +
            </button>
            <span className="px-3">{value.qty}</span>
            <button
              onClick={() => decrement(value)}
              className="btn btn-danger me-1"
            >
              -
            </button>
            <button
              onClick={() => removeCart(value)}
              className="btn btn-danger fas fa-trash-can"
            ></button>
            <hr />
          </div>
        </div>
      ))}
    </>
  );
}
