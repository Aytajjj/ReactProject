import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvaider = (props) => {
  const [watch, setWatches] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5501/src/data/Api.json")
      .then((res) => setWatches(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[watch, setWatches]}>
      {props.children}
    </ProductContext.Provider>
  );
};
