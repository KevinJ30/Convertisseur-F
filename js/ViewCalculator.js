import { ViewBuilder } from './ViewBuilder.js';

export class ViewCalculator extends ViewBuilder{
    constructor() {
        super();
        
        this.app = this.getElement('#app-root');
        this.form = this.createElement('form');
        this.labelEuros = this.createFormLabel('euros', 'Euros (€)');
        this.inputAmountEuros = this.createFormInput('number', 'amountEuros', '0', 'form-control');
        this.labelFrancs = this.createFormLabel('francs', 'Francs (F)');
        this.inputAmountFrancs = this.createFormInput('number', 'amountFrancs', '0', 'form-control');
        this.button = this.createElementButton('submit', 'btn btn-primary', 'Calculer');
        
        this.buildView();
    }

    buildView() {
        let group_euros = this.createElement('div', 'form-group');
        group_euros.append(this.labelEuros);
        group_euros.append(this.inputAmountEuros);
        this.form.append(group_euros);

        let group_francs = this.createElement('div', 'form-group');
        group_francs.append(this.labelFrancs);
        group_francs.append(this.inputAmountFrancs);
        this.form.append(group_francs);

        this.form.append(this.button);
        this.app.append(this.form);
    }

    bindConvertor(handler) {
        this.button.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(event + '10000000');
        })
    }
}

console.log(new ViewCalculator())