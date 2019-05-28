// var theContainer = document.getElementsByTagName('p');
// var btn = document.getElementsByClassName('btn');
// var clickCounter = 1;


// function theFunction() {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'starWarsCast2.json', true);
//     ourRequest.onload = function () {
//         if (ourRequest.status >= 200 && ourRequest.status < 400) {//Handling Exceptions/Errors
//             var myData = JSON.parse(ourRequest.responseText);
//             var someContent = " ";
//             for (i = 0; i < myData.length; i++) {
//                 someContent = "<ul>" + myData[i].title + "</ul>" + "<p> The Best Character in that movie was    " + myData[i].Casting.bestChar + "</p>";
//                 theContainer[0].insertAdjacentHTML('beforeend', someContent);
//             }
//             console.log(myData);
//         } else {
//             console.log("There was an error requesting the file");
//         }
//     }
//     ourRequest.send();
//     clickCounter++;
//     if (clickCounter = 2) {
//         btn[0].style.display = "none";
//         theContainer[1].style.display = "none";
//     } else {
//         console.log("Something is wrong with the Button!");
//     }
// };