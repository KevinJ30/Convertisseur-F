import { ViewBuilder } from './ViewBuilder.js';

export class CalculatorView extends ViewBuilder{
    constructor() {
        super();
        
        this.app = this.getElement('#app-root');
        this.form = this.createElement('form');
        this.labelEuros = this.createFormLabel('euros', 'Euros (€)');
        this.inputAmountEuros = this.createFormInput('number', 'amountEuros', 'Euros (€)', 'form-control');
        this.labelFrancs = this.createFormLabel('francs', 'Francs (F)');
        this.inputAmountFrancs = this.createFormInput('number', 'amountFrancs', 'Francs (F)', 'form-control');
        this.convertion = this.createElement('div', 'convertion');
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

        this.app.append(this.form);
        let divider = this.createElement('hr');
        
        this.app.append(divider);
        this.app.append(this.convertion);
    }

    bindInputEuroValueChange(handler) {
        this.inputAmountEuros.addEventListener('change', (event) => {
            handler(this.inputAmountEuros.value, true);
            this.resetInput();
        })
    }

    bindInputFrancValueChange(handler) {
        this.inputAmountFrancs.addEventListener('change', (event) => {
            handler(this.inputAmountFrancs.value, false);
            this.resetInput();
        })
    }

    resetInput() {
        this.inputAmountEuros.value = '';
        this.inputAmountFrancs.value = '';
    }

    displayConvertion(value, devise) {
        this.convertion.innerHTML = value + ' ' + devise;
    }
}
