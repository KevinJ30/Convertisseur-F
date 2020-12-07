export class ViewBuilder {
    /**
     * @param {Element} selector
     * @return {Element|null}
     **/
    getElement(selector) {
        const element = document.querySelector(selector)
        return element === null ? false : element;
    }

    /**
     * Create element
     * 
     * @param {string} tag 
     * @param {string} className 
     **/
    createElement(tag, className) {
        const element = document.createElement(tag);
        this.elementAddClass(element, className);
        return element;
    }

    /**
     * Create element form input
     * 
     * @param {string} type 
     * @param {string} name 
     * @param {string} placeholder 
     * @param {string} className 
     **/
    createFormInput(type, name, placeholder, className) {
        let input = this.createElement('input');
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        this.elementAddClass(input, className);

        return input;
    }

    /**
     * Create element form input
     * 
     * @param {string} type 
     * @param {string} name 
     * @param {string} placeholder 
     * @param {string} className 
     **/
    createFormLabel(id, text, className) {
        let label = this.createElement('label');
        label.id = id;
        label.textContent = text;
        this.elementAddClass(label, className);

        return label;
    }

    /**
     * Create button element
     * 
     * @param {string} type 
     * @param {string} className 
     * @param {string} text 
     **/
    createElementButton(type, className, text)
    {
        let button = this.createElement('button');
        this.elementAddClass(button, className);
        button.textContent = text;
        
        return button;
    }

    /**
     * Add className to the element
     * 
     * @param {Element} element 
     * @param {string} className 
     **/
    elementAddClass(element, className) {
        element.className = className !== undefined ? className : '';
        return element;
    }
}