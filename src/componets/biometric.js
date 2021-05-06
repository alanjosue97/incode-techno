import '../css/style_login.css'
import background from '../assets/background.svg';
import borders from '../assets/borders.svg';
import faceframe from '../assets/faceframe.svg';
import {useRef, useEffect} from 'react';


const constraints = window.constraints = {
    audio: false,
    video: true
  };
  

function BiometricFace(){

    const videoRef = useRef()
    useEffect(() => {
        async function setStream(){
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream
    } 
    setStream()
    }, [])

    return (
        <div>               
            <BordersTxt/>
            <Backgroud>
                <video className="video" autoPlay ref={videoRef}/>
            </Backgroud>
            <BordersLoading/>          
            <FaceFrame/>
        </div>
    )
      
}

function BordersTxt(){
    return(
        <div className="txt-loading">
            <h1>Look at the camera</h1>
        </div>
    )
}

function Backgroud({children}){
    return(
        <div>
            {children}
            <img src={background} className="camera-background" alt="background"/>
            
        </div>
    )
}
function BordersLoading(){
    return(
        <div>
         <img src={borders} className="border-loading" alt="loading-borders"/>
        
        </div>
    )
}

function FaceFrame(){
    return(
        <img src={faceframe} className="face-frame" altr="face-frame"/>
    )
}

export default BiometricFace;