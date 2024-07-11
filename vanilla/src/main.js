
import MainMenu from '../game/MainMenu.js';
import LevelSelect from '../game/LevelSelect.js';
import Events from '../game/Events.js';

const startGameButton = document.querySelector('#start_game');
startGameButton.addEventListener('click', () => {
    // Hide all sections
    MainMenu.hideSections();

    // Show level selection section
    MainMenu.showSection('level_select');

    // Build level select UI
    LevelSelect.buildUI();
});

