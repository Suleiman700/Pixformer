
import ClarityEngine from "../scripts/ClarityEngine";
// import Events from '../scripts/Events';

import Level_1 from "../levels/Level_1.js";

// import { routesCfg } from "../config/routes-cfg";
// import background from '../assets/images/bg-pattern-sunburst.svg'

import '../assets/style/level-selection.css';
import {useLocation, useNavigate, useNavigation, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import LevelSelection from "../scripts/LevelSelection";

const View_Game = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hasRendered = useRef(false); // Create a ref to track logging


    // Events._EventBus.on(Events._events.GAME.LEVEL.GOAL.REACH, () => {
    //     console.log('here')
    //     Events._EventBus.off(Events._events.GAME.LEVEL.GOAL.REACH)
    // })




    const goBackClick = () => {
        navigate('/level-selection');
    }

    useEffect(() => {
        if (!hasRendered.current) {
            console.log("loaded");

            const levelId = location.state.levelId;

            // Get level data
            const levelCfg = LevelSelection._levels.find(level => {
                return level.id === parseInt(levelId); // Use strict equality and parse levelId as an integer
            });

            const Engine = new ClarityEngine();

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = levelCfg.data.canvas.width;
            canvas.height = levelCfg.data.canvas.height;

            Engine.set_viewport(canvas.width, canvas.height);
            Engine.load_map(levelCfg.data);

            Engine.limit_viewport = true;

            const Loop = () => {

                ctx.fillStyle = '#333';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                Engine.update();
                Engine.draw(ctx);

                window.requestAnimFrame(Loop);
            };

            Loop();

            hasRendered.current = true;
        }
    });

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#c39681'}}>
                {/*<img className="bg-pattern-1" src={background} />*/}
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                    <div className="col-sm-12 text-center">
                        <canvas id="canvas"></canvas>
                    </div>
                </div>
                <button className="btn btn-primary m-5" onClick={goBackClick}>Go Back</button>
            </div>
        </>
    );
};

export default View_Game;

