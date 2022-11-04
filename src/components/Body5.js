import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Body5 = () => {
  return (
    <Flex
      w="100%"
      py="100px"
      alignItems={"center"}
      flexDirection="column"
      bgImage={"./img/body5bg.png"}
      bgSize="cover"
    >
      <Box
        w="212px"
        minH="10px"
        backgroundRepeat={"no-repeat"}
        backgroundImage={"./img/bodyText1.png"}
        bgSize="contain"
      />

      <Flex
        fontSize={"30px"}
        fontWeight={"bold"}
        flexWrap={"wrap"}
        justifyContent="center"
        my="10px"
      >
        <Text color="#000" h="100%" p="0px" m="0px">
          청소를부탁해
        </Text>
        <Text color="#2770D0" h="100%" p="0px" m="0px">
          가격안내
        </Text>
      </Flex>
      <Image w="100%" maxW={"810px"} src="./img/body5Table.png" />
    </Flex>
  );
};

export default Body5;
