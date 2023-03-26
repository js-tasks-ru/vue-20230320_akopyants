import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const VueCalculator = {
    name: 'VueCalculator',

    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            operator: '',
            result: 0
        }
    },

    computed: {
        calculate() {
            const calc = (num1, num2, operator) => {
                switch (operator) {
                    case 'sum':
                        return (num1 + num2);
                    case 'subtract':
                        return (num1 - num2);
                    case 'multiply':
                        return (num1 * num2);
                    case 'divide':
                        return (num1 / num2);
                }
            }

            this.result = calc(this.firstNumber, this.secondNumber, this.operator);
        }
    }
}


const app = createApp(VueCalculator);
const vm = app.mount('#app')