
class Calculator {

	constructor(nextAction,prevAction) {  // Constructor
		this.nextAction = nextAction;
		this.prevAction = prevAction;
		this.clear();
  }

  clear() {
  	this.currentOperation = '';
  	this.prevOperation = '';
  	this.operation = undefined;
  }

  delete() {
  	if(this.currentOperation){
			var myNumber = parseFloat(this.currentOperation);
			let newNumber = +(myNumber.toString().slice(0, -1));
			console.log(newNumber);
			this.currentOperation = newNumber;
		}else{
			this.currentOperation = 0;
		}

		if(this.currentOperation == 'NaN') {
			this.currentOperation = 0;
		}
  }

  appendNumber(number) {
  	if(number === '.' && this.currentOperation.includes('.')) return
  	if(this.currentOperation == 0) {this.currentOperation = ''};

  	this.currentOperation = this.currentOperation.toString() + number.toString();
  }

  chooseOperation(op) {
  	if(this.currentOperation === '') return

  	if(this.prevOperation !== ''){
  		this.calculate()
  	}

  	this.operation = op;
  	this.prevOperation = this.currentOperation + this.operation;
  	this.currentOperation = '';
  }

  calculate() {

  	var result;
console.log(this.operation);
  	switch(this.operation) {
		  case '+':
		    result = parseFloat(this.prevOperation) + parseFloat(this.currentOperation);
		    break;
		  case '-':
		    result = parseFloat(this.prevOperation) - parseFloat(this.currentOperation);
		    break;
 		  case '*':
		    result = parseFloat(this.prevOperation) * parseFloat(this.currentOperation);
		    break;
		  case '/':
		    result = parseFloat(this.prevOperation) / parseFloat(this.currentOperation);
		    break;
		  case '%':
		    result = parseFloat(this.prevOperation) % parseFloat(this.currentOperation);
		    break;
		  default:
		    return;
		} 

  	this.currentOperation = result;
  	this.operation = undefined;
  	this.prevOperation = '';

  }

  updateDisplay() {
  	this.nextAction.innerText = this.currentOperation;
  	this.prevAction.innerText = this.prevOperation;
  }


}

const numbers    = document.querySelectorAll('.number');
const operation  = document.querySelectorAll('.operation');
const equals     = document.querySelector('.equals');
const del        = document.querySelector('.delete');
const ac         = document.querySelector('.allClear');
const prevAction = document.querySelector('.number-show-top');
const nextAction = document.querySelector('.number-show-bottom');

const calculator = new Calculator(nextAction,prevAction);

  numbers.forEach(button => {
		button.addEventListener('click', () => {
			calculator.appendNumber(button.innerText);
			calculator.updateDisplay();
		})
  });

  operation.forEach(chooseOp => {
		chooseOp.addEventListener('click', () => {
			calculator.chooseOperation(chooseOp.innerText);
			calculator.updateDisplay();
		})
  });

  equals.addEventListener('click', () => {
  		calculator.calculate();
  		calculator.updateDisplay();
  });

  ac.addEventListener('click', () => {
  		calculator.clear();
  		calculator.updateDisplay();
  });

  del.addEventListener('click', () => {
  		calculator.delete();
  		calculator.updateDisplay();
  })