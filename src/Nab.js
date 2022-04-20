import React from "react";

const Nab = (props) => {
  return (
    <div className="NavApp">
      <div className="Cartitemdiv">
        <span>
          <img
            className="Cartpic"
            src=" https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1650461147~hmac=07f16fb2f388a9165c580767c3f3cb25"
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
