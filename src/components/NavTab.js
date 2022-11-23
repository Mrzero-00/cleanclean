import { Box, Flex } from "@chakra-ui/react";

const NavTab = ()=>{
    return<Flex h='130px' bg='#95C6C6' w='100%' justifyContent={"center"}>
        <Flex maxW="900px" w='100%' h='100%' mx='40px'  alignItems={"center"} gap='20px' justifyContent={"space-around"} >
        <Box w='80px'  h='80px' backgroundRepeat={"no-repeat"} backgroundImage={"./img/icon1.png"} bgSize="contain"/>
        <Box w='80px'  h='80px' backgroundRepeat={"no-repeat"} backgroundImage={"./img/icon2.png"} bgSize="contain"/>
        <Box w='80px'  h='80px' backgroundRepeat={"no-repeat"} backgroundImage={"./img/icon3.png"} bgSize="contain"/>
        <Box w='80px'  h='80px' backgroundRepeat={"no-repeat"} backgroundImage={"./img/icon4.png"} bgSize="contain"/>
        <Box w='80px'  h='80px' backgroundRepeat={"no-repeat"} backgroundImage={"./img/icon5.png"} bgSize="contain"/>

        </Flex>
    </Flex>
}

export default NavTab;