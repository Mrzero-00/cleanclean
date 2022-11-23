import { Box, Flex, Text } from "@chakra-ui/react";

const Body2 = () => {
  return (
    <Flex w="100%" py="100px" alignItems={"center"} flexDirection="column">
      <Box
        w="212px"
        h="10px"
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
          청소를부탁해
        </Text>
        <Text color="#2770D0" h="100%" p="0px" m="0px">
          클리닝서비스
        </Text>
      </Flex>

      <Flex
        maxW="900px"
        w="100%"
        alignItems={"center"}
        gap="20px"
        justifyContent={"space-between"}
      >
        <Box
          w="200px"
          
          h="100%"
          backgroundRepeat={"no-repeat"}
          backgroundImage={"./img/bodyIcon1.png"}
          bgSize="contain"
        />
        <Box
          w="200px"
          
          h="100%"
          backgroundRepeat={"no-repeat"}
          backgroundImage={"./img/bodyIcon2.png"}
          bgSize="contain"
        />
        <Box
          w="200px"
          
          h="100%"
          backgroundRepeat={"no-repeat"}
          backgroundImage={"./img/bodyIcon3.png"}
          bgSize="contain"
        />
        <Box
          w="200px"
          
          h="100%"
          backgroundRepeat={"no-repeat"}
          backgroundImage={"./img/bodyIcon4.png"}
          bgSize="contain"
        />
        <Box
          w="200px"
          h="100%"
          backgroundRepeat={"no-repeat"}
          backgroundImage={"./img/bodyIcon5.png"}
          bgSize="contain"
        />
      </Flex>
    </Flex>
  );
};

export default Body2;
