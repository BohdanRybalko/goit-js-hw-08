import Player from '@vimeo/player';

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  _.throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
