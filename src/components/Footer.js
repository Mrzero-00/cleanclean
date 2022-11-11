import {Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      h="120px"
      bg="#2a2a2a"
      w="100vw"
      px='16px'
      justifyContent={"center"}
      alignItems="center"
    >
      <Flex
        flexDirection={"column"}
        alignItems="center"
        gap={"10px"}
        fontSize="12px"
        color="#888"
      >
        <Text m="0px">청소를 부탁해</Text>
        <Text m="0px">
          주소:인천광역시 연수구 인천타워대로99, 1005호(송도동,애니오션빌딩) |
          대표:김영환 | 대표번호:1544-5088 | 사업자등록번호:392-70-00426
        </Text>
        <Text m="0px">Copyright ⓒ2022 청소를부탁해.All rights reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
