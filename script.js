const audioFile = document.getElementById('audio-file');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
  if (audioFile.paused) {
    audioFile.play();
    playBtn.textContent = '⏸'; // Changer l'icône en pause
  } else {
    audioFile.pause();
    playBtn.textContent = '▶'; // Changer l'icône en lecture
  }
});