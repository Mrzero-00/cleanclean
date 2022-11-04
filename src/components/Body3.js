import { Box, Flex, Text } from "@chakra-ui/react";

const Body3 = () => {
  return (
    <Flex
      w="100%"
      py="100px"
      alignItems={"center"}
      flexDirection="column"
      bgImage={"./img/body2bg.png"}
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
        gap="10px"
        flexWrap={"wrap"}
        justifyContent="center"
        fontWeight={"bold"}
        my="10px"
      >
        <Text color="black" h="100%" p="0px" m="0px">
          입주청소
        </Text>
        <Text color="#2770D0" h="100%" p="0px" m="0px">
          청소범위는 어떻게 될까요?
        </Text>
      </Flex>

      <Box w="100%" maxW="800px" h="fit-content" mt="2em">
        <Flex w="100%">
          <Box w="50%" h="200px" bgImage={`./img/body2/item1Img.png`} />
          <Box w="50%" h="200px" bgImage={`./img/body2/item1Text.png`} />
        </Flex>
        <Flex w="100%">
          <Box w="50%" h="200px" bgImage={`./img/body2/item2Text.png`} />
          <Box w="50%" h="200px" bgImage={`./img/body2/item2Img.png`} />
        </Flex>
        <Flex w="100%">
          <Box w="50%" h="200px" bgImage={`./img/body2/item3Img.png`} />
          <Box w="50%" h="200px" bgImage={`./img/body2/item3Text.png`} />
        </Flex>
        <Flex w="100%">
          <Box w="50%" h="200px" bgImage={`./img/body2/item4Text.png`} />
          <Box w="50%" h="200px" bgImage={`./img/body2/item4Img.png`} />
        </Flex>
        <Flex w="100%">
          <Box w="50%" h="200px" bgImage={`./img/body2/item5Img.png`} />
          <Box w="50%" h="200px" bgImage={`./img/body2/item5Text.png`} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Body3;
