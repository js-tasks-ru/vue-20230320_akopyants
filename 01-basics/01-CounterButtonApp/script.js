import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const CounterButtonApp = {
    name: 'CounterButtonApp',

    data() {
        return {
            count: 0
        };
    },

    methods: {
        increaseСounterСalue() {
            this.count += 1;
        }
    }


}


const app = createApp(CounterButtonApp);
const vm = app.mount('#app');