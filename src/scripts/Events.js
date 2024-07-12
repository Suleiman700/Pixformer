
import React from 'react';
import EventBus from '../plugins/EventBus/EventBus';
import {useNavigate, useNavigation} from "react-router-dom";
// import {routesCfg} from '../config/routes-cfg';

class Events {

    _EventBus = new EventBus();

    _events = {
        MAIN_MENU: {
            START_GAME: 'EV_BUS_MAIN_MENU_START_GAME'
        },
        LEVEL_SELECTION: {
            LEVEL_SELECTED: 'EV_BUS_LEVEL_SELECTION_LEVEL_SELECTED'
        },
        GAME: {
            LEVEL: {
                GOAL: {
                    REACH: 'EV_BUS_GAME_LEVEL_GOAL_REACH'
                },
            },
        }
    }

    constructor() {
    }
}

export default new Events();