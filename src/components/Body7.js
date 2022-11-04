import { Box, Flex, Image, Show } from "@chakra-ui/react";

const Body7 = () => {
  return (
    <>
    <Show breakpoint="(min-width:1000px)">
    <Flex
      w="100%"
      alignItems={"center"}
      justifyContent="center"
      bg="#fff"
    >
      
      <Box
        w="50vw"
        h="500px"
        bgImg={"./img/body7bg.png"}
        bgRepeat="no-repeat"
        bgSize={"cover"}
        bgPos="center"
      />
      <Image w="50vw" src="./img/body7Item.png" />
    </Flex>
    </Show>
    <Show breakpoint="(max-width:1000px)">
    <Flex
      w="100%"
      alignItems={"center"}
      justifyContent="center"
      flexWrap="wrap"
      bg="#fff"
    >
      
      <Box
        w="100vw"
        h="300px"
        bgImg={"./img/body7bg.png"}
        bgRepeat="no-repeat"
        bgSize={"cover"}
        bgPos="center"
      />
      <Image w="100vw" src="./img/body7Item.png" />
    </Flex>
    </Show>

    </>
  );
};

export default Body7;
