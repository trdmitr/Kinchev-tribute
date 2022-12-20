import React, { useEffect } from 'react'
import { useState} from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from 'axios'
import {
    QueryClient,
    QueryClientProvider,
    useQuery
}  from '@tanstack/react-query'
// const queryClient = new QueryClient();
const Player = ({songs}) => {
    const [data, setData] = useState({});
    const fetchPost =  async () => {
    
    const url = `https://api.jsonbin.io/v3/b/639c448d01a72b59f2321459`;
    const config = {
      headers: {
          'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
      }
    }
    const res = await fetch(url, config);
        const result = res.json();
        console.log(result);
        return await result;
    
    // setData(response.data.record.cavers)
    // return response.data.record;

  } 
  
  const query = useQuery(['639c448d01a72b59f2321459'], fetchPost, {staleTime: 60000}, {cacheTime: 1000 * 60 * 60}, {refetchOnWindowFocus: false}, {enabled: false}, {retry: 10});
  console.log("query.data", query)
//   const cavers = Array.from(songs);

  
    const audiosongs1 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src= song.audio1;
         container.aud_name = song.audio_name1;
        return container;
    }
    )
    const audiosongs2 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio2;
         container.aud_name = song.audio_name2;
        return container;
    }
    )
    const audiosongs3 = songs.map((song) => {
        const container = {};
         container.name = song.name;
         container.src = song.audio3;
         container.aud_name = song.audio_name3;
        return container;
    }
    )    
    const audioList =  [...audiosongs1, ...audiosongs2, ...audiosongs3]
  .filter(e => e.src !== '');
 console.log('audioList ',  audioList);

// const [loaded, setLoaded] = useState(false)

//  useEffect(() => {
//     localStorage.setItem("audioList", JSON.stringify(audioList))

//   }, [audioList]);
//   const [mp3, setMp3] = useState({});
//  useEffect(() => {
//     if (loaded) return ;
//     setMp3(
//         JSON.parse(localStorage.getItem("audioList"))
//     ) 
//     setLoaded(true)
//   },[loaded]);
//    console.log("mp3", mp3)
  
  
// const mapUsersByFields = (fields) => songs.map(u1 => fields.reduce((u2, f1) => {
//     u2[f1] = u1[f1];
//     return u2;
// }, {}));

// const aud1 = mapUsersByFields(["name", "audio1"].filter(e => e.audio1 !== ""));
// const aud2 = mapUsersByFields(["name", "audio2"].filter(e => e.audio2 !== ''));
// const aud3 = mapUsersByFields(["name", "audio3"].filter(e => e.audio3 !== ''));

// function mapSongsFields(fields) {
//     let isActiveUsers = [];
//     for (let fromUser of songs) {
//         let song = {};
//         for (let field of fields)
//             song[field] = fromUser[field];
//         isActiveUsers.push(song);
//     }
//     return isActiveUsers;
// }
// const aud4 = mapSongsFields(["name", "audio1"]);
// const aud5 = mapSongsFields(["name", "audio2"]);
// const aud6 = mapSongsFields(["name", "audio3"]);
//  const musicTracks2 = [...aud4, ...aud5, ...aud6].filter(e => e.audio1 !== "" && e.audio2 !== '' && e.audio3 !== '' );
//   console.log ("musicTracks2" , musicTracks2)

  const musicTracks = [
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1g9CMdR2ZVnYsyHYpN8jkt2Ax0hYDVsn0",
        "aud_name": "Беспечный русский бродяга"
    },
    {
        "name": "Серж Левинс",
        "src": "https://drive.google.com/uc?export=download&id=12d_H0sN7jps6JzP4XPyxRVAn7_LxflIE",
        "aud_name": "Брод"
    },
    {
        "name": "Николай Зайцев",
        "src": "https://drive.google.com/uc?export=download&id=1b9gYg5fTJ4_tRIEmrT0tJkUICkL4GydF",
        "aud_name": "Поезд в огне"
    },
    {
        "name": "Василий Рыжкин",
        "src": " https://drive.google.com/uc?export=download&id=1ch5Z5wnqIYfBNh6RKEIXvurd2-t4V2ZF",
        "aud_name": "Стаканы"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=1OUnunZbwiW2mBB5CCyAfAXEee-lblxs7",
        "aud_name": "Eсли я уйду"
    },
    {
        "name": "Shp1onkA",
        "src": "https://drive.google.com/uc?export=download&id=1DCuuJY3wbumMIuYlM6XmrgBuH5pUxjx3",
        "aud_name": "Не было такой"
    },
    {
        "name": "Жанат Акбулатов",
        "src": "https://drive.google.com/uc?export=download&id=11FVHULIRG4GNrTfmT_GU_Rf8hBaJHFTv",
        "aud_name": "Лошадь белая"
    },
    {
        "name": "Константин Рубан",
        "src": " https://drive.google.com/uc?export=download&id=1jH4ryyWnbGkXq5LYFVVefKSxLMaOJsW2",
        "aud_name": "Город золотой"
    },
    {
        "name": "Алексей Недостоев",
        "src": "https://drive.google.com/uc?export=download&id=1lMizAPyFwKxz77hs3N8ZesEQp6INz_nn",
        "aud_name": "Время луны"
    },
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1s2HYUfbgANCE9dIkY-f_LkqqQN1CdYrM",
        "aud_name": "Брат Никотин"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=1XEps5GAWfY4gggtzyoiOkpS7hErwhyaD",
        "aud_name": "Праздник урожая"
    },
    {
        "name": "Константин Рубан",
        "src": "https://drive.google.com/uc?export=download&id=1texscNBD7A4nDDH7BuKrzD84-reUhLv6",
        "aud_name": "Железнодорожная вода"
    },
    {
        "name": "Виталий Подземный",
        "src": "https://drive.google.com/uc?export=download&id=1QCbIYuRpmhYyiucHNvfO-lk7dx_NL1jz",
        "aud_name": "Некоторые женятся"
    },
    {
        "name": "Юрий Молчанов",
        "src": "https://drive.google.com/uc?export=download&id=13fguTy53DlxDOY5BG1-LNVDWDohKUEcc",
        "aud_name": "Прекрасный дилетант"
    }
]
// console.log("musicTracks ", musicTracks)


const [trackIndex, setTrackIndex] = useState(0);
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
          currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
      };
      const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
          currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
      };
  return (
   
    <div className= {classes.player}>
    <h1>Нонстоп Трибьюта!</h1>
    <AudioPlayer className={classes.rap_container}
      // style={{ width: "300px" }}
      style={{ borderRadius: "1rem" }}
      // autoPlay
      // layout="horizontal"
      src={musicTracks[trackIndex].src}
      // onPlay={(e) => console.log("onPlay")}
      showSkipControls={true}
      showJumpControls={false}
      header={`Сейчас играет: ${musicTracks[trackIndex].name}`}
      footer= {`${musicTracks[trackIndex].aud_name}`}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      // other props here
    />
  </div>
  )
}

export default Player