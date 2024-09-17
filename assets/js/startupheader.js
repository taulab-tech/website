window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const video = document.getElementById('intro-video');
    const videoRect = video.getBoundingClientRect();

    if (videoRect.top <= 0 && videoRect.bottom >- 0) {
        header.classList.remove('secondary-color');
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
        header.classList.add('secondary-color');
    }
});