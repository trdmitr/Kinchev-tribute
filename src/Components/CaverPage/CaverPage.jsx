import React, { useState } from 'react'
import classes from './CaverPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import PlayButton from '../UI/Buttons/PlayButton'
import Modal from '../UI/Buttons/Modals/Modals'
// import Loader from '../UI/Loader/Loader'
import About from '../About'
// import Img from '../Img'
import Player from '../PlayList/Player'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Gocavers from './Gocavers'

const CaverPage = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 60 * 1000, // 60 минут
                cacheTime: 1000 * 60 * 60 * 24 // 24 часа
            },
        },
    })
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    // const singContent = useMemo(() => {
    //     return songs.map((caver) => (
    //         <div className={classes.col} key={caver.id.toString()} onClick={() => navigate(`/cavers/${caver.id}`)}>
    //            <div className={classes.item}>
    //                 {/* <img src={caver.photo} alt={caver.name} /> */}
    //                 <Img imgUrl={caver.photo} imgAlt={caver.name} />
    //             </div>
    //             <p>{caver.name}</p>
    //         </div>
    //     ))
    // }, [songs])
    return (
        <QueryClientProvider client={queryClient}>
        <div className={cl.tribute_app}>
            <div className={classes.content}>
                <Modal visible={modal} setVisible={setModal}>
                    <About />
                </Modal>
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
                <PlayButton onClick={() => setModal(true)}>📌</PlayButton>
                {/* <PlayButton onClick={() => navigate("/playlist")}></PlayButton> */}
                <div className={classes.row} >
                    {/* {songError &&
                        <h1 style={{ backgroundColor: "white" }}> Ошибка загрузки!</h1>
                    } */}
                    {/* {singContent} */}
                    <Gocavers/>
                    <a className={classes.linkTo} href="https://trdmitr.github.io/alltributes/#/" target="_blank" rel="noopener noreferrer"> Все трибьюты </a>
                </div><Player/>
            </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default CaverPage