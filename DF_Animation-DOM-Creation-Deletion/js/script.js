// JavaScript Document

onload = init;

function init(){
	document.getElementsByTagName("a")[0].onclick = function(){startAnimation();};
	document.getElementsByTagName("a")[1].onclick = function(){removeSection();};
	document.getElementsByTagName("a")[2].onclick = function(){addArticle();};
	
	
	return "The program has started";
}

function startAnimation(){
	document.getElementsByTagName("section")[0].className = "animation";
	return "Animation has started";
}

function removeSection(){
	var body = document.getElementsByTagName("body")[0];
	var section = document.getElementsByTagName("section")[0];

	body.removeChild(section);
	return "I have removed the section";
}
function addArticle(){
	var body = document.getElementsByTagName("body")[0];
	var article = document.createElement("article");
	article.id="newSection";
	article.innerHTML="<h1>I am a new section</h1>";

	body.appendChild(article);
	return "I have removed the section";
}











