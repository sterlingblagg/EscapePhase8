a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
d = document.getElementById("slot4");
e = document.getElementById("slot5");
var wrongAnswer = document.getElementById('wrong-answer')

function nextImage(el){
	if (el.src.match("images/symbol1.png")){
		el.src = "images/symbol2.png";
	} else if (el.src.match("images/symbol2.png")){
		el.src = "images/symbol3.png";
	} else if (el.src.match("images/symbol3.png")){
		el.src = "images/symbol1.png";
	} else {
		
	}
}

function nextImage2(el){
	if (el.src.match("images/symbol1.png")){
		el.src = "images/symbol2.png";
	} else if (el.src.match("images/symbol2.png")){
		el.src = "images/symbol3.png";
	} else if (el.src.match("images/symbol3.png")){
		el.src = "images/symbol1.png";
	} else {
		
	}
}

function nextImage3(el){
	if (el.src.match("images/symbol1.png")){
		el.src = "images/symbol2.png";
	} else if (el.src.match("images/symbol2.png")){
		el.src = "images/symbol3.png";
	} else if (el.src.match("images/symbol3.png")){
		el.src = "images/symbol1.png";
	} else {
		
	}
}

function nextImage4(el){
	if (el.src.match("images/symbol1.png")){
		el.src = "images/symbol2.png";
	} else if (el.src.match("images/symbol2.png")){
		el.src = "images/symbol3.png";
	} else if (el.src.match("images/symbol3.png")){
		el.src = "images/symbol1.png";
	} else {
		
	}
}

function nextImage5(el){
	if (el.src.match("images/symbol1.png")){
		el.src = "images/symbol2.png";
	} else if (el.src.match("images/symbol2.png")){
		el.src = "images/symbol3.png";
	} else if (el.src.match("images/symbol3.png")){
		el.src = "images/symbol1.png";
	} else {
		
	}
}

function buttonPageSwap(el){
	if (a.src.match("symbol2") && b.src.match("symbol1") && c.src.match("symbol3") && d.src.match("symbol3") && e.src.match("symbol2")){	
		document.location.href = "https://sterlingblagg.github.io/EscapeRoomEnding/"
	} else {
		wrongAnswer.play();
	}
}

function alertHint(el){
	alert("You need to spell out the name of the planet in which you came from. However, it appears as if that the code is in an alien language! Thankfully, the language comes with a translator! You need to find out how to translate this language from English into the new language, then head on home!");
}