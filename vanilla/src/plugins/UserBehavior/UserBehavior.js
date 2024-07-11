
import Interactions from './Interactions.js';

class UserBehavior {

    logs = []

    constructor() {}

    /**
     * start monitor user behavior
     */
    startMonitor() {
        document.addEventListener('click', (event) => {
            if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT') return
            const newInteractions = new Interactions(event)
            this.saveBehavior(newInteractions)
        })

        document.addEventListener('input', (event) => {
            if (event.target.tagName !== 'INPUT') return
            const newInteractions = new Interactions(event)
            this.saveBehavior(newInteractions)
        })

        document.addEventListener('change', (event) => {
            if (event.target.tagName !== 'SELECT') return
            const newInteractions = new Interactions(event)
            this.saveBehavior(newInteractions)
        })


        // document.addEventListener('input', (event) => {
        //     const newInteractions = new Interactions(event)
        //     this.saveBehavior(newInteractions)
        // })
    }

    saveBehavior(_interaction) {
        this.logs.push(_interaction)
        console.log(this.logs)
    }
}

export default new UserBehavior()