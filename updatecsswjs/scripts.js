let heading = document.getElementsByTagName('h2');
console.log(heading);
let images = document.getElementsByTagName('img');
console.log(images);
let text = document.getElementsByTagName('p');
console.log(p);

for(i=0;i<images.length; i++){
        images[i].style.boxShadow = "20px 10px 15px #323";
        images[i].style.borderRadius = "20px 130px";
}
for(i=0; i<heading.length; i++){
        heading[i].style.fontSize = "30px";
}
// console.log(titles);
// // alert(titles[0].nodeName);

//         header.style.cssText = `width="220px";
//                                 background = "url('https://source.unsplash.com/random/240x240')";
//                                 zIndex = "-2";`
//         console.log(titles);
//         console.log(rightCol);
//         for(i=0;i<titles.length;i++){
//             titles[i].style.cssText = `borderBottom = "3px dotted #333";
//                                          color = gray";`	

//         }
//     rightCol.style.cssText =`width: 440px;
//                               height: 440px; 
//                               border-radius: 100px 20px;
//                               box-shadow: 1px 10px 5px #888;`

                            