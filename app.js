
class Calculator {

	constructor(nextAction,prevAction) {  // Constructor
		this.nextAction = nextAction;
		this.prevAction = prevAction;
  	}

  	clear() {
  		console.log('2nd Call');
  		this.nextAction.innerText = '';
  		this.prevAction.innerText = '';
  		this.operation = undefined;
  	}

	appendNumber(val) {
		if(this.nextAction.innerText == 0){
			this.nextAction.innerText = '';
		}
		
		this.nextAction.innerText = this.nextAction.innerText.toString() + val.toString();
	}

	delete() {
		var myNumber = parseInt(this.nextAction.innerText);
		let newNumber = +(myNumber.toString().slice(0, -1));
		// console.log(newNumber);
		this.nextAction.innerText = newNumber;	
	}		

}

const numbers = document.querySelectorAll('.number');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const percent = document.querySelector('.percent');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const del = document.querySelector('.delete');
const ac = document.querySelector('.allClear');
const prevAction = document.querySelector('.number-show-top');
const nextAction = document.querySelector('.number-show-bottom');

const calculator = new Calculator(nextAction,prevAction);

  numbers.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
	})
  });

  ac.addEventListener('click', () => {
  		calculator.clear();
  });

  del.addEventListener('click', () => {
  		calculator.delete();
  })