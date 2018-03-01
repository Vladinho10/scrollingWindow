'use strict';

console.log( 'window.innerWidth=' + window.innerWidth + '        ' + 'window.innerHeight='+ window.innerHeight); // current sizes of browser include scrollbar

console.log('');

console.log( 'docElement.clientWidth=' + document.documentElement.clientWidth + '   ' +  'docElement.clientHeight='+ document.documentElement.clientHeight );
console.log( 'docElement.scrollWidth=' + document.documentElement.scrollWidth + '   ' + 'docElement.scrollHeight='+ ' ' + document.documentElement.scrollHeight );  // all scrolling part
console.log( 'docElement.offsetWidth=' + document.documentElement.offsetWidth + '   ' +   'docElement.offsetHeight='+ ' ' + document.documentElement.offsetHeight );  // all scrolling part

console.log('');

console.log( 'body.clientWidth=' + document.body.clientWidth + '         ' + 'body.clientHeight=' + document.body.clientHeight);
console.log( 'body.scrollWidth=' + document.body.scrollWidth +  '          ' + 'body.scrollHeight=' + document.body.scrollHeight );  // all scrolling part
console.log( 'body.offsetWidth=' + document.body.offsetWidth + '          ' + 'body.offsetHeight=' + document.body.offsetHeight);  // all scrolling part
  // all scrolling part

name2.innerHTML = window.pageYOffset; //read-only property
// name2.innerHTML = document.documentElement.scrollTop; // 2n el

let goToBtn = document.querySelector('#goToBtn');

goToBtn.addEventListener('click', function () {

// var odd = setTimeout(function() {
//   alert(odd);
//   alert( x );
// }, 500);

// 	window.scrollBy(0,50); // amen angam verevic -10px 10px-ov texapoxvi
	// window.scrollTo(0, -50) // qcum e konkret tex, konkret tvov pixceli vra
} )

let downToHell = document.querySelector('#downToHell');

downToHell.addEventListener('click', function () {
// 	name3.scrolldownToHell(false); // true mer elementy kpcne top-in, false-kpcne bottomin
	var timerDown = setInterval(function () {
		window.scrollBy(0, 10);
		if(window.pageYOffset==document.body.clientHeight - window.innerHeight) {
			clearInterval(timerDown);
		}
	}, 10)
} )

let upToGod = document.querySelector('#upToGod');
upToGod.addEventListener('click', function () {
	 name3.scrollIntoView({behavior : 'smooth', block: "start", inline: "nearest"})
	// var timerUp = setInterval(function () {
	// 	window.scrollBy(0, -1);
	// 	if ( name3.scrollIntoView({behaviour : 'smooth'}) ) {
	// 		clearInterval(timerUp);
	// 	}
	// }, 1)
})


 




 var script = document.createElement('script');  
script.src = 'http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
document.body.appendChild(script);