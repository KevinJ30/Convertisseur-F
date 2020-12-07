export class CalculatorModel {

    constructor() {}

    convert = (value, direction) => {
        let calcul = null;
        const valueDivise = 6.55957;
        
        if(direction) {
            calcul = value * valueDivise;
            return this.notify(calcul, 'F');
        }
        else {
            calcul = value / valueDivise;
            return this.notify(calcul, '€');
        }
  
    }

    bindModelChangedValue = (callback) => {
        this.onConvertionChanged = callback
    }

    notify(value, devise) {
        this.onConvertionChanged(value, devise);
    }

}