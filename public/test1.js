
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   
function onCompleteLoad () {


  





var test1=  document.getElementById("test1");

var firstChild = document.createElement("ul");

firstChild.className="text-primary";

var listOfValues =["Value 1","Value 2","Value 3","Value 4"];

for(var i=0;i<listOfValues.length;i++){
  var innerChild= document.createElement("li");

  

  innerChild.innerText=listOfValues[i];


  firstChild.append(innerChild);
}



test1.append(firstChild);




var linkElement = document.createElement("link");

linkElement.href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

linkElement.rel="stylesheet"



document.head.appendChild(linkElement);

}

onCompleteLoad();


// var test1=  document.getElementById("test1");

// test1.createChildElement("<ul>");
// var firstChild = document.createElement("ul");


// var listOfValues =["Value 1","Value 2","Value 3","Value 4"];

// for(var i=0;i<listOfValues.length;i++){
//   var innerChild= document.createElement("li");

//   innerChild.innerText=listOfValues[0];
// }


// firstChild.append(innerChild);



