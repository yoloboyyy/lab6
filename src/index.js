import timer from './timer.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var element2=  document.createElement('div');
  let headerText=document.createElement('h1');
  /*   
  поле ввода секунд  
  */  
  let showTime=document.createElement('div');
  let timerSec= document.createElement('label');
  let getTime=document.createElement('input'); 
  
  /*   
  поле ввода текста  
  */   
  let text= document.createElement('label');
  let getText=document.createElement('input');
  
  /*
  кнопки 
  */
  let buttonBlock=document.createElement('div');
  let startButton=document.createElement('button');
  let resetButton=document.createElement('button');
  let pauseButton=document.createElement('button');
  let stopButton=document.createElement('button');  
  



  /*
  установка аттрибутов для поля ввода секунд
  */
  element.setAttribute('class','parent');
  element2.setAttribute('class', 'parent2');
  getTime.setAttribute('type','number');
  getTime.setAttribute('placeholder','Cекунды...');
  getTime.setAttribute('id','seconds');
  getText.setAttribute('placeholder','Текст...')
  getText.setAttribute('id','text')
  showTime.setAttribute('id','status');
  showTime.innerHTML=0;

  headerText.innerHTML='ТАЙМЕР';
  
  buttonBlock.setAttribute('class','buttonBlock');

  startButton.setAttribute('id','setup'); 
  startButton.setAttribute('class','button');
  startButton.innerHTML='Старт';

  resetButton.setAttribute('id','reset');
  resetButton.setAttribute('class','button');
  resetButton.innerHTML='Сброс';

  pauseButton.setAttribute('id','pause');
  pauseButton.setAttribute('class','button');
  pauseButton.innerHTML='Пауза';

  stopButton.setAttribute('id','stop');
  stopButton.setAttribute('class','button');
  stopButton.innerHTML='Стоп';
  
  


  timerSec.setAttribute('for','seconds');

  element.appendChild(headerText);
  element.appendChild(element2);
  element.appendChild(timerSec);  
  timerSec.appendChild(getTime);
  text.appendChild(getText);   
  element.appendChild(text);
  element.appendChild(buttonBlock); 
  buttonBlock.appendChild(startButton); 
  buttonBlock.appendChild(resetButton);
  buttonBlock.appendChild(pauseButton);
  buttonBlock.appendChild(stopButton);
  element2.appendChild(showTime);
  
  return element;
}

let element = component();
document.body.appendChild(element);
