import Login from './script/login.js';
import Data from './script/data.js';
import Timer from './script/temporizador.js';

Login();

setInterval(() => {
  Data();
}, 1000);

Timer();
startTimer();
