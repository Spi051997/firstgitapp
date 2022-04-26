import "./App.css";

import Cart from "./Cart";
import Nab from "./Nab";
import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [ 
      ],
      Loading:true
    };
  }
  componentDidMount()
  {
    firebase.firestore().collection('products').onSnapshot((snapshot)=>
    {
      console.log(snapshot)
      snapshot.docs.map((doc)=>
      {
        console.log(doc.data());
      });

      const products=snapshot.docs.map((doc)=>
      {
        const data=doc.data();
        data['id']=doc.id;
        return data
      })

      this.setState({
        products
      })
    })
   
  }

  handleincreseQuntity = (product) => {
    console.log("Hey need to increse the product", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1;

    this.setState({
      products: products,
      Loading:false
    });
  };

  handledecrementQuantity = (product) => {
    // console.log("Hello Decrement Product", product);
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
    // console.log("Delete the product");
    const { products } = this.state;
    const item = products.filter((item) => item.id !== id);
    this.setState({
      products: item,
    });
  };

  getNavcount = () => {
    // console.log("hello couent");
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.Qty;
    });

    return count;
  };

  gettotalprice=()=>
  {
    const {products}=this.state;
    let carttotal=0;

    products.map((product)=>
    {
       carttotal=carttotal+(product.Qty*product.price)
    })


    return carttotal;

  }
  addproduct=()=>
  {
    firebase.firestore().collection('products').add({
      img:"",
      Qty:1,
      price:100,
      title:"Belt"
    })
    .then((docref)=>
    {
      console.log("Added products",docref)
    })
    .catch((err)=>
    {
      console.log(err);
    })
  }

  render() {
    const { products,Loading } = this.state;
    return (
      <>
        <div className="App">
          <Nab total={this.gettotalprice()} count={this.getNavcount()} />
          <button  className="Button_Style" onClick={this.addproduct}>Add </button>
          <Cart
            products={products}
            onincrese={this.handleincreseQuntity}
            ondecerese={this.handledecrementQuantity}
            ondelete={this.handelete}
          
          />
          {
            Loading && <h1>List Loading.......</h1>
            
          }
        </div>
      </>
    );
  }
}

export default App;
