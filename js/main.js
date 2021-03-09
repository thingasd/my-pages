window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
}

$('#run').click(()=>{
    let id = $('#link').val().split('https://youtu.be').pop();
    $('api_iframe').src = `https://www.yt-download.org/api/button/mp3/${id}`;
})