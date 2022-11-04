import { Box, Flex, Link, Show, Text } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Body4 from "./components/Body4";
import Body5 from "./components/Body5";
import Body6 from "./components/Body6";
import Body7 from "./components/Body7";
import Body8 from "./components/Body8";
import Body9 from "./components/Body9";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavTab from "./components/NavTab";
import "./index.css";

function App() {
  return (
    <Flex flexDirection={"column"} alignItems="center" w="100vw">
      <Header />
      <Banner />
      <NavTab />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
      <Body7 />
      <Body8 />
      <Body9 />
      <Footer />
      {/* <Show breakpoint="(min-width: 1000px)"> */}
        <Flex
          flexDirection={"column"}
          gap="10px"
          position="fixed"
          right={"20px"}
          bottom="10%"
        >
          <Link href="#footer">
            <Box w='80px' h='40px' bgImg={`./img/header1.png`} bgRepeat="no-repeat" backgroundSize="contain"bgPosition={"center"}/>
          </Link>
          <Link href="tel:1544-5088">
           
          <Box w='80px' h='40px' bgImg={`./img/tell.png`} bgRepeat="no-repeat" backgroundSize="contain" bgPosition={"center"}/>
          </Link>
          <Link href="https://blog.naver.com/y_oungh91" target={"_blank"}>
          <Box w='80px' h='40px' bgImg={`./img/blog.png`} bgRepeat="no-repeat" backgroundSize="contain" bgPosition={"center"}/>
          </Link>
          <Link href="https://soomgo.com/profile/users/8619113" target={"_blank"}>
          <Box w='80px' h='40px' bgImg={`./img/review.png`}bgRepeat="no-repeat" backgroundSize="contain"bgPosition={"center"}/>
          </Link>

          <Link href="https://open.kakao.com/o/sbFoolxe" target={"_blank"}>
          <Box w='80px' h='40px' bgImg={`./img/kakao.png`} bgRepeat="no-repeat" backgroundSize="contain" bgPosition={"center"}/>
          </Link>
        </Flex>
      {/* </Show> */}
    </Flex>
  );
}

export default App;
