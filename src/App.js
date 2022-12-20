import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage/FrontPage';
import { Fragment, useEffect, useState } from 'react';
import CaverPage from './Components/CaverPage/CaverPage';
// import CaverServise from './Components/API/CaverService';
import AxiosService from './Components/API/AxiosService'
import { useFetching } from './Components/Hooks/useFetchig'
import SingleOne from './Components/SingleOne/SingleOne';

import Papa from "papaparse";
import SheetServce from './Components/API/SheetServce';

function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [songs, setSongs] = useState([]);
  const [data, setData] = useState({});
  const [songErrors, setSongError] = useState('');
  const [fetchSongs, isSongsLoading, songError] = useFetching(async () => {
    const response = await AxiosService.getCavers();
    setSongs(response.record.cavers)
  });

  useEffect(() => {
    fetchSongs()

  }, [])


  // const urlParse =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxL55RFLI0kryFFe90U2qnDF80CCmSyRhcZuRSlSKcMwfpjlNuf9lCUHhrpk8z09P3CtebSTaUvS7f/pub?output=csv";

  // async function fetchSongs () {
  //  const results = await SheetServce.getCavers();

  //  setData(results.data)
  // }
  // useEffect(() => {
  //   fetchSongs()

  // }, [])
  // useEffect (() => {
  //   if (!data) return
  //   Papa.parse(urlParse,
  //      {
  //       download: true,
  //       header: true,
  //       complete: (results) => {
  //         setData(results.data)
  //       },
  //       skipEmptyLines: true,
  //       error: (error) => {
  //         console.error(error);
  //         setSongError(error)
  //     }
  //     })
  //     }, [])

  if (songs.length === 0)
    return <p>.....</p>;

  console.log("songs", songs)
  const tributes = Array.from(songs);
  // console.log("songError", songError)
  console.log("tributes ", tributes)
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/cavers" element={<CaverPage songs={songs} songError={songError} />} />
          {/* <Route path="/cavers" element={<Cavers isSongsLoading = {isSongsLoading} songs = {songs}/>} /> */}

          <Route path='/cavers/:id' element={<SingleOne songs={songs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>

    </Fragment>


  );
}

export default App;
