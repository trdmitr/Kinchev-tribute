import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage/FrontPage';
import { Fragment, useEffect, useState } from 'react';
import CaverPage from './Components/CaverPage/CaverPage';
// import CaverServise from './Components/API/CaverService';
import AxiosService from './Components/API/AxiosService'
import {useFetching} from './Components/Hooks/useFetchig'
import SingleOne from './Components/SingleOne/SingleOne';
import Papa from "papaparse";

function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

function App() {
  const [songs, setSongs] = useState([]);
  const [data, setData] = useState({});
  const [songError, setSongError] = useState('');
  // const [fetchSongs, isSongsLoading, songError ] = useFetching (async () => {
  //   const response = await AxiosService.getCavers();
  //   setSongs(response.record.cavers)
  // });

// useEffect(() => {
//   fetchSongs()


  const urlParse =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxL55RFLI0kryFFe90U2qnDF80CCmSyRhcZuRSlSKcMwfpjlNuf9lCUHhrpk8z09P3CtebSTaUvS7f/pub?output=csv";

// }, [])

useEffect (() => {
  if (!data) return
  Papa.parse(urlParse,
     {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data)
      },
      skipEmptyLines: true,
      error: (error) => {
        console.error(error);
        setSongError(error)
    }
    })
    }, [])
    const tributes = Array.from(data);
    // console.log("songError", songError)
    // console.log("tributes ", tributes)
       return (
       <Fragment>
        <HashRouter>
           <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/cavers" element={<CaverPage songs = {tributes} songError = {songError}/>} />
          {/* <Route path="/cavers" element={<Cavers isSongsLoading = {isSongsLoading} songs = {songs}/>} /> */}
          
          <Route path='/cavers/:id' element={<SingleOne songs = {tributes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
      
    </Fragment>
     
   
  );
}

export default App;
