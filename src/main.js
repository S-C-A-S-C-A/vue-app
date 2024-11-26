import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

const obviouslywrong = function () {
    console.log('obviously wrong');
};

obviouslywrong = hello;

const MAPBOX_API_KEY =
    'pk.eyJ1Ijoic2Vuc2VyYXdrLW1iIiwiYSI6ImNrZHZoMGtteTA3N2YydTFpbWVqbm94eHEifQ.F_7pXAbSRthr38LC4xOkbA';

console.log(
    '%cMAPBOX_API_KEY',
    'font-weight: bold; color: tomato;',
    MAPBOX_API_KEY
);
