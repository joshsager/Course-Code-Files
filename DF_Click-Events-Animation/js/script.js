// JavaScript Document

onload = init;

function init(){
	console.log('program started');
	document.getElementById("jordan").onclick = function(){ callSuperhero("jordan"); }
	document.getElementById("super").onclick = function(){ callSuperhero("super"); }
	document.getElementById("bat").onclick = function(){ callSuperhero("bat"); }            
}

function callSuperhero(hero){
	console.log("Jordan has been clicked");
		document.getElementById(hero).className = "clicked";
}