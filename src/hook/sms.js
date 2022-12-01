import axios from "axios";
import { decode, encode } from "iconv-lite";

export const sendSms_cafe24 = (state) => {
  const formData = new FormData();
  formData.append("sms_url", "http://sslsms.cafe24.com/sms_sender.php");
  formData.append("user_id", "youngh9110");
  formData.append("secure", "328ac6ca7b2f71e25d5bc8a3f11d97b7");
  formData.append("title", "청소나라 견적문의");
  formData.append("sphone1", "010");
  formData.append("sphone2", "3335");
  formData.append("sphone3", "6555");
  formData.append("rphone", "010-8237-1502");
  formData.append("testflag", "Y");
  formData.append(
    "msg",
    `고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`
  );

  axios({
    method: "POST",
    url: "http://sslsms.cafe24.com/sms_sender.php",
    data: formData,
  }).then((e) => {
    console.log(e);
  });
};

export const sendSms_munja = (state) => {
  // const formData = new FormData();

  // formData.append('message',`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`);
  // console.log("encode:",encode('안녕하세요',"EUC-KR").toString());
  const AuthData = {
    key: "x2bv1knsxecpcvnir4e72igdmp7xnudr",
    user_id: "youngh91",
    sender: "01033356555",
    receiver: state.tel,
    msg: `고객명:${state.name}\n연락처:${state.tel}\n주소:${state.address} ${state.detailAddress}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`,
  };

  axios({
    method: "POST",
    url: "https://cors-anywhere.herokuapp.com/https://apis.aligo.in/send/",
    params: AuthData,
  })
    .then((res) => {
      console.log(res);
      const { result_code } = res.data;
      if (result_code === -101) {
        alert("인증 오류입니다. - IP");
        return;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
