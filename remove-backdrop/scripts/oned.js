console.log('start extention');

setTimeout(() => {
    videoElement = document.querySelector('video[title="Advertisement"]');

    videoElement.addEventListener("loadedmetadata", () => {
        videoElement.currentTime = videoElement.duration - 0.5;
    });
}, 3000);

console.log(videoElement);
