import axios from "axios";
import {decode,encode} from "iconv-lite";

export const sendSms_cafe24 = (state)=>{
    const formData = new FormData();
    formData.append("sms_url","http://sslsms.cafe24.com/sms_sender.php");
    formData.append('user_id',"youngh9110");
    formData.append('secure',"328ac6ca7b2f71e25d5bc8a3f11d97b7");
    formData.append('title',"청소나라 견적문의");
    formData.append('sphone1',"010");
    formData.append("sphone2",'3335');
    formData.append("sphone3",'6555');
    formData.append("rphone",'010-8237-1502');
    formData.append("testflag","Y");
    formData.append('msg',`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`);
  
    axios({
      method: 'POST',
      url: 'http://sslsms.cafe24.com/sms_sender.php',
      data: formData,
    }).then((e)=>{console.log(e)})
  }
  

export const sendSms_munja = (state)=>{
    // const formData = new FormData();
    const buffer = encode('안녕하세요',"euc-kr").toString('utf-8');
    // formData.append('message',`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`);
    // console.log("encode:",encode('안녕하세요',"EUC-KR").toString());
    axios({
      method: 'POST',
      headers:{
        "Content-Type": "text/html; charset=euc-kr"
      },
      url: 'https://www.munjanara.co.kr/MSG/send/web_admin_send.htm',
      params:{
        userid:"youngh1991",
        passwd:"cjdth10311",
        sender:'01033356555',
        receiver:'01082371502',
        encode:0,
        message:buffer
        // message:`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`
      }
    }).then((e)=>{console.log(e)})
  }
  