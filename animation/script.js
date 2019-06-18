var playPause = anime({
    targets: 'div.box',
    skewY: [
        {value:200, duration: 500},
        {value:0, duration: 500}
    ],
    translateY: [
        {value:200, duration: 500},
        {value:0, duration: 500}
    ],
    rotate: {
        value:'1turn',
        easing: 'easeInOutSine'
    },
    backgroundImage: "url('https://source.unsplash.com/random/100x104')",
    delay: (el,i, l)=>{
        return i*1000
    },
    autoplay:false
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;

// anime({
//     targets: 'div.box.blue',
//     translateY: [
//         {value:200, duration: 500, delay: 1000},
//         {value:0, duration: 500}
//     ],
//     rotate: {
//         value:'2turn',
//         easing: 'easeInOutSine',
//         delay:1000
//     }
// });
// anime({
//     targets: 'div.box.green',
//     translateY: [
//         {value:200, duration: 500, delay:2000},
//         {value:0, duration: 500}
//     ],
//     rotate: {
//         value:'3turn',
//         easing: 'easeInOutSine',
//         delay: 2000
//     }
// });
// anime({
//     targets: 'div.box.yellow',
//     translateY: [
//         {value:200, duration: 500, delay:3000},
//         {value:0, duration: 500}
//     ],
//     rotate: {
//         value:'4turn',
//         easing: 'easeInOutSine',
//         delay: 3000
//     }
// });