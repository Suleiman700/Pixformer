import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// import { routesCfg } from './config/routes-cfg';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/buttons.css'

import App from './App';
// import View_MainMenu from './views/MainMenu';
import reportWebVitals from './reportWebVitals';
import View_Game from "./views/View_Game";
import View_LevelSelection from "./views/View_LevelSelection";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<App />} />*/}
                {/*<Route path={routesCfg.MAIN_MENU.path} element={routesCfg.MAIN_MENU.view} />*/}
                {/*<Route path={routesCfg.LEVEL_SELECTION.path} element={routesCfg.LEVEL_SELECTION.view} />*/}
                {/*<Route path={routesCfg.GAME.path} element={routesCfg.GAME.view} />*/}
                <Route path="/level-selection" element={<View_LevelSelection />} />
                <Route path="/game" element={<View_Game />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
