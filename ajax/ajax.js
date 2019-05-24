var theContainer = document.getElementsByTagName('p');
var btn = document.getElementsByClassName('btn');


function theFunction() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'starWarsCast2.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        var someContent = " ";
        console.log(ourData[0]);
        // newFunction(ourData);
        for(i = 0; i < ourData.length; i ++){
            someContent = "<ul>" +  ourData[i].title + "</ul>" + "<p> The Best Character in that movie was    " + ourData[i].Casting.bestChar +"</p>";
            theContainer[0].insertAdjacentHTML('beforeend',someContent);
        }

    }
    ourRequest.send();
};