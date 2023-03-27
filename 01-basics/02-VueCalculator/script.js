import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const VueCalculator = {
    name: 'VueCalculator',

    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            operator: ''
        }
    },

    computed: {
        result() {
            switch (this.operator) {
                case 'sum':
                    return this.firstNumber + this.secondNumber;
                case 'subtract':
                    return this.firstNumber - this.secondNumber;
                case 'multiply':
                    return this.firstNumber * this.secondNumber;
                case 'divide':
                    return this.firstNumber / this.secondNumber;
            }
        }
    }
}


const app = createApp(VueCalculator);
const vm = app.mount('#app')