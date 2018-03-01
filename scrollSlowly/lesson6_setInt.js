
function sayHi(arg)  {
	console.log('hello' + arg);
}


// setInterval(sayHi, 5000);
// setInterval(function() {
// 	sayHi()
// }, 3000);

var x = 3;

// var inter = setInterval(function() {
// 	console.log(inter);
// 	if (x) {
// 		sayHi(x);
// 		x--;
// 	} else {
// 		clearInterval(inter);
// 	}
// }, 3000);
// console.log(inter);



// var odd = setTimeout(function() {
//   alert( x );
//   alert(odd);
// }, 1000);

// var i;

// function hardWork() {
//   // время выполнения этого кода >100 мс, сам код неважен
//   for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
// }

// hardWork();



var printNum = function () {
	let i = 1;
	let count = setInterval(function() {
		console.log(i);
	if(i==20) clearInterval(count);
	i++;
}, 500)
}

// var printNum = function () {
// 	let i = 1;
// 	let count = setTimeout(function out() {
// 		console.log(i);
// 		count = setTimeout(out, 500);
// 	if(i==20) clearTimeout(count);
// 	i++;

// }, 500)
// }


// var printNum = function () {
// 	let count = setInterval(function() {
// 	for (var i = 0; i < 21; i++) {
// 		console.log(i);
// 	}
// 	clearInterval(count);
// }, 2000)
// }



// var timerId = setInterval(function() { alert(1) }, 100);
//  // число - идентификатор таймера

//   clearTimeout(timerId);
// // alert(timerId); 

// var out = setTimeout(function gexam(){
// 	alert(1);
// 	// out = setTimeout(gexam, 1000);
// }, 2000)





















