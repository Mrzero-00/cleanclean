import {useState} from 'react';

import {
  Box,
  Button,
  CheckboxIcon,
  Flex,
  Image,
  Input,
  Select,
  Show,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { sendSms_cafe24, sendSms_munja } from '../hook/sms';

const Body9 = () => {
const date  = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
const [state,setState] = useState({});

const changeState=(e)=>{
  const  {name,value} = e.target;
  setState({
...state,
[name]:value
  })
}



const sendSms = ()=>{
 sendSms_munja(state);
//  sendSms_cafe24(state);
}



  return (
    <>
      <Show breakpoint="(min-width:1000px)">
        <Flex
          w="100vw"
          //   flexDirection={"column"}
          alignItems={"center"}
          overflow="hidden"
        >

          <Image
            w="100%"
            maxW={"670px"}
            h="630px"
            src={"./img/body9bg.png"}
            bgRepeat="no-repeat"
            bgSize={"contain"}
            bgPos="center"
          />
          <Box py="50px" px="50px" bg="#f2f2f2" flex="1" id="footer">
            <Flex width="100%" flexDirection={"column"} maxW="635px" gap="10px">
              <Flex alignItems={"center"} gap="10px" w="100%">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    고객명
                  </Text>
                </Show>
                <Input
                  placeholder="고객명"
                  h="30px"
                  w="100%"
                  name="name"
                  onChange={changeState}
                  borderWidth="1px"
                  borderColor={"#000"}
                />
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    서비스 종류
                  </Text>
                </Show>
                <select
                  style={{ width: "100%", height: "30px", borderColor: "#000" }}
                  placeholder="서비스 종류"
                  name="kind"
                  onChange={changeState}
                >
                  <option value="입주 청소">입주 청소</option>
                  <option value="이사 청소">이사 청소</option>
                  <option value="거주 청소">거주 청소</option>
                </select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="70px">
                    건물 종류
                  </Text>
                </Show>
                <select
                  style={{ width: "100%", height: "30px" }}
                  placeholder="건물 종류"
                  name="object"
                  onChange={changeState}
                >
                  <option value="아파트">아파트</option>
                  <option value="원룸">원룸</option>
                  <option value="빌라/연립주택">빌라/연립주택</option>
                  <option value="단독주택">단독주택</option>
                  <option value="오피스텔">오피스텔</option>
                  <option value="사무실/상가">사무실/상가</option>
                </select>
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    방개수
                  </Text>
                </Show>
                <select
                  style={{ width: "100%", height: "30px", borderColor: "#000" }}
                  placeholder="방 갯수"
                  name="room"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="50px">
                    화장실
                  </Text>
                </Show>
                <select
                  style={{ width: "100%", height: "30px", borderColor: "#000" }}
                  placeholder="화장실 갯수"
                  name="bathRoom"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="50px">
                    베란다
                  </Text>
                </Show>
                <select
                  style={{ width: "100%", height: "30px", borderColor: "#000" }}
                  placeholder="베란다 갯수"
                  name="veranda"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </select>
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    서비스 날짜
                  </Text>
                </Show>
                <Input
                  type="date"
                  h="30px"
                  w="100%"
                  name="date"
                  onChange={changeState}
                  borderWidth="1px"
                  borderColor={"#000"}
                />
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    공급 면적
                  </Text>
                </Show>
                <Input
                  placeholder="공급 면적"
                  h="30px"
                  w="100%"
                  name="area"
                  onChange={changeState}
                  borderWidth="1px"
                  borderColor={"#000"}
                />
                평
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    연락처
                  </Text>
                </Show>
                <Input
                  placeholder="연락처(-제외하고 입력해주세요)"
                  type="tel"
                  h="30px"
                  w="100%"
                  name="tel"
                  onChange={changeState}
                  borderWidth="1px"
                  borderColor={"#000"}
                />
              </Flex>
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    주소
                  </Text>
                </Show>
                <Flex flexDirection={"column"} gap="10px" w="100%">
                  <Input
                    placeholder="주소를 입력해주세요"
                    h="30px"
                    w="100%"
                    name="address"
                    onChange={changeState}
                    borderWidth="1px"
                    borderColor={"#000"}
                  />
                  <Input
                    placeholder="상세주소"
                    h="30px"
                    w="100%"
                    name="detailAddress"
                    onChange={changeState}
                    borderWidth="1px"
                    borderColor={"#000"}
                  />
                </Flex>
              </Flex>
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    문의내용
                  </Text>
                </Show>
                <Textarea
                  placeholder="문의 내용을 기재해 주세요"
                  h={"80px"}
                  w="100%"
                  name="QA"
                  onChange={changeState}
                  resize={"none"}
                  borderWidth="1px"
                  borderColor={"#000"}
                />
              </Flex>
              <CheckboxIcon />
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px"></Text>
                </Show>
                <Button
                  w="100%"
                  bg="#2B2B2B"
                  h="45px"
                  color="#fff"
                  fontWeight={"bold"}
                  fontSize="18px"
                  onClick={sendSms}
                >
                  견적 문의하기
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Show>
      <Show breakpoint="(max-width:1000px)">
        <Flex
          w="100vw"
          flexDirection={"column"}
          alignItems={"center"}
          overflow="hidden"
        >
          <Image
            w="100%"
            maxW={"670px"}
            h="400px"
            src={"./img/body9bg.png"}
            bgRepeat="no-repeat"
            bgSize={"contain"}
            bgPos="center"
          />

          <Box py="50px" px="50px" bg="#f2f2f2" flex="1" id="footer">
            <Flex width="100%" flexDirection={"column"} maxW="635px" gap="10px">
              <Flex alignItems={"center"} gap="10px" w="100%">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    고객명
                  </Text>
                </Show>
                <Input
                  placeholder="고객명"
                  h="30px"
                  w="100%"
                  borderWidth="1px"
                  borderColor={"#000"}
                  name="name"
                  onChange={changeState}
                />
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    서비스 종류
                  </Text>
                </Show>
                <Select
                  style={{
                    width: "100%",
                    height: "30px",
                    borderColor: "#000",
                    paddingInlineEnd:"0px",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="서비스 종류"
                  name="kind"
                  onChange={changeState}
                >
                  <option value="입주 청소">입주 청소</option>
                  <option value="이사 청소">이사 청소</option>
                  <option value="거주 청소">거주 청소</option>
                </Select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="70px">
                    건물 종류
                  </Text>
                </Show>
                <Select
                  style={{
                    width: "100%",
                    height: "30px",
                    borderColor: "#000",
                    borderRadius: "4px",
                    paddingInlineEnd:"0px",
                    backgroundColor: "#fff",
                  }}
                  
                  placeholder="건물 종류"
                  name="object"
                  onChange={changeState}
                >
                  <option value="아파트">아파트</option>
                  <option value="원룸">원룸</option>
                  <option value="빌라/연립주택">빌라/연립주택</option>
                  <option value="단독주택">단독주택</option>
                  <option value="오피스텔">오피스텔</option>
                  <option value="사무실/상가">사무실/상가</option>
                </Select>
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    방개수
                  </Text>
                </Show>
                <Select
                  style={{
                    width: "100%",
                    height: "30px",
                    borderColor: "#000",
                    paddingInlineEnd:"0px",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="방 갯수"
                  name="room"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </Select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="50px">
                    화장실
                  </Text>
                </Show>
                <Select
                  style={{
                    width: "100%",
                    height: "30px",
                    borderColor: "#000",
                    paddingInlineEnd:"0px",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="화장실 갯수"
                  name="bathRoom"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </Select>
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="50px">
                    베란다
                  </Text>
                </Show>
                <Select
                  style={{
                    width: "100%",
                    height: "30px",
                    borderColor: "#000",
                    paddingInlineEnd:"0px",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="베란다 갯수"
                  name="veranda"
                  onChange={changeState}
                >
                  <option value="1개">1개</option>
                  <option value="2개">2개</option>
                  <option value="3개">3개</option>
                  <option value="4개">4개</option>
                  <option value="5개">5개</option>
                </Select>
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    서비스 날짜
                  </Text>
                </Show>
                <Input
                  type="date"
                  h="30px"
                  w="100%"
                  borderWidth="1px"
                  backgroundColor={"#fff"}
                  borderColor={"#000"}
                  name="date"
                  onChange={changeState}
                  defaultValue={today}
                />
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    공급 면적
                  </Text>
                </Show>
                <Input
                  placeholder="공급 면적"
                  h="30px"
                  w="100%"
                  borderWidth="1px"
                  name="area"
                  value={state.area}
                  onChange={changeState}
                  borderColor={"#000"}
                />
                평
              </Flex>
              <Flex alignItems={"center"} gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    연락처
                  </Text>
                </Show>
                <Input
                  placeholder="연락처(-제외하고 입력해주세요)"
                  type="tel"
                  height="30px"
                  width="100%"
                  borderWidth="1px"
                  borderColor={"#000"}
                  name="tel"
                  onChange={changeState}
                />
              </Flex>
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    주소
                  </Text>
                </Show>
                <Flex flexDirection={"column"} gap="10px" w="100%">
                  <Input
                    placeholder="주소를 입력해주세요"
                    h="30px"
                    w="100%"
                    borderWidth="1px"
                    borderColor={"#000"}
                    name="addres"
                    value={state.addres}
                    onChange={changeState}
                  />
                  <Input
                    placeholder="상세주소"
                    h="30px"
                    w="100%"
                    borderWidth="1px"
                    borderColor={"#000"}
                    name="detailAddres"
                    value={state.detailAddres}
                    onChange={changeState}
                  />
                </Flex>
              </Flex>
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px">
                    문의내용
                  </Text>
                </Show>
                <Textarea
                  placeholder="문의 내용을 기재해 주세요"
                  h={"80px"}
                  w="100%"
                  resize={"none"}
                  borderWidth="1px"
                  borderColor={"#000"}
                  name="QA"
                  value={state.QA}
                  onChange={changeState}
                />
              </Flex>
              <CheckboxIcon />
              <Flex gap="10px">
                <Show breakpoint="(min-width: 1000px)">
                  <Text m="0px" minW="100px"></Text>
                </Show>
                <Button
                  w="100%"
                  bg="#2B2B2B"
                  h="45px"
                  color="#fff"
                  fontWeight={"bold"}
                  fontSize="18px"
                  disabled={state?.tel?.length>=9?false:true}
                  _disabled={{
                    opacity:"0.5",
                    cursor:"not-allowed"
                  }}
                  onClick={sendSms}
                >
                  견적 문의하기
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Show>
    </>
  );
};

export default Body9;
