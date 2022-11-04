import { Box, Flex, Text } from "@chakra-ui/react";

const ItemCard = ({text,index,title})=>{
    return<Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} bg='white' w='220px' h='280px'>
        <Flex h='50%' flexDirection={"column"} justifyContent="center" px='1em'>
            <Text textAlign={"center"} fontSize={"20px"} lineHeight="20px" fontWeight="bold" m="0px">{title}</Text>
            <Text textAlign={"center"} fontSize={"15px"} lineHeight="1.2" m="0px" mt='8px'>{text}</Text>
        </Flex>
        <Box w='100%' h ='50%' backgroundImage={`./img/card${index}.png`}/>
    </Flex>
}

export default ItemCard;