const button = document.getElementById('playButton');
const audio = document.getElementById('audio');
let isPlaying = false;

button.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    button.textContent = '🎵 ▶️';
  } else {
    audio.play();
    button.textContent = '🎵 ⏸️';
  }
  isPlaying = !isPlaying;
});
