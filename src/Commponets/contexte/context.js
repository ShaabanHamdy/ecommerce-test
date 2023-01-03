import { createContext, useEffect, useState } from "react";
import axios from "axios";
// ------------------------------------------------------------
export let Prouductscontext = createContext(null);
// ----------------------------------------------------------
export default function ProuductscontextProvider(props) {
  const [cartDetail, setCartDetail] = useState([]);
  const [data, setData] = useState([]);

  // -------------------------------------------------------------------

  // ----------------------------------------------------------
  let sendToCart = (item) => {
    let exist = cartDetail.find((elm) => elm.id === item.id);
    if (exist) {
      let cart = cartDetail.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
      );
      setCartDetail(cart);
    } else {
      let cart = [...cartDetail, { ...item, qty: 1 }];
      setCartDetail(cart);
    }
  };

  // -------------------------------------------------------------------
  let decrement = (item) => {
    let exist = cartDetail.find((elm) => elm.id === item.id);
    if (exist.qty > 1) {
      let cart = cartDetail.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm
      );
      setCartDetail(cart);
    }
  };

  // ---------------------------------------------------------------------------
  let removeCart = (item) => {
    let cart = cartDetail.filter((elm) => elm.id !== item.id);
    setCartDetail(cart);
  };

  // ----------------------------------------------------------------------------------------
  let getApiData = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");

    response = response.data;
    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Prouductscontext.Provider
      value={{
        data,
        sendToCart,
        decrement,
        removeCart,
        cartDetail,
      }}
    >
      {props.children}
    </Prouductscontext.Provider>
  );
}
