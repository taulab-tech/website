document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('intro-video');
    var bannerLogo = document.getElementById('banner-logo');
    var rethinkText = document.querySelector('#banner-text-container p:first-child');
    var redfineText = document.querySelector('#banner-text-container p:last-child');
    var textContainer = document.getElementById('banner-text-container');

    video.addEventListener('play', function() {
        video.play();
        bannerLogo.classList.add('hide');

        setTimeout(function() {
            textContainer.style.visibility = 'visible';
            rethinkText.style.visibility = 'visible';
        }, 4000);

        setTimeout(function() {
            rethinkText.classList.add('rethink');
        }, 4500);

        setTimeout(function() {
            rethinkText.classList.add('strike-through');
        }, 8000);

        setTimeout(function() {
            rethinkText.classList.add('fade-out');
            redfineText.classList.add('redefine');
        }, 11000);
    });

    video.addEventListener('ended', function() {
        console.log('Video ended');
        video.classList.add('hide');
    });
});