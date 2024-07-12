

// import Events from '../scripts/Events';
// import LevelSelection from "../scripts/LevelSelection";
// import LevelCard from "../components/level-selection/level-card";
// import { routesCfg } from "../config/routes-cfg";
// import '../assets/style/level-selection.css';
// import buttonNextImg from '../assets/images/button-next.png';
// import nextBtnPic from "../assets/images/button-next.png";

import background from '../assets/images/bg-pattern-1.svg'
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import {useEffect, useState} from "react";
import { levelsCfg } from "../config/levels-cfg";

const View_LevelSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        // navigate(routesCfg.MAIN_MENU.path);
        navigate('/main-menu')
    }

    const onLevelPick = (_level) => {
        navigate('/game', {
            state: {
                levelId: _level.id,
            }
        });
    }

    useEffect(() => {
    }, [])


        return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#c39681'}}>
                <img className="bg-pattern-1" src={background}/>
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                </div>

                <div className="col-sm-12">
                    <div className="">
                        <div className="">
                            <div className="text-center" style={{zIndex: 1}}>
                                <h1 className="" style={{fontSize: 70, color: 'white'}}>Level Selection</h1>
                            </div>
                        </div>
                        {/*<div className="row mt-3">*/}
                        <div className="d-flex justify-content-center mt-5">
                            {levelsCfg.map((level, index) => (
                                <div className="" key={index}>
                                    <button className="btn btn-primary btn-fancy mx-3" onClick={(e) => onLevelPick(level)}>{level.name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 text-center mt-5">
                        <button className="btn btn-secondary btn-fancy mt-5" style={{fontSize: 14}} onClick={goBack}>Go Back</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default View_LevelSelection;

