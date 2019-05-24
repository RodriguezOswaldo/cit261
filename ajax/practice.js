var theContainer = document.getElementsByTagName('p');
var btn = document.getElementsByClassName('btn');



btn[0].addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'starWarsCast2.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        newFunction(ourData);

        //  document.getElementsByTagName('p').innerHTML = ourData[0];
    }
    ourRequest.send();
});

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

function newFunction(theData){
    var someContent = " ";
    for(i=0; i<theData.length; i++){
    }

    theContainer[0].insertAdjacentHTML('beforeend',someContent);
};