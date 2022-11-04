import { Box, Flex,Show } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

const Body1 = () => {
  const list = [
    {
      title: "직영팀이 직접 청소!",
      text: "하청이 아닌 직영팀이 직접들어가서 처음부터 끝까지 청소합니다.",
    },
    {
      title: "A/S가능 청소전문업체",
      text: "전문 청소팀으로 직접 진행하여 3일이내 발생한 하자보수는 A/S 가능합니다.",
    },
    {
      title: "합리적인 금액",
      text: "합리적인 금액으로 고객님들의 부담을 덜어드리겠습니다.",
    },
  ];

  const list2 = [
    {
      title: "친환경 세제 사용!",
      text: "일반 화학 세제가 아닌 친환경 세제로 건강과 환경 모두를 지키겠습니다.",
    },
    {
      title: "고객님 만족 최우선",
      text: "고객님의 만족을 위해 항상 최선을 다하는 청소를 부탁해가 되겠습니다.",
    },
  ];
  return (
    <Flex w="100%" bg="#F1F2F3" alignItems={"center"}>
        <Show  breakpoint="(min-width: 1100px)">
      <Box
        w="45%"
        h="672px"
        bg="#2A2A2A"
        marginRight={'-80px'}
        backgroundImage={"./img/body1bg.png"}
        backgroundSize="contain"
        bgRepeat={"no-repeat"}
        bgPos="center"
      />

        </Show>

      <Flex
        flexDirection={"column"}
        justifyContent="center"
        flex="1"
        h="100%"
        py="50px"

      >
        <Flex
          alignItems={"center"}
          flexWrap="wrap"
          justifyContent={"center"}
          gap={"12px"}
          mb="12px"
        >
          {list.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </Flex>
        <Flex
          alignItems={"center"}
          flexWrap="wrap"
          justifyContent={"center"}
          gap={"12px"}
        >
          {list2.map((item, index) => (
            <ItemCard
              key={index + 2}
              title={item.title}
              text={item.text}
              index={index + 3}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Body1;
