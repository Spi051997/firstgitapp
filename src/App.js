import "./App.css";

import Cart from "./Cart";
import Nab from "./Nab";
import React from "react";
// import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "T-shirt",
          price: 999,
          Qty: 1,
          img: "",
          id: 1,
        },
        {
          title: "Phone",
          price: 99,
          Qty: 10,
          img: "",
          id: 2,
        },
        {
          title: "Ball",
          price: 9,
          Qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleincreseQuntity = (product) => {
    console.log("Hey need to increse the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1;

    this.setState({
      products: products,
    });
  };

  handledecrementQuantity = (product) => {
    console.log("Hello Decrement Product", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].Qty === 0) {
      return;
    }
    products[index].Qty -= 1;

    this.setState({
      products: products,
    });
  };

  handelete = (id) => {
    console.log("Delete the product");
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id);
    this.setState({
      products: item,
    });
  };


  getNavcount=()=>
  {

    console.log("hello couent")
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>
    {
      count+=product.Qty;
    })

    return count;



  }

  render() {
    const {products}=this.state;
    return (
      <>
        <div className="App">
          <Nab  
            count={this.getNavcount()} />
          <Cart
           products={products}
           onincrese={this.handleincreseQuntity}
           ondecerese={this.handledecrementQuantity}
           ondelete={this.handelete}
           />
        
        </div>
      </>
    );
  }
}

export default App;
