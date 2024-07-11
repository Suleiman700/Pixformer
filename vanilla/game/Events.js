
import EventBus from '../src/plugins/EventBus/EventBus.js';
import LevelSelect from './LevelSelect.js';

class Events {
    _EventBus = new EventBus();

    constructor() {
        this.listen()
    }

    listen() {
        this._EventBus.on(LevelSelect._config.Events.LEVEL_SELECTION, (_level) => {
            console.log('here')
        });
    }
}

export default new Events();