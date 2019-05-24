var theContainer = document.getElementsByTagName('p');
var btn = document.getElementsByClassName('btn');
var pageCounter = 1;


btn[0].addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter +'.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        newFunction(ourData); 
    }
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn[0].style.display ="none";
    }else {
        console.log("good by button!");
    }
});

// function theFunction() {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'starWarsCast2.json', true);
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         var someContent = " ";
//         console.log(ourData[0]);
//         // newFunction(ourData);
//         for(i = 0; i < ourData.length; i ++){
//             someContent = "<ul>" +  ourData[i].title + "</ul>" + "<p> The Best Character in that movie was    " + ourData[i].Casting.bestChar +"</p>";
//             theContainer[0].insertAdjacentHTML('beforeend',someContent);
//         }

//     }
//     ourRequest.send();
// };

function newFunction(theData){
    var someContent = " ";
    for(i=0; i<theData.length; i++){
        someContent += "<ul>" +  theData[i].name + "is a " + theData[i].species +". </ul>";
    }

    theContainer[0].insertAdjacentHTML('beforeend',someContent);
};