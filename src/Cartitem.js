import React from "react";
import "./App.css";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";

class Cartitem extends React.Component {

   
  constructor() {
    super();
    this.state = {
      title: "T-shirt",
      price: 999,
      Qty: 1,
      img: "",
    };
    // this.shoecick=this.shoecick.bind(this);
  }
  shoecick=()=>
  {
    //  this.state.Qty+=1;
    console.log("this",this.state.Qty);
    // Setstate form 1
    // this.setState({
    //   Qty:this.state.Qty+1
    // }
    //   )
    this.setState((prevState)=>
    {
      return{
        Qty:prevState.Qty+1
      }
      //  Qty: prevState.Qty+1
    });
    
    
  }
    

  
  render() {
    const { title, price, Qty } = this.state;
    
    
    return (
      <>
      <Flex className="Flexcart">
        <Card className="Cardcart">
          <Image
            src="https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/c2ec7189-e1e6-447c-b167-1b7cf09c69f51613552879930-1.jpg"
            className="Imagecart"
          />
          <Flex className="MainFlexboxStyle">
            <Box p={3} width={1 / 2} className="FlexBoxstyle">
              <Text className="Boxfontstyle">{title}</Text>
            </Box>
            <Box p={3} width={1 / 2}>
              <Text className="Boxfontstyle">{price}</Text>
            </Box>
            <Box p={3} width={1 / 2}>
              <Text className="Boxfontstyle">{Qty}</Text>
            </Box>
          </Flex>
          <Flex className="Button">
          
            <img
             onClick={this.shoecick} 
              alt="add"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
              className="iconsize"
             
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              className="iconsize"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2602/2602735.png"
              className="iconsize"
            />
          </Flex>
        </Card>
      </Flex>
      {/* <Button  onClick={this.shoecick}></Button> */}
      </>
    );
  }
}

export default Cartitem;
