
import View_MainMenu from '../views/View_MainMenu';
import View_LevelSelection from '../views/View_LevelSelection';

export const routesCfg = {
    MAIN_MENU: {
        path: '/main-menu',
        view: <View_MainMenu />,
    },
    LEVEL_SELECTION: {
        path: '/level-selection',
        view: <View_LevelSelection />,
    },
};