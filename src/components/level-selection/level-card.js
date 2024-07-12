
import monkeyPic from '../../assets/images/monkey.svg'
import nextBtnPic from '../../assets/images/button-next.png'

const LevelCard = (_props) => {

    return (
        <>
            <div className="feedbackform_slide__inner">
                {/*<div className="character poptwo">*/}
                {/*    <div className="character_image">*/}
                {/*        <img src={monkeyPic} />*/}
                {/*    </div>*/}
                {/*    <div className="character_smile">*/}
                {/*        <div className="smiler_input">*/}
                {/*            <input className="monkey" max="20" min="0" type="range"/>*/}
                {/*            <svg className="smile monkey" height="20px" version="1.1" width="70px"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path d="M10 10 C 20 10, 40 10, 50 10" fill="transparent" strokeLinecap="round" strokeWidth="4" stroke="#562911"></path>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="rating monkey popthree">
                    <span>{_props.level.name}</span>
                    <img className="next popfour" src={nextBtnPic} onClick={() => _props.onClick(_props.level)} />
                </div>
            </div>
        </>
    );
}

export default LevelCard;