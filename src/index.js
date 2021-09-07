import './sass/main.scss';

import { colors } from "./js/data.js";
import { randomIntegerFromInterval } from "./js/helpers.js";
import { refs } from "./js/refs.js";

const { startBtn, stopBtn, body } = refs;

let timeoutId = null;
const CHANGE_DELAY = 1000;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    startBtn.setAttribute('disabled', true);

    timeoutId = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        body.style.backgroundColor = randomColor;
    }, CHANGE_DELAY); 
    };

function onStopBtnClick() {
    clearInterval(timeoutId);
    startBtn.removeAttribute('disabled');
}

