document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('main-video');
    var banner = document.getElementById('banner');

    // Play video on start
    video.addEventListener('play', function() {
        video.play();
    });

    // Show banner and hide video when video ends
    video.addEventListener('ended', function() {
        console.log('Video ended'); // Debugging line
        video.classList.add('hidden'); // Hide the video
        banner.classList.add('show'); // Show the banner
    });
});
