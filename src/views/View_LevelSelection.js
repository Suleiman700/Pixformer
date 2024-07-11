

import Events from '../scripts/Events';

import '../assets/style/main_menu.css';
import background from '../assets/images/bg-pattern-sunburst.svg'

const View_LevelSelection = () => {

    const startGame = () => {
        Events._EventBus.emit(Events._events.MAIN_MENU.START_GAME)
    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '100vh', backgroundColor: '#c39681'}}>
                <img className="bg-pattern-1" src={background} />
                <div className="text-center" style={{zIndex: 1}}>
                    <h1 className="" style={{fontSize: 70, color: 'white'}}>PixFormer</h1>
                    <button className="btn btn-primary btn-fancy mt-3" onClick={startGame}>Start Game</button>
                </div>
            </div>
        </>
    );
};

export default View_LevelSelection;

