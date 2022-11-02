import {React} from 'react'
import { useSelector } from 'react-redux'
import { Header,ImgContent} from '../com'
import {img6,img1,img2,img3,img4,img5} from "../img"

const Main = () => {
    let login = useSelector(state=>state.LoginReducer)
  return (
    <div>
        <Header/>
        <div className='main'>
            <h1 className='title'>
                Hello , {login.login ? login.nickname : "Anonymous"}
            </h1>
            <p>
                Let it go,let it go Can't hold it back anymore Let it go, let it go Turn away and slam the door
                I don't care what they're going to say Let the storm rage on The cold never botheared me anyway
            </p>
        </div>
        <div className='body'>
            <div className='bodyContent'>
                <div className='content'>
                    <div className='first'>
                        <ImgContent img={img1} path="/img/1" title="TEST1"/>
                        <ImgContent img={img2} path="/img/2" title="TEST2"/>
                        <ImgContent img={img3} path="/img/3" title="TEST3"/>
                    </div>
                    <div className='first'>
                        <ImgContent img={img4} path="/img/4" title="TEST4"/>
                        <ImgContent img={img5} path="/img/5" title="TEST5"/>
                        <ImgContent img={img6} path="/img/6" title="TEST6"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main