
var red;
var green;
var blue;

var mainColor = ["#B71C1C", "#004D40", "#1E88E5"];
var subColor1 = ["#81C784", "#B0BEC5", "#FBC02D"];

var chouseColor;

function changeMainColor() {

    const wrapperElement = document.getElementById('wrapper');
    const div = document.getElementById('profile');
    const profileH2Text = div.getElementsByClassName('text');

    chouseColor = Math.floor(Math.random() * mainColor.length);

    hex = mainColor[chouseColor];
 
    wrapperElement.style.backgroundColor = hex;

    for(var i = 0; i < 4; i++) {
        profileH2Text[i].style.color = hex;
        profileH2Text[i].style.color = hex;
    }

    
}

function changeSubColor() {

    const wrapperElement = document.getElementById('wrapper');
    const prifile_div = document.getElementById('profile');
    const profileH2Text = div.getElementsByClassName('text');
    
    const top_div = document.getElementById('top');
    const top_border = 


    hex = subColor1[chouseColor];

    wrapperElement.style.color = hex;

    for(var i = 0; i < 4; i++) {
        profileH2Text[i].style.backgroundColor = hex;
    }

}