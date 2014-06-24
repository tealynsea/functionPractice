var tripleFive = function() {
	
	for(var i=0; i<3; i++) {
	console.log("Five !");
	}
}

tripleFive();

var lastLetter = function(string) {
 
	return string[string.length-1]

}
lastLetter('island')

var square = function (n) {

	return n * n;

}

square(5);

var negate = function(n) {

	return n * -1;
}

negate(5);


var toArray = function(x, y, z){ 
return [x, y, z];

}

toArray(1, 4, 5)

var startsWithA = function(word) {
	 
	 return word.charAt(0).toUpperCase() === 'A';

  }
 

startsWithA('bear')


var excite = function(word) {
	 
	return word + "!!!";
}

console.log(excite('yes'));

var sun = function(word) { 

	return word.indexOf("sun") != -1;
	
}

console.log(sun('block'));

var tiny = function(number) {

	if(number <=1 && number>=0) {
		return true;
	}
	else {
		return false;
	}
}

console.log(tiny(4));

var getSeconds = function(time)  {

	var pieces = time.split(":");
	var result = Number(pieces[0]) * 60 + Number(pieces[1])
	return(result);
}

console.log(getSeconds("10:30"))

	 











