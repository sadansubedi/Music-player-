const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist =document.getElementById('artist');
const title = document.getElementById('title');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

let songs =[
    {
        songname: 'music_Faded',
        title: 'music_Faded',
        artist:'Faded',
    },
    {
        songname: 'music_fallingdown',
        title: 'fallingdown',
        artist:'Sadan',
    },
    {
        songname: 'music_Rather Be',
        title: 'Rather Be',
        artist:'Rather',
    },
    {
        songname: 'music_Stay',
        title: 'Stay',
        artist:'None',
    },
]
let isplaying = false;

// play music 
function playmusic(){
    isplaying =true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
};

// pause music
function pauseMusic(){
    isplaying= false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
};

play.addEventListener('click',function(){
    if(isplaying){
        pauseMusic();
    }else{
        playmusic();
    }
    // instead we can use   ternary operator synatax :--> condition ? exprIfTrue : exprIfFalse
   // isplaying ? pauseMusic() :playmusic();
});
function loadSong(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.songname + ".mp3";
    img.src = "pictures/" + songs.songname +".jpg";
} 

//loadSong(songs[3]);
songindex =0;
function nextsong(){
    songindex = (songindex + 1) %songs.length;
    loadSong(songs[songindex]);
    playmusic();
}

function prevsong(){
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadSong(songs[songindex]);
    playmusic();
}

next.addEventListener('click',nextsong);
previous.addEventListener('click',prevsong);




