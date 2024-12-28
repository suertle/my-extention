setTimeout(() => {
    videoElement = document.querySelector('video[title="Advertisement"]');

    videoElement.addEventListener("loadedmetadata", () => {
        videoElement.currentTime = videoElement.duration;
    });
}, 3000);
