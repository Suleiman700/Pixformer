

import Events from '../scripts/Events';
import LevelSelection from "../scripts/LevelSelection";
import LevelCard from "../components/level-selection/level-card";

// import { routesCfg } from "../config/routes-cfg";

import '../assets/style/level-selection.css';
import background from '../assets/images/bg-pattern-sunburst.svg'
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import {useEffect, useState} from "react";

const View_LevelSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        // navigate(routesCfg.MAIN_MENU.path);
        navigate('/main-menu')
    }

    const onLevelPick = (_level) => {
        console.log(_level)
        // console.log(_level)
        navigate('/game', {
            state: {
                levelId: _level.id,
            }
        });
    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#c39681'}}>
                {/*<img className="bg-pattern-1" src={background}/>*/}
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                </div>

                <div className="col-sm-12">
                    <div className="">
                        <div className="">
                            <div className="text-center" style={{zIndex: 1}}>
                                <h1 className="" style={{fontSize: 70, color: 'white'}}>Level Selection</h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            {LevelSelection._levels.map((level, index) => (
                                <div className="col-sm-12 col-md-3 mt-3" key={index}>
                                    <LevelCard level={level} onClick={(e) => onLevelPick(e)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-primary mt-5" onClick={goBack}>Go Back</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default View_LevelSelection;

