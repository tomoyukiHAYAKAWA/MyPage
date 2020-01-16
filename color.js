
var red;
var green;
var blue;

function changeBackColor() {

    const element = document.querySelector('wrapper');

    red = Math.floor( Math.random() * 256 );
    green = Math.floor( Math.random() * 256 );
    blue = Math.floor( Math.random() * 256 );

    // 16進数にして返す
    hex = rgb2hex(red, green, blue);

    element.style.backgroundColor = hex;

}

function changeTextColor() {

    const element = document.querySelector('wrapper');

    let rgbArray = [red, green, blue];
    let max = Math.max.apply(null, rgbArray);
    let min = Math.min.apply(null, rgbArray);

    let red = (max + min) - rgbArray[0];
    let green = (max + min) - rgbArray[1];
    let blue = (max + min) - rgbArray[2];

    hex = rgb2hex(red, green, blue);

    element.style.color = hex;

}

function rgb2hex ( rgb ) {
	return "#" + rgb.map( function ( value ) {
		return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
	} ).join( "" ) ;
}