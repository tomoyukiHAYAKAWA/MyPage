
var red;
var green;
var blue;

function changeBackColor() {

    const wrapperElement = document.getElementById('wrapper');

    red = Math.floor( Math.random() * 256 );
    green = Math.floor( Math.random() * 256 );
    blue = Math.floor( Math.random() * 256 );

    let rgb = [red, green, blue]
    // 16進数にして返す
    hex = rgb2hex(rgb);

    wrapperElement.style.backgroundColor = hex;
    
}

function changeTextColor() {

    const wrapperElement = document.getElementById('wrapper');
    const div = document.getElementById('profile');
    const profileH2Text = div.getElementsByClassName('text');

    let rgbArray = [red, green, blue];
    let max = Math.max.apply(null, rgbArray);
    let min = Math.min.apply(null, rgbArray);

    let invRed = (max + min) - rgbArray[0];
    let invGreen = (max + min) - rgbArray[1];
    let invBlue = (max + min) - rgbArray[2];

    let invRGB = [invRed, invGreen, invBlue];

    hex = rgb2hex(invRGB);

    wrapperElement.style.color = hex;

    for(var i = 0; i < 4; i++) {
        profileH2Text[i].style.color = hex;
    }

}

function rgb2hex ( rgb ) {
	return "#" + rgb.map( function ( value ) {
		return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
	} ).join( "" ) ;
}