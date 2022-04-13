import "./App.css";
import Cartitem from "./Cartitem"
import Cart from "./Cart"
// import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";

function App() {
  return (
    <>
      <div className="App">
        <Cart />
        {/* <Flex className="Flexcart">
          <Card className="Cardcart">
            <Image
              src="https://source.unsplash.com/random/512x384?space"
              className="Imagecart"
            />
            <Flex className="MainFlexboxStyle">
              <Box p={3} width={1 / 2} className="FlexBoxstyle" >
                <Text className="Boxfontstyle">T-Shirt</Text>
              </Box>
              <Box p={3} width={1 / 2} >
                <Text className="Boxfontstyle">Price 999</Text>
              </Box>
              <Box p={3} width={1 / 2} >
                <Text className="Boxfontstyle">Qty:1</Text>
              </Box>
            </Flex>

          </Card>
        </Flex> */}
      </div>
    </>
  );
}

export default App;
