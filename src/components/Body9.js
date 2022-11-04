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
import axios from 'axios';

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
  const formData = new FormData();
  formData.append('user_id',"youngh9110");
  formData.append('secure',"328ac6ca7b2f71e25d5bc8a3f11d97b7");
  formData.append('title',"청소나라 견적문의");
  formData.append('sphone1',"000");
  formData.append("sphone2",'010');
  formData.append("rphone",'010-8237-1502');
  // formData.append("rphone",'010-3335-6555');
  formData.append('msg',`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`)

  axios({
    method: 'post',
    url: 'http://sslsms.cafe24.com/sms_sender.php',
    data: formData
  }).then((e)=>{console.log(e)}).catch((e)=>{console.log('error:',e)})
}






// if($_POST['action']=='go'){

//   /******************** 인증정보 ********************/
//    $sms_url = "https://sslsms.cafe24.com/sms_sender.php"; // HTTPS 전송요청 URL
//    // $sms_url = "http://sslsms.cafe24.com/sms_sender.php"; // 전송요청 URL
//    $sms['user_id'] = base64_encode("youngh9110"); //SMS 아이디.
//    $sms['secure'] = base64_encode("인증후 사용하세요") ;//인증키
//    $sms['msg'] = base64_encode(stripslashes($_POST['msg']));
//    if( $_POST['smsType'] == "L"){
//          $sms['subject'] =  base64_encode($_POST['subject']);
//    }
//    $sms['rphone'] = base64_encode($_POST['rphone']);
//    $sms['sphone1'] = base64_encode($_POST['sphone1']);
//    $sms['sphone2'] = base64_encode($_POST['sphone2']);
//    $sms['sphone3'] = base64_encode($_POST['sphone3']);
//    $sms['rdate'] = base64_encode($_POST['rdate']);
//    $sms['rtime'] = base64_encode($_POST['rtime']);
//    $sms['mode'] = base64_encode("1"); // base64 사용시 반드시 모드값을 1로 주셔야 합니다.
//    $sms['returnurl'] = base64_encode($_POST['returnurl']);
//    $sms['testflag'] = base64_encode($_POST['testflag']);
//    $sms['destination'] = strtr(base64_encode($_POST['destination']), '+/=', '-,');
//    $returnurl = $_POST['returnurl'];
//    $sms['repeatFlag'] = base64_encode($_POST['repeatFlag']);
//    $sms['repeatNum'] = base64_encode($_POST['repeatNum']);
//    $sms['repeatTime'] = base64_encode($_POST['repeatTime']);
//    $sms['smsType'] = base64_encode($_POST['smsType']); // LMS일경우 L
//    $nointeractive = $_POST['nointeractive']; //사용할 경우 : 1, 성공시 대화상자(alert)를 생략

//    $host_info = explode("/", $sms_url);
//    $host = $host_info[2];
//    $path = $host_info[3]."/".$host_info[4];

//    srand((double)microtime()*1000000);
//    $boundary = "---------------------".substr(md5(rand(0,32000)),0,10);
//    //print_r($sms);

//    // 헤더 생성
//    $header = "POST /".$path ." HTTP/1.0\r\n";
//    $header .= "Host: ".$host."\r\n";
//    $header .= "Content-type: multipart/form-data, boundary=".$boundary."\r\n";

//    // 본문 생성
//    foreach($sms AS $index => $value){
//        $data .="--$boundary\r\n";
//        $data .= "Content-Disposition: form-data; name=\"".$index."\"\r\n";
//        $data .= "\r\n".$value."\r\n";
//        $data .="--$boundary\r\n";
//    }
//    $header .= "Content-length: " . strlen($data) . "\r\n\r\n";

//    $fp = fsockopen($host, 80);

//    if ($fp) {
//        fputs($fp, $header.$data);
//        $rsp = '';
//        while(!feof($fp)) {
//            $rsp .= fgets($fp,8192);
//        }
//        fclose($fp);
//        $msg = explode("\r\n\r\n",trim($rsp));
//        $rMsg = explode(",", $msg[1]);
//        $Result= $rMsg[0]; //발송결과
//        $Count= $rMsg[1]; //잔여건수

//        //발송결과 알림
//        if($Result=="success") {
//            $alert = "성공";
//            $alert .= " 잔여건수는 ".$Count."건 입니다.";
//        }
//        else if($Result=="reserved") {
//            $alert = "성공적으로 예약되었습니다.";
//            $alert .= " 잔여건수는 ".$Count."건 입니다.";
//        }
//        else if($Result=="3205") {
//            $alert = "잘못된 번호형식입니다.";
//        }

//        else if($Result=="0044") {
//            $alert = "스팸문자는발송되지 않습니다.";
//        }

//        else {
//            $alert = "[Error]".$Result;
//        }
//    }
//    else {
//        $alert = "Connection Failed";
//    }

//     if($nointeractive=="1" && ($Result!="success" && $Result!="Test Success!" && $Result!="reserved") ) {
//        echo "<script>alert('".$alert ."')</script>";
//    }
//    else if($nointeractive!="1") {
//        echo "<script>alert('".$alert ."')</script>";
//    }
//    echo "<script>location.href='".$returnurl."';</script>";
// }
       



  return (
    <>
    {/* <a href="sms:01082371502body=이게가나요">문자보내기</a> */}
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
                  h="30px"
                  w="100%"
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
