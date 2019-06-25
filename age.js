
document.write("<p>getAge(1995, 4, 13)</p>")

function getAge(year, month, day){

  //誕生年月日
  var birthday  = new Date(y, m-1, d);

  //今日
  var today = new Date();

  //今年の誕生日
  var thisYearBirthday =
      new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  //今年-誕生年
  var age = today.getFullYear() - birthday.getFullYear();

  //今年の誕生日を迎えていなければage-1を返す
  return (today < thisYearBirthday)?age-1:age;
}
