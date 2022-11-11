// import axios from 'axios';
// import { config } from './config';


// export function send(options) {
//     const formData = new formData();
//     formData.append("user_id",config.smsconfig.userId);
//     formData.append('secure',config.smsconfig.secure);
//     formData.append('sphone1',config.smsconfi)
//   var parameters = {
//     userid: encodeURIComponent(config.smsconfig.userId),
//     passwd: encodeURIComponent(config.smsconfig.secure),
//     sender: encodeURIComponent(options.msg),
//     receiver:encodeURIComponent("010-8237-1502"),
//     message: encodeURIComponent(),
//   };
  
//   var smsRequest = axios.post(
    
//   );

// }


// export const send_munjanara =()=>{
//         // 테스트 후, 서버 상태에 따라 원활한 접속 방법을 이용해주세요.
//     //$fp = fsockopen("ssl:munjanara.co.kr", 443, $errno, $errstr, 10);
//     $fp = fsockopen("munjanara.co.kr", 80, $errno, $errstr, 10);

//     if(!$fp){
//         return "$errno : $errstr";
//         exit;
//     }

//     fwrite($fp, "GET $url HTTP/1.0\r\nHost: munjanara.co.kr\r\n\r\n"); 
//     $flag = 0; 
    
//     while(!feof($fp)){
//         $row = fgets($fp, 1024);

//         if($flag) $out .= $row;
//         if($row=="\r\n") $flag = 1;
//     }
//     fclose($fp);
//     return $out;
// }