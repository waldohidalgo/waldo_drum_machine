export function playAudio(audioTag) {
  if (audioTag) {
    audioTag.currentTime = 0;
    var playPromise = audioTag.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
