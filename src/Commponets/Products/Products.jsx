import React, { useContext } from "react";
import { Prouductscontext } from "../contexte/context";

export default function Products() {
  const { data, sendToCart } = useContext(Prouductscontext);

  return (
    <>
      <div className="row mt-5 pt-5">
        {data.map((elm,index) => {
          return (
            <div key={elm.id} className="col-md-4 text-center my-5">
              <div className="imge">
                <img height={300} className="w-100" src={elm.image} alt="" />
                <div className="cartTitle">
                  <p>{elm.title}</p>
                  <p>${elm.price}</p>
                </div>
                <button
                  onClick={() => sendToCart(elm)}
                  className="btn btn-info w-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
