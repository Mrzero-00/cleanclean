
export const sendSms_cafe24 = (state)=>{
        const userId = 'youngh9110'; // Cafe24 계정 아이디
        const secure = '328ac6ca7b2f71e25d5bc8a3f11d97b7'; // Cafe24 계정 인증키
        const sender = '01033356555'; // 발신번호
        const receiver = '010-8237-1502'; // 수신번호
        // const message = '테스트';
        const message = `고객명:${state.name||"기입안함"}\n연락처:${state.tel||"기입안함"}\n주소:${state.address||"기입안함"} ${state.detailAddres||""}\n일정:${state.date||"기입안함"}\n건물 종류:${state.object||"기입안함"}\n서비스 종류:${state.kind||"기입안함"}\n평수:${state.area||"기입안함"}\n방 갯수:${state.room||"기입안함"}\n화장실 갯수:${state.bathRoom||"기입안함"}\n베란다:${state.veranda||"기입안함"}`; // 메시지 내용
  const smsURL = '/sms_sender.php'; // Cafe24 SMS API URL (프록시 서버를 통해 요청 전달)
  // const smsURL = `${process.env.REACT_APP_DB_HOST}/sms_sender.php`; // Cafe24 SMS API URL (프록시 서버를 통해 요청 전달)
  const requestData = new FormData();

  requestData.append('user_id', userId);
  requestData.append('secure', secure);
  requestData.append('msg', message);
  requestData.append('rphone', receiver);
  requestData.append('sphone1', sender.substring(0, 3));
  requestData.append('sphone2', sender.substring(3, 7));
  requestData.append('sphone3', sender.substring(7));
  requestData.append('smsType', 'L');
  requestData.append('mode', '1');
  
  fetch(smsURL,{
    method:"post",
    body:requestData
  })


  // axios.post(smsURL,{
  //   ...requestData
  // });


  }
  

// export const sendSms_munja = (state)=>{
//     // const formData = new FormData();

//     const query = queryString.stringify({
//       userid:'youngh1991',
//       passwd:"cjdth1031",
//       sender:"01033356555",
//       receiver:"01082371502",
//       encode:1,
//       message:encodeURI(`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`)
//     });


    

//     // formData.append('message',`고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`);
//     // console.log("encode:",encode('안녕하세요',"EUC-KR").toString());
//     axios({
//       method: 'POST',
//       headers:{
//         "Content-Type": "text/html; charset=euc-kr"
//       },
//       url: 'https://www.munjanara.co.kr/MSG/send/web_admin_send.htm',
//       params:{
//         userid:"youngh1991",
//         passwd:"cjdth1031",
//         sender:'01033356555',
//         receiver:'01033356555',
//         encode:0,
//         // message:`cleanApp_sms<br>tel:${state.tel}<br>date:${state.date}`
//         message:`cleanApp_sms<br>고객명:${state.name}\n연락처:${state.tel}\n주소:${state.addres} ${state.detailAddres}\n일정:${state.date}\n건물 종류:${state.object}\n서비스 종류:${state.kind}\n평수:${state.area}\n방 갯수:${state.room}\n화장실 갯수:${state.bathRoom}\n베란다:${state.veranda}`
//       }
//     }).then((e)=>{console.log(e)})
//   }
  