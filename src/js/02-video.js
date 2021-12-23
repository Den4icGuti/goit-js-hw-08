import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframeRef = document.querySelector('iframe');
// const player = new Vimeo.Player(iframeRef);

// player.on('play', throttle(function () {
//   player.getCurrentTime().then(function (sec) {
//     console.log('title:', sec);
//     localStorage.setItem('current-time', JSON.stringify(sec))
//    });
// },1000),
// );

// const toStart = JSON.parse(localStorage.getItem('current-time')) || 0;
// //  console.log(toStart);
// player.setCurrentTime(toStart);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(sec => {
      localStorage.setItem('videoplayer-current-time', JSON.stringify(sec));
    });
  }, 1000),
);
const timeToStart = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(timeToStart);