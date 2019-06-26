function ageCounter() {

  var duration = Date.now() - new Date("1995/4/13");
  var age = duration / 1000 / 60 / 60 / 24 / 365;
  age = age.toString().match(/\d{2}\.\d{9}/)[0];

  const element = document.querySelector('.age_text');
  element.innerText =  age;

}
setInterval('ageCounter()', 30/1000);
