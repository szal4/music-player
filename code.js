const music=document.querySelector("audio");
  const img=document.querySelector("img");
  const play=document.getElementById('play');
  const artist = document.getElementById('artist');
  const title = document.getElementById('title');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  const songs=[{
    name:"s1",
    title:"Kul official",
    artist:"ayon"
  },
  {
      name: "s2",
      title: "let me love you",
      artist: "justin"
    },
    {
      name: "s3",
      title: "Lotus lane",
      artist: "davein"
    },
    {
      name: "s4",
      title: "rockstar",
      artist: "hassal"
    },
]

  let isPlaying=false;
 //for play featur
  function playMusic(){
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
  };
  //for pause feature
   function pauseMusic(){
      isPlaying = false;
      music.pause();
      play.classList.replace('fa-pause', 'fa-play');
      img.classList.remove("anime");
    };

    play.addEventListener('click',function (){ 
      isPlaying ? pauseMusic() : playMusic();
    });
   
   function loadSong(songs){
      title.textContent=songs.title;
      artist.textContent=songs.artist;
      music.src ="./song/"+songs.name+".mp3";
      img.src= "./img/"+songs.name+".jpg";
   }
    
   songIndex = 0;
  function nextSong(){
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
  }
  function prevSong(){
    songIndex--;
    if(songIndex<0){
      songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);
    playMusic();
  }
  next.addEventListener('click', nextSong);
  prev.addEventListener('click', prevSong);