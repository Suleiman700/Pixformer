
export default class Interactions {

    event;
    targetElement;
    eventType;
    elementParentClass;
    elementParentId;
    elementTagName;
    elementClass;
    elementId;
    inputValue;

    constructor(_event) {
        this.event = _event
        this.eventType = _event.type
        this.targetElement = _event.target

        return this.#generateInteraction()
    }

    /**
     * generate user interaction
     */
    #generateInteraction() {
        const targetElement = this.targetElement

        // get element parent class
        this.elementParentClass = this.#getElmParentClass(targetElement)

        // get element parent id
        this.elementParentId = this.#getElmParentId(targetElement)

        // get element tag name
        this.elementTagName = this.#getElmTagName(targetElement)

        // get element class
        this.elementClass = this.#getElmClass(targetElement)

        // get element id
        this.elementId = this.#getElmId(targetElement)


        const interaction = {
            eventType: this.eventType,
            elmParentClass: this.elementParentClass,
            elmParentId: this.elementParentId,
            elmTagName: this.elementTagName,
            elmClass: this.elementClass,
            elmId: this.elementId,
            timestamp: Date.now()
        }

        // if event type is input then save typed value
        if (this.eventType === 'input') {
            interaction['typedValue'] = this.event.data // this contains the typed value only
        }
        else if (this.eventType === 'keyup') {
            interaction['keyup'] = this.event['code']
        }
        else if (this.eventType === 'change') {
            interaction['selectedValue'] = this.event['target']['value']
        }

        return interaction


        // this._elmTagName = _target['elmTagName'];
        // this._elmClass = _target['elmClass'];
        // this._elmId = _target['elmId'];
    }

    #getElmParentClass(_targetElement) {
        if (_targetElement.parentNode.classList['value'] !== '') return _targetElement.parentNode.classList['value']
        else return undefined
    }

    #getElmParentId(_targetElement) {
        if (_targetElement.parentNode.id !== '') return _targetElement.parentNode.id
        else return undefined
    }

    /**
     * get element tag name
     * @param _element {object}
     * @return {undefined|string}
     */
    #getElmTagName(_targetElement) {
        if (_targetElement.tagName !== '') return (_targetElement.tagName).toLowerCase()
        else return undefined
    }

    /**
     * get element class
     * @param _targetElement
     * @return {undefined|*}
     */
    #getElmClass(_targetElement) {
        if (_targetElement.classList['value'] !== '') return _targetElement.classList['value']
        else return undefined
    }

    /**
     * get element id
     * @param _targetElement
     * @return {undefined|*}
     */
    #getElmId(_targetElement) {
        if (_targetElement.id !== '') return _targetElement.id
        else return undefined
    }
}