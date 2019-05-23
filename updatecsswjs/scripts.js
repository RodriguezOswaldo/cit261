let header = document.querySelector('.logo');
let titles = document.getElementsByTagName('h2');

        header.style.width = "220px";
        header.style.background = "url('https://source.unsplash.com/random/240x240')";
        header.style.zIndex = "-1";
        console.log(titles);
        for(i=0;i<titles.length;i++){
            titles[i].style.fontSize ="30px";
        }