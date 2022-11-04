import { Box, Flex } from "@chakra-ui/react";

const Banner = ()=>{
    return<Flex backgroundImage={'./img/bannerbg.png'} w='100%' flexDirection="column" h='60vh' justifyContent={"center"} bgPos={"center"} bgSize="cover" bgRepeat={'no-repeat'} alignItems={'center'} px='5em'>
        <Box backgroundImage={"./img/banner1.png"} h='55px' w='100%' bgPos={"center"} bgSize="contain" bgRepeat={'no-repeat'}/>
        <Box backgroundImage={"./img/banner2.png"} h='40px' mt='-20px' zIndex={-1} w='100%' bgPos={"center"} bgSize="contain" bgRepeat={'no-repeat'}/>
        <Box backgroundImage={"./img/banner3.png"} h='90px' w='100%' mt='20px' bgPos={"center"} bgSize="contain" bgRepeat={'no-repeat'}/>
        <Box backgroundImage={"./img/banner4.png"} h='16px' w='100%' mt='80px' bgPos={"center"} bgSize="contain" bgRepeat={'no-repeat'}/>
    </Flex>
}

export default Banner;