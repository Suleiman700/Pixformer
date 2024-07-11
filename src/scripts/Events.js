
import React from 'react';
import EventBus from '../plugins/EventBus/EventBus';
import {useNavigate, useNavigation} from "react-router-dom";
import {routesCfg} from '../config/routes-cfg';

class Events {

    _EventBus = new EventBus();

    _events = {
        MAIN_MENU: {
            START_GAME: 'EV_BUS_MAIN_MENU_START_GAME'
        },
        LEVEL_SELECTION: {
            LEVEL_SELECTED: 'EV_BUS_LEVEL_SELECTION_LEVEL_SELECTED'
        }
    }

    constructor() {
        this.listenEvents_MAIN_MENU();
    }

    /**
     * Listen for events in the main menu
     * @return {void}
     */
    listenEvents_MAIN_MENU() {
        this._EventBus.on(this._events.MAIN_MENU.START_GAME, () => {
            window.location.href = routesCfg.LEVEL_SELECTION.path;
        });
    }
}

export default new Events();