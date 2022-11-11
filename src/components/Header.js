import { Box, Flex, Link } from "@chakra-ui/react";

const Header = ()=>{
    return(
    <Flex w='100vw'  h='80px' boxShadow={"1px 1px 10px 3px rgba(0,0,0,0.1)"} alignItems="center" justifyContent={"center"}>
        <Flex w='100%' maxW="1100px" px='16px' justifyContent={"space-between"}>
                <Box w='120px' h='50px' backgroundImage={"./img/logo.png"} backgroundSize="contain" backgroundRepeat={"no-repeat"}/>
            <Flex gap={'10px'}>
            <Link href="tel:1544-5088"  >
                <Box w='80px' h='40px' bgImg={`./img/headerTell.png`} bgRepeat="no-repeat" backgroundSize="contain" bgPosition={"center"}/>
            </Link>
            <Link href="#footer"  >
                <Box w='80px' h='40px' bgImg={`./img/header1.png`} bgRepeat="no-repeat" backgroundSize="contain" bgPosition={"center"}/>
            </Link>
            </Flex>
        </Flex>
    </Flex>
    );
}

export default Header;