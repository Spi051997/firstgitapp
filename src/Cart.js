import React from "react";
import Cartitem from "./Cartitem";


class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state={
            products:
            [
               {
                title: "T-shirt",
                price: 999,
                Qty: 1,
                img: "",
                id:1
               },
               {
                title: "Phone",
                price: 99,
                Qty: 10,
                img: "",
                id:2
               },
               {
                title: "Ball",
                price: 9,
                Qty: 1,
                img: "",
                id:3
               }
               
            ]
        }
    }

handleincreseQuntity=(product)=>
{
    console.log("Hey need to increse the product",product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].Qty+=1;

    this.setState(
    {
        products:products
    })

}   

handledecrementQuantity=(product)=>
{
     console.log("Hello Decrement Product",product)
     const {products}=this.state;
     const index=products.indexOf(product);

     if(products[index].Qty===0)
     {
         return;
     }
     products[index].Qty-=1;
 
     this.setState(
     {
         products:products
     })

}

// Deleteprodcut=(id)=>
// {
//     const {products}=this.state;

//     const items=products.map((item)=>
//         item.id!==id
//     );

//     this.setState={
//         products:items
//     }

// }
handelete=(id)=>
{
    console.log("Delete the product")
    const {products}=this.state;
    const item=products.filter((item)=>item.id!==id);
    this.setState({
        products:item
    })

}

    render(){
        const {products}=this.state;
       return(
           <>

           {
               products.map((product)=>
               {
                   return <Cartitem 
                   product={product} 
                   key={product.id}
                  
                   onincrese={this.handleincreseQuntity}
                   ondecerese={this.handledecrementQuantity}
                   ondelete={this.handelete}
                       />
               })
           }
           
           
           
           </>

        //    <Cartitem Qty={1} price={99} title={'Tshirt'} />
       )
    }
}   

export default Cart;