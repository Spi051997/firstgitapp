import React from "react";

const Nab = (props) => {
  return (
    <div className="NavApp">
      <div className="Cartitemdiv">
        <span>
          <img
            className="Cartpic"
            src=" https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          ></img>
        </span>
        <span>
          <div className="Valuename">
            <h3 className="Counttext">{props.count}</h3>
          </div>
        </span>
       
      </div>
      <span className="CartTotal">
        Total:{props.total}
      </span>

    </div>
  );
};

export default Nab;
