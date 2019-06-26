
// document.write("<p>getAge(1995, 4, 13)</p>")
//
// function getAge(year, month, day){
//
//   //誕生年月日
//   var birthday  = new Date(y, m-1, d);
//
//   //今日
//   var today = new Date();
//
//   //今年の誕生日
//   var thisYearBirthday =
//       new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
//
//   //今年-誕生年
//   var age = today.getFullYear() - birthday.getFullYear();
//
//   //今年の誕生日を迎えていなければage-1を返す
//   return (today < thisYearBirthday)?age-1:age;
// }

// function setfig(num) {
//    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
//    var ret;
//    if( num < 10 ) { ret = "0" + num; }
//    else { ret = num; }
//    return ret;
// }
function ageCounter() {

  var duration = Date.now() - new Date("1995/4/13");
  var age = duration / 1000 / 60 / 60 / 24 / 365;
  age = age.toString().match(/\d{2}\.\d{9}/)[0];

  const element = document.querySelector('.age_text');
  element.innerText =  age

  //document.getElementById("RealtimeClockArea").innerHTML =
   // var birthday = new Data()
   // var nowTime = new Date();
   // var nowHour = setfig( nowTime.getHours() );
   // var nowMin  = setfig( nowTime.getMinutes() );
   // var nowSec  = setfig( nowTime.getSeconds() );
   // var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";

}
setInterval('ageCounter()', 30/1000);
