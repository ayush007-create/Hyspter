let index=1;
const music = new Audio(`Music/${index}.mp3`);
// music.play();
let masterplay = document.getElementById('masterplay')
let  wave = document.getElementById('wave')
const songs = [
  {
    id: 5,
    songName:"2002",
    subtitle:"Annie Marie",
    poster:"img/2002.jpeg",
  },
  {
    id: 18,
    songName:"Namo Namo",
    subtitle:"Amit Trivedi",
    poster:"img/namonamo.jpeg",
  },
  {
    id: 4,
    songName:"Bones",
    subtitle:"Imaagine Dragons",
    poster:"img/bones.jpeg",
  },
  {
    id: 15,
    songName:"Illegal Weapon",
    subtitle:"Garry Sandhu",
    poster:"img/illegalweapon.jpeg",
  },
  {
    id: 6,
    songName:"Softly",
    subtitle:"Karan Aujla",
    poster:"img/softly.jpeg",
  },
  {
    id: 17,
    songName:"Shape Of You",
    subtitle:"Ed Sheeran",
    poster:"img/shape of you.jpeg",
  },
  {
    id: 10,
    songName:"Saiyyan",
    subtitle:"Vyom",
    poster:"img/saiyyan.jpeg",
  },
  {
    id: 9,
    songName:"The Nights",
    subtitle:"Avcii",
    poster:"img/thenights.jpeg",
  },
  {
    id: 8,
    songName:"Putt Jatt Da",
    subtitle:"Diljit Singh",
    poster:"img/puttjatda.jpeg",
  },
  {
    id: 19,
    songName:"Punja Daab",
    subtitle:"Parmish Verma",
    poster:"img/punjadaab.jpeg",
  },
  {
    id: 1,
    songName:"Marry On A Cross",
    subtitle:"Mukesh Ambani",
    poster:"img/marryonacross.jpeg",
  },
  {
    id: 16,
    songName:"Kaleshi Chori",
    subtitle:"DG Immortals",
    poster:"img/kaleshichori.jpeg",
  },
  {
    id: 12,
    songName:"Ex-Calling",
    subtitle:"Rohan Preet Singh",
    poster:"img/excalling.jpeg",
  },
  {
    id: 3,
    songName:"Closer",
    subtitle:"The Chainsmokers",
    poster:"img/closer.jpeg",
  },
  {
    id: 13,
    songName:"Dil Jhoom",
    subtitle:"Neha Kakkar",
    poster:"img/diljhoom.jpeg",
  },
  {
    id: 14,
    songName:"Dior",
    subtitle:"Shubh",
    poster:"img/dior.jpeg",
  },
  {
    id: 2,
    songName:"Faded",
    subtitle:"Alan Walker",
    poster:"img/faded.jpeg",
  },
  {
    id: 20,
    songName:"One Love",
    subtitle:"Shubh",
    poster:"img/onelove.jpeg",
  },
  {
    id: 7,
    songName:"Sone Diya Walliyan",
    subtitle:"Guri",
    poster:"img/sonediyawalliyan.jpeg",
  },
  {
    id: 11,
    songName:"Thaa",
    subtitle:"Varindra Brar",
    poster:"img/thaa.jpeg",
  }
];
const makeallbg = ()=>{
  Array.from(document.getElementsByClassName('songitem')).forEach((elu)=>{
    elu.style.background = 'rgb(105,105,105,.0)'
  })
}

let poster = document.getElementById('songplaying')
let songplayingname = document.getElementById('songplayingname')
let singer = document.getElementById('singer')
let download = document.getElementById('download')
Array.from(document.getElementsByClassName('butt')).forEach((e)=>{
  e.addEventListener('click',(el)=>{
     index = el.target.id
     music.src=`Music/${index}.mp3`;
     poster.src = `img/${index}.jpeg`;
     download.href = `Music/${index}.mp3`
     songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
        download.download=element.songName
      }
     })
     music.play();
     wave.classList.remove('active1')
     wave.classList.toggle('active1')
     masterplay.classList.remove('bi-play-fill')
     masterplay.classList.add('bi-pause-fill')
     makeallbg();
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
  })
})
let shuffle = document.getElementById('shuffle')
shuffle.addEventListener('click',()=>{
   const val = Math.floor(Math.random() * (20 - 1 + 1)) + 1
   index=val
   music.src=`Music/${index}.mp3`;
     poster.src = `img/${index}.jpeg`;
     download.href = `Music/${index}.mp3`
     songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
        download.download=element.songName
      }
     })
     music.play();
     wave.classList.remove('active1')
     wave.classList.toggle('active1')
     masterplay.classList.remove('bi-play-fill')
     masterplay.classList.add('bi-pause-fill')
     makeallbg();
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
})


