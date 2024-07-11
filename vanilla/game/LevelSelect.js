import Level_1 from '../levels/Level_1.js';

import EventBus from '../src/plugins/EventBus/EventBus.js';

class LevelSelect {

    _levels = [
        {
            instance: new Level_1(),
            name: 'Level 1'
        },
        {
            instance: new Level_1(),
            name: 'Level 2'
        },
        {
            instance: new Level_1(),
            name: 'Level 3'
        },
        {
            instance: new Level_1(),
            name: 'Level 4'
        },
        {
            instance: new Level_1(),
            name: 'Level 5'
        },
        {
            instance: new Level_1(),
            name: 'Level 6'
        },
    ];

    _config = {
        Events: {
            LEVEL_SELECTION: `${this.constructor.name}_LEVEL_SELECTION`
        },
    };

    _storage = {
        EventBus: new EventBus(),
    };

    constructor() {}

    /**
     * Build the level select UI
     * @return {void}
     */
    buildUI() {
        const div = document.createElement('div');

        this._levels.map(level => {
            const card = document.createElement('div');
            card.classList.add('col-sm-4');

            card.innerHTML = `
                <div class="feedbackform_slide__inner">
                    <div class="character poptwo">
                        <div class="character_image">
                            <img src="./assets/imgs/monkey.svg">
                        </div>
                        <div class="character_smile">
                            <div class="smiler_input">
                                <input class="monkey" max="20" min="0" type="range">
                                <svg class="smile monkey" height="20px" version="1.1" width="70px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10 C 20 10, 40 10, 50 10" fill="transparent" stroke-linecap="round" stroke-width="4" stroke="#562911"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="rating monkey popthree">
                        <span>${level.name}</span>
                        <img class="next popfour" src="./assets/imgs/button-next.png">
                    </div>
                </div>

                <div class="card m-3" hidden>
                    <div class="card-body text-center">
                        <h5 class="card-title">${level.name}</h5>
                        <button class="btn btn-primary mt-3">Play</button>
                    </div>
                </div>
            `;

            // Add event listener
            card.querySelector('.next').addEventListener('click', () => {
                // Emit event
                this._storage.EventBus.emit(this._config.Events.LEVEL_SELECTION, level);
            })

            document.querySelector('#level_cards').appendChild(card);
        })
    }
}

export default new LevelSelect();