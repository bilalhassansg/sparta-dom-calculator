document.addEventListener("DOMContentLoad" , function(event) {

})

// var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];


// function addListItem(value) {

// }

var mywrapper = document.getElementById("wrapper");
mywrapper.style.background = "blue";

var mynewnewwrapper = document.getElementById("newwrapper");
//console.log(mywrapper);
mynewnewwrapper.style.background = "red";


// var mypagaraph = document.getElementsByClassName("myptag");
// // alert(mypagaraph);
// mypagaraph.style.colour = "yellow";
// mypagaraph.style.background = "orange";



var mytag = document.getElementsByTagName("p");
// alert(mytag);

for(var i = 0; i < mytag.length; i++) {
	mytag[i].style.color = "red";
	mytag[i].addEventListener("click", function(event) {

		alert("You are clicking on a paragraph")

	});
}

//mytag.style.color = "white";
//write append loop here

// write the class loop here



var selected = document.querySelectorAll('li.selected');
for(var i = 0; i < selected.length; i++) {
	selected[i].style.color = "red";
}