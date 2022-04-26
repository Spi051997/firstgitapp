  import React from "react";
import "./App.css";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";

const Cartitem = (props) => {
  console.log("this.props", props);
  const { title, price, Qty,img } = props.product;
  const { product, onincrese, ondecerese, ondelete } =props;

  return (
    // console.log(this.props)

    <>
      <Flex className="Flexcart">
        <Card className="Cardcart">
          <Image
     crossorigin src="https://salebast.com/products/oppo-reno2-refurbished-good/?attribute_storage=8+GB%2F256+GB&attribute_color=Black&utm_source=Google%20Shopping&utm_campaign=Google%20Feed%20Exc&utm_medium=cpc&utm_term=8658"
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
              onClick={() => onincrese(product)}
              alt="add"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
              className="iconsize"
            />
            <img
              onClick={() => ondecerese(product)}
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              className="iconsize"
            />
            <img
              onClick={() => ondelete(product.id)}
              src="https://cdn-icons-png.flaticon.com/512/2602/2602735.png"
              className="iconsize"
            />
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Cartitem;
