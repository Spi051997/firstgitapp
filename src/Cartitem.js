import React  from "react";
import './App.css';
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";



class Cartitem extends React.Component
{
    constructor()
    {
        super();
        this.state={
            title:'T-shirt',
            price:999,
            Qty:1,
            img:''


        }
    }
   render()
   {
       const { title,price,Qty}=this.state
       return(
            <Flex className="Flexcart">
          <Card className="Cardcart">
            <Image
              src="https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/c2ec7189-e1e6-447c-b167-1b7cf09c69f51613552879930-1.jpg"
              className="Imagecart"
            />
            <Flex className="MainFlexboxStyle">
              <Box p={3} width={1 / 2} className="FlexBoxstyle" >
                <Text className="Boxfontstyle">{title}</Text>
              </Box>
              <Box p={3} width={1 / 2} >
                <Text className="Boxfontstyle">{price}</Text>
              </Box>
              <Box p={3} width={1 / 2} >
                <Text className="Boxfontstyle">{Qty}</Text>
              </Box>
            </Flex>
            <Flex className="Button">
                <img alt="add" src="https://cdn-icons.flaticon.com/png/512/3416/premium/3416075.png?token=exp=1649705577~hmac=f3ac696f36d96600ab13ebeea3af6e76" className="iconsize" />
                <img src="https://cdn-icons.flaticon.com/png/512/3161/premium/3161837.png?token=exp=1649705831~hmac=ce962d936a7990b122e9bd498902d179" className="iconsize"/>
                <img src="https://cdn-icons.flaticon.com/png/512/5971/premium/5971921.png?token=exp=1649705761~hmac=bb92e27ada104d765ce684b57bb76f2b" className="iconsize"/>
            </Flex>

          </Card>
        </Flex> 
       );
   }
   
}

export default Cartitem;
