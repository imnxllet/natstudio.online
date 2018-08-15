// JavaScript Document


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}




function showseasonone(){
	readTextFile("tvshow.json", function(text){
    var mydata = JSON.parse(text);
    var studentlist = "<img src=\"" + mydata.seasons[0].promoImage + "\"></img>" + "<table><thead><tr><th>Episode Title</th><th>Air Date</th><th>Description</th></tr></thead><tbody>";
	for(var i = 0; i < mydata.seasons[0].episodes.length; i ++){
		studentlist += "<tr>";
		studentlist += "<td>" + mydata.seasons[0].episodes[i].title + "</td>";
		studentlist += "<td>" + mydata.seasons[0].episodes[i].airDate + "</td>";
		studentlist += "<td>" + mydata.seasons[0].episodes[i].description + "</td>";
		studentlist += "</tr>";
//		studentlist += students[i].firstname + " " + students[i].lastname + " (" + students[i].studentnum + ")<br>";
	}
	studentlist += "</tbody><table>";
	document.getElementById("s1").innerHTML = studentlist;
});


	
}

function showseasontwo(){
	readTextFile("tvshow.json", function(text){
    var mydata = JSON.parse(text);
    var studentlist = "<img src=\"" + mydata.seasons[1].promoImage + "\"></img>" + "<table><thead><tr><th>Episode Title</th><th>Air Date</th><th>Description</th></tr></thead><tbody>";
	for(var i = 0; i < mydata.seasons[1].episodes.length; i ++){
		studentlist += "<tr>";
		studentlist += "<td>" + mydata.seasons[1].episodes[i].title + "</td>";
		studentlist += "<td>" + mydata.seasons[1].episodes[i].airDate + "</td>";
		studentlist += "<td>" + mydata.seasons[1].episodes[i].description + "</td>";
		studentlist += "</tr>";
//		studentlist += students[i].firstname + " " + students[i].lastname + " (" + students[i].studentnum + ")<br>";
	}
	studentlist += "</tbody><table>";
	document.getElementById("s1").innerHTML = studentlist;

});}