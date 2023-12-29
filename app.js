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
    poster:"img/5.jpeg",
  },
  {
    id: 18,
    songName:"Namo Namo",
    subtitle:"Amit Trivedi",
    poster:"img/18.jpeg",
  },
  {
    id: 4,
    songName:"Bones",
    subtitle:"Imaagine Dragons",
    poster:"img/4.jpeg",
  },
  {
    id: 15,
    songName:"Illegal Weapon",
    subtitle:"Garry Sandhu",
    poster:"img/15.jpeg",
  },
  {
    id: 6,
    songName:"Softly",
    subtitle:"Karan Aujla",
    poster:"img/6.jpeg",
  },
  {
    id: 17,
    songName:"Shape Of You",
    subtitle:"Ed Sheeran",
    poster:"img/17.jpeg",
  },
  {
    id: 10,
    songName:"Saiyyan",
    subtitle:"Vyom",
    poster:"img/10.jpeg",
  },
  {
    id: 9,
    songName:"The Nights",
    subtitle:"Avcii",
    poster:"img/9.jpeg",
  },
  {
    id: 8,
    songName:"Putt Jatt Da",
    subtitle:"Diljit Singh",
    poster:"img/8.jpeg",
  },
  {
    id: 19,
    songName:"Punja Daab",
    subtitle:"Parmish Verma",
    poster:"img/19.jpeg",
  },
  {
    id: 1,
    songName:"Marry On A Cross",
    subtitle:"Mukesh Ambani",
    poster:"img/1.jpeg",
  },
  {
    id: 16,
    songName:"Kaleshi Chori",
    subtitle:"DG Immortals",
    poster:"img/16.jpeg",
  },
  {
    id: 12,
    songName:"Ex-Calling",
    subtitle:"Rohan Preet Singh",
    poster:"img/12.jpeg",
  },
  {
    id: 3,
    songName:"Closer",
    subtitle:"The Chainsmokers",
    poster:"img/3.jpeg",
  },
  {
    id: 13,
    songName:"Dil Jhoom",
    subtitle:"Neha Kakkar",
    poster:"img/13.jpeg",
  },
  {
    id: 14,
    songName:"Dior",
    subtitle:"Shubh",
    poster:"img/14.jpeg",
  },
  {
    id: 2,
    songName:"Faded",
    subtitle:"Alan Walker",
    poster:"img/2.jpeg",
  },
  {
    id: 20,
    songName:"One Love",
    subtitle:"Shubh",
    poster:"img/20.jpeg",
  },
  {
    id: 7,
    songName:"Sone Diya Walliyan",
    subtitle:"Guri",
    poster:"img/7.jpeg",
  },
  {
    id: 11,
    songName:"Thaa",
    subtitle:"Varindra Brar",
    poster:"img/11.jpeg",
  }
];
let search_results = document.getElementsByClassName('search_box')[0];
songs.forEach((element)=>{
  let card = document.createElement('a');
  card.classList.add('card');
  card.innerHTML=`
    <img src=${element.poster} alt="">
    <div class="content">
        ${element.songName}
        <div class="subtitle">
            ${element.subtitle}
        </div>
    </div>
    <i class="butt bi bi-play-circle-fill" id=${element.id}></i>
  `
  search_results.appendChild(card)
})
let input = document.getElementById('searchbar');
input.addEventListener('keyup',()=>{
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName('a');
  let playbut = search_results.getElementsByTagName('i');

  for (let i = 0; i < items.length; i++) {
    let as = items[i].getElementsByClassName('content')[0];
    let text_value = as.textContent || as.innerHTML;
    if(text_value.toUpperCase().indexOf(input_value)>-1){
      console.log(true)
      items[i].style.display = "flex";
    }
    else{
      items[i].style.display = "none";
    }
    if(input_value == 0){
      items[i].style.display = "none";
    }
  }
  for (let i = 0; i < playbut.length; i++) {
    playbut[i].addEventListener('click',(el)=>{
      index = el.target.id;
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
  }

})
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