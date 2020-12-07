export class CalculatorController {

    constructor(model, view) {
        this.view = view;
        this.model = model;

        /** Bind **/
        this.view.bindInputEuroValueChange(this.handleInputEuroChange);
        this.view.bindInputFrancValueChange(this.handleInputFrancChange)
        this.model.bindModelChangedValue(this.handleValueChange);

        this.handleValueChange(0, '€');
    }

    handleInputEuroChange = (value, direction) => {
        this.model.convert(value, direction);
    }

    handleInputFrancChange = (value, direction) => {
        this.model.convert(value, direction);
    }

    handleValueChange = (value, devise) => {
        this.view.displayConvertion(value, devise);
    }
}