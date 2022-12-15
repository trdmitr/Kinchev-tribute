import classes from './FrontPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import Img from '../Img'

const FrontPage = () => {
    const navigate = useNavigate();
  const imgUrl = "https://sun9-51.userapi.com/impg/hMWo0MPYuPRLLssF8H-oPn6IMnvVbCiMH79cvA/5eLbq9Jv-FM.jpg?size=480x374&quality=96&sign=adf0eff84408a3a606fa131ec1a7265d&type=album";
  const imgAlt = "Каверы Подземки";
  const imgHeader = "https://sun9-84.userapi.com/impg/2RxpmzSpxcdTd0Y9dF0Hv7iNEuH4FGtDZMMGYw/yQhigXEhw2E.jpg?size=359x174&quality=96&sign=554e1fc3819ed0447ed0f1e422a2c963&type=album";

return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className={classes.front_header}>
        <img src={imgHeader} width={150} alt="Каверы Подземки" />
                    {/* <p>🖤❤АлиСа❤🖤</p> */}
                </div>
                <div className={classes.front_media}>
                  <Img imgUrl = {imgUrl} imgAlt={imgAlt}/>
                    {/* <img src={https://sun9-65.userapi.com/impg/KEztqlAIl7Eo1ujw-5FAGdaeqx6kXlY6MRmUzQ/pDsk-BjphL8.jpg?size=538x368&quality=96&sign=a6b5f5c797e61f4d93b5ec2400d156f9&type=album} width={80} alt="Каверы Подземки" /> */}
                </div>
                <div className={classes.front_body}>
                    <span>Навет — не помеха, покуда есть Вера! Стена — не преграда для тех, кто в пути. И окрик — не сила, и выстрел — не мера, Когда тебе солнце шепнуло: "Лети! </span>
                </div>
      </div>
    </div>
  )
}
  export default FrontPage