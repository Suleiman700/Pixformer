// View_MainMenu.js
import React, { useState } from 'react';
import Events from '../scripts/Events';
import { audioCfg } from "../config/audio-cfg";
import AudioPlayer from "../plugins/AudioPlayer/AudioPlayer";

import '../assets/style/main_menu.css';
import bgImg from '../assets/images/bg-pattern-sunburst.svg'

const View_MainMenu = () => {
    const [isAudioPlayed, setIsAudioPlayed] = useState(false);

    const startGame = () => {
        Events._EventBus.emit(Events._events.MAIN_MENU.START_GAME);
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
                    <button className="btn btn-primary btn-fancy mt-3" onClick={startGame}>Start Game</button>
                </div>
            </div>
        </>
    );
};

export default View_MainMenu;
