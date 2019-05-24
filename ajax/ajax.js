var theContainer = document.getElementsByTagName('p');
var btn = document.getElementsByClassName('btn');


function theFunction() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'starWarsCast2.json', true);
    ourRequest.onload = function () {
        var myData = JSON.parse(ourRequest.responseText);
        var someContent = " ";
        // newFunction(ourData);
        for(i = 0; i < myData.length; i ++){
            someContent = "<ul>" +  myData[i].title + "</ul>" + "<p> The Best Character in that movie was    " + myData[i].Casting.bestChar +"</p>";
            theContainer[0].insertAdjacentHTML('beforeend',someContent);
        }
        console.log(myData);
    }
    ourRequest.send();
};