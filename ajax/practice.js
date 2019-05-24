var theContainer = document.getElementsByTagName('p');
var btn = document.getElementsByClassName('btn');
var pageCounter = 1;


btn[0].addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter +'.json', true);
    ourRequest.onload = function () {
        if(ourRequest.status>=200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            console.log(ourData[0]);
            newFunction(ourData); 
        }else{
            console.log("We connected to the server but I returned an error");
        }
        
    };
    ourRequest.onerror = function(){
        console.log('conection error');
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
        someContent += "<ul>" +  theData[i].name + "is a " + theData[i].species + " that likes to eat "; 
         for(ii = 0; ii < theData[i].foods.likes.length; ii++){
            if(ii == 0){
                someContent += theData[i].foods.likes[ii];
            }else{
                someContent += ", and " + theData[i].foods.likes[ii];

            }
        }
        someContent += '; and dislikes ';
        for(ii = 0; ii < theData[i].foods.dislikes.length; ii++){
            if(ii == 0){
                someContent += theData[i].foods.dislikes[ii];
            }else{
                someContent += "; and " + theData[i].foods.dislikes[ii];

            }
        }
         someContent +=". </ul>";
    }

    theContainer[0].insertAdjacentHTML('beforeend',someContent);
};