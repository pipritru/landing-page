const video = document.getElementById('murilloVideo');
  const button = document.getElementById('playBtn');

  button.addEventListener('click', () => {
    video.play();
    button.style.display = 'none';
  });

  // Si quieres que el botón reaparezca al final del video
  video.addEventListener('ended', () => {
    button.style.display = 'block';
  });