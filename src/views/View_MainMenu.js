// View_MainMenu.js
import React, {useEffect, useState} from 'react';
import Events from '../scripts/Events';
import { audioCfg } from "../config/audio-cfg";
import AudioPlayer from "../plugins/AudioPlayer/AudioPlayer";

import '../assets/style/main_menu.css';
import bgImg from '../assets/images/bg-pattern-sunburst.svg'
import {useNavigate} from "react-router-dom";

const View_MainMenu = () => {
    const navigate = useNavigate();
    const [isAudioPlayed, setIsAudioPlayed] = useState(false);

    useEffect(() => {
        console.log('in main-menu')
    }, [])

    const startGame = () => {
        navigate('/level-selection')
    };

    const handleUserInteraction = () => {
        if (!isAudioPlayed) {
            AudioPlayer.play(audioCfg.MAIN_MENU.BACKGROUND);
            setIsAudioPlayed(true);
        }
    };

    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{height: '100vh', backgroundColor: '#c39681'}}
                onClick={handleUserInteraction}
            >
                <img className="bg-pattern-1" src={bgImg} />
                <div className="text-center" style={{zIndex: 1}}>
                    <h1 className="" style={{fontSize: 70, color: 'white'}}>PixFormer</h1>
                    <button className="btn btn-primary btn-fancy mt-5" onClick={startGame}>Start Game</button>
                </div>
            </div>
        </>
    );
};

export default View_MainMenu;
