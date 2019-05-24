let header = document.querySelector('.logo');
let titles = document.getElementsByTagName('h2');
let rightCol = document.querySelector('.rightcol img');
let images = document.getElementsByTagName('img');

console.log(titles);
// alert(titles[0].nodeName);

        header.style.cssText = `width="220px";
                                background = "url('https://source.unsplash.com/random/240x240')";
                                zIndex = "-2";`
        console.log(titles);
        console.log(rightCol);
        for(i=0;i<titles.length;i++){
            titles[i].style.cssText = `borderBottom = "3px dotted #333";
                                         color = gray";`	

        }
//     rightCol.style.cssText =`width: 440px;
//                               height: 440px; 
//                               border-radius: 100px 20px;
//                               box-shadow: 1px 10px 5px #888;`

                            