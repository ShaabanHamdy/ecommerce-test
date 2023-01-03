import React, { useContext } from "react";
import { Prouductscontext } from "../contexte/context";

export default function Navbar() {
  const { cartDetail } = useContext(Prouductscontext);

  let totalNum = cartDetail.reduce((x, y) => x + y.qty, 0);
  let totalPrice = cartDetail.reduce((x, y) => x + y.qty * y.price, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bgColor p-2">
        <div className="container">
          <a className="navbar-brand">App Store</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item carts ">
                ${totalPrice.toFixed(2)}
                <span>
                  Cart
                  <i className="fas fa-cart-shopping"></i>{" "}
                </span>
                <span className="badge bg-info p-1 zeroCarts">{totalNum}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
