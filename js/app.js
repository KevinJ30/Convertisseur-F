import { CalculatorView } from "./CalculatorView.js";
import { CalculatorController } from "./CalculatorController.js";
import { CalculatorModel } from "./CalculatorModel.js";

let calculatorView = new CalculatorView();
let calculatorModel = new CalculatorModel();
let calculatorController = new CalculatorController(calculatorModel, calculatorView);