console.log(wave)
const playsong = ()=>{
  if (music.paused || music.currentTime<=0) {
    music.play();
    wave.classList.toggle('active1')
    masterplay.classList.add('bi-pause-fill')
    masterplay.classList.remove('bi-play-fill')
  }
  else{
    music.pause();
    wave.classList.remove('active1')
    masterplay.classList.remove('bi-pause-fill')
    masterplay.classList.add('bi-play-fill')
  }
}
let starttime = document.getElementById('starttime')
let endtime = document.getElementById('endtime')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate',()=>{
  let curr_time = music.currentTime
  let music_dur = music.duration
  let min1 = Math.floor(music_dur / 60)
  let sec1 = Math.floor(music_dur % 60)
  if (sec1<10){
    sec1=`0${sec1}`
  }
  endtime.innerHTML = `${min1}:${sec1}`
  let min2= Math.floor(curr_time / 60)
  let sec2 = Math.floor(curr_time % 60)
  if (sec2<10){
    sec2=`0${sec2}`
  }
  starttime.innerHTML = `${min2}:${sec2}`
  let progressbar = parseInt((curr_time / music_dur) * 100)
  seek.value = progressbar
  // console.log(seek.value)
  let seekbar = seek.value
  bar2.style.width = `${seekbar}%`
  dot.style.left = `${seekbar}%`
  if(seekbar==100){
    index = parseInt(index)
    if(index<20){
      index=index+1
      music.src=`Music/${index}.mp3`;
      poster.src = `img/${index}.jpeg`;
      songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
        }
      })
      music.play();
      wave.classList.remove('active1')
      wave.classList.toggle('active1')
      masterplay.classList.remove('bi-play-fill')
      masterplay.classList.add('bi-pause-fill')
      makeallbg();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
    }
    else{
      music.src=`Music/${index}.mp3`;
      poster.src = `img/${index}.jpeg`;
      songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
        }
      })
      music.play();
      wave.classList.remove('active1')
      wave.classList.toggle('active1')
      masterplay.classList.remove('bi-play-fill')
      masterplay.classList.add('bi-pause-fill')
      makeallbg();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
    }
  }
})

seek.addEventListener('change',()=>{
  music.currentTime = seek.value * music.duration / 100
})
let volu = document.getElementById('volu')
let vola = document.getElementById('vola')
let volbar = document.getElementById('volbar')
let voldot = document.getElementsByClassName('voldot')[0]
vola.addEventListener('change',()=>{
  if(vola.value == 0){
    volu.classList.remove('bi-volume-up')
    volu.classList.add('bi-volume-mute')
  }
  if(vola.value>0){
    volu.classList.remove('bi-volume-mute')
    volu.classList.add('bi-volume-down')
  }
  if(vola.value == 100){
    volu.classList.remove('bi-volume-down')
    volu.classList.add('bi-volume-up')
  }
  let vol_a = vola.value
  volbar.style.width = `${vol_a}%`
  voldot.style.left = `${vol_a}%`
  music.volume = vol_a / 100
})
let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click',()=>{
  index=parseInt(index)
  if(index>1){
    index=index-1
     music.src=`Music/${index}.mp3`;
     poster.src = `img/${index}.jpeg`;
     songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
      }
     })
     music.play();
     wave.classList.remove('active1')
     wave.classList.toggle('active1')
     masterplay.classList.remove('bi-play-fill')
     masterplay.classList.add('bi-pause-fill')
     makeallbg();
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
  }
  else{
     music.src=`Music/${index}.mp3`;
     poster.src = `img/${index}.jpeg`;
     songs.forEach((element)=>{
      if(index == element.id){
        songplayingname.innerHTML=element.songName
        singer.innerHTML=element.subtitle
      }
     })
     music.play();
     wave.classList.remove('active1')
     wave.classList.toggle('active1')
     masterplay.classList.remove('bi-play-fill')
     masterplay.classList.add('bi-pause-fill')
     makeallbg();
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
  }
})
next.addEventListener('click',()=>{
  index=parseInt(index)
  if(index<20){
    index=index+1
    music.src=`Music/${index}.mp3`;
    poster.src = `img/${index}.jpeg`;
    songs.forEach((element)=>{
     if(index == element.id){
       songplayingname.innerHTML=element.songName
       singer.innerHTML=element.subtitle
     }
    })
    music.play();
    wave.classList.remove('active1')
    wave.classList.toggle('active1')
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')
    makeallbg();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
  }
  else{
    music.src=`Music/${index}.mp3`;
    poster.src = `img/${index}.jpeg`;
    songs.forEach((element)=>{
     if(index == element.id){
       songplayingname.innerHTML=element.songName
       singer.innerHTML=element.subtitle
     }
    })
    music.play();
    wave.classList.remove('active1')
    wave.classList.toggle('active1')
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')
    makeallbg();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgb(105,105,105,.1)"
  }
})
let left1 = document.getElementById('left1')
let right1 = document.getElementById('right1')
let sungs = document.getElementById('sungs')
right1.addEventListener('click',()=>{
  sungs.scrollLeft += 330
})
left1.addEventListener('click',()=>{
  sungs.scrollLeft -= 330
})
let left2 = document.getElementById('left2')
let right2 = document.getElementById('right2')
let artists = document.getElementsByClassName('artists')[0]
right2.addEventListener('click',()=>{
  artists.scrollLeft += 330
})
left2.addEventListener('click',()=>{
  artists.scrollLeft -= 330
})