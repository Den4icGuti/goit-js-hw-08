 import Player from '@vimeo/player';

const iframeRef = document.querySelector('iframe');

const player = new Vimeo.Player(iframeRef);

iframeRef.addEventListener('play',onVideoStart)

player.on('play', function () {
  console.log('Video play!')
});

player.getVideoTitle().then(function(time) {
  console.log('title:', time);
  localStorage.setItem('current-time',JSON.stringify(time))
    });

const toStart = JSON.parse(localStorage.getItem('current-time'));
console.log(toStart);
player.getVideoTitle(toStart);

function onVideoStart(toStart) { 
   console.log(toStart);
}