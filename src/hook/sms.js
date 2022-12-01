import axios from "axios";

export const sendSms_munja = (state) => {

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
