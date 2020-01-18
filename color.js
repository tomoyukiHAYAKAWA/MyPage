
var red;
var green;
var blue;

function changeBackColor() {

    const element = document.getElementById('wrapper');

    red = Math.floor( Math.random() * 256 );
    green = Math.floor( Math.random() * 256 );
    blue = Math.floor( Math.random() * 256 );

    let rgb = [red, green, blue]
    // 16進数にして返す
    hex = rgb2hex(rgb);

    element.style.backgroundColor = hex;
}

function changeTextColor() {

    const element = document.getElementById('wrapper');

    let rgbArray = [red, green, blue];
    let max = Math.max.apply(null, rgbArray);
    let min = Math.min.apply(null, rgbArray);

    let invRed = (max + min) - rgbArray[0];
    let invGreen = (max + min) - rgbArray[1];
    let invBlue = (max + min) - rgbArray[2];

    let invRGB = [invRed, invGreen, invBlue];

    hex = rgb2hex(invRGB);

    element.style.color = hex;

}

function rgb2hex ( rgb ) {
	return "#" + rgb.map( function ( value ) {
		return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
	} ).join( "" ) ;
}