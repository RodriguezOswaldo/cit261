let header = document.querySelector('.logo');
let titles = document.getElementsByTagName('h2');
let rightCol = document.querySelector('.rightcol img');

        header.style.cssText = `width="220px";
                                background = "url('https://source.unsplash.com/random/240x240')";
                            zIndex = "-1";`
        console.log(titles);
        console.log(rightCol);
        for(i=0;i<titles.length;i++){
            titles[i].style.fontSize ="30px";
        }
    rightCol.style.cssText =`width: 440px;
                              height: 440px; 
                              border-radius: 100px 20px;
                              box-shadow: 1px 10px 5px #888;`