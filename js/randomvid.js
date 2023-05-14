const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('s');

const videoSettings = '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&enablejsapi=1&amp;';
let video = new Array();

//higher
video.push({
    video_id: 'QGlOAj6HZbA',
    video_name: "Jaydes - Passive Aggression (prod. Silo)",
    id: 'QGlOAj6HZbA' + videoSettings + 'start=0',
    note: '[solo/no yungfazo]',
    volume: 35,
});
let randVid = songId && songId >= 0 && songId < video.length ? songId : Math.floor(video.length * Math.random());