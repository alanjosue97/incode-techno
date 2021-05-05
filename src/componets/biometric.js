import "../App.css";
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
            <h1>Finde Identities</h1>
            <Backgroud/>
            <BordersLoading/>
            <video className="video" autoPlay ref={videoRef}/>
            <Borders/>
            <FaceFrame/>
        </div>
    )
      
}

function Borders({children}){
    return(
        <div>
            <h1>LookCAMERA</h1>
            {children}
        </div>
    )
}

function Backgroud(){
    return(
        <div>
            <img src={background} className="camera-background" alt="background"></img>
        </div>
    )
}
function BordersLoading(){
    return(
        <img src={borders} className="border-loading" alt="loading-borders"></img>
    )
}

function FaceFrame(){
    return(
        <img src={faceframe} className="face-frame" altr="face-frame"></img>
    )
}

export default BiometricFace;