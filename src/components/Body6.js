import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Body6 = () => {
  return (
    <Flex
      w="100%"
      py="40px"
      alignItems={"center"}
      flexDirection="column"
      bg="#A7BBCE"
    >
      <Box
        w="212px"
        minH="10px"
        backgroundRepeat={"no-repeat"}
        backgroundImage={"./img/body4Text.png"}
        bgSize="contain"
      />

      <Flex
        fontSize={"30px"}
        gap="5px"
        flexWrap={"wrap"}
        justifyContent="center"
        fontWeight={"bold"}
        my="10px"
      >
        <Text color="#fff" h="100%" p="0px" m="0px">
          만족도 100%
        </Text>
        <Text color="#2770D0" h="100%" p="0px" m="0px">
          청소를부탁해
        </Text>
        <Text color="#fff" h="100%" p="0px" m="0px">
          리뷰
        </Text>
      </Flex>
      <Image w="100%" maxW={"550px"} src="./img/body6Item.png" />
    </Flex>
  );
};

export default Body6;
