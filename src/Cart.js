import React from "react";
import Cartitem from "./Cartitem";

const Cart = (props) => {
    const {products}=       props;
  {
    return (
      <>
        {products.map((product) => {
          return (
            <Cartitem
              product={product}
              key={product.id}
              onincrese={props.onincrese}
              ondecerese={props.ondecerese}
              ondelete={props.ondelete}
            />
          );
        })}
      </>
    );
  }
};

export default Cart;
