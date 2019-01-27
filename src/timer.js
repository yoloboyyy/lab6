class Timer {
  constructor(inputEl,callback) {
    this.paused = false;
    this.started = false;
    this.stopped = true;
    this.currentCount = 0 ;
    this.running = false;
    this.inputEl = inputEl;
    this.callback=callback;
    this.interval = 1000;    
    this.maxCount = 0;
    this.inputText = document.getElementById("text");
  }

  start() {
    if (this.stopped) {
      this.started = true;
      this.paused = false;
      this.stopped = false;
      this.currentCount = Number(this.inputEl.value);
      this.loop();
      this.running = true;
    }

    this.paused = false;
  }
 

  pause() {
    this.paused = true;
  }

  stop() {
    this.paused = false;
    this.started = false;
    this.stopped = true;
    this.running = false;
    this.currentCount = 0;
  }

  update(item) {
    document.getElementById("status").innerHTML = item;    
    --this.currentCount;
    if (this.currentCount < 0) {
      this.callback.call();      
      this.stop();
    }
  }

  reset() {
    this.currentCount = Number(this.inputEl.value);

    document.getElementById("status").innerHTML = this.currentCount;
  }

  loop() {
   
    if (!this.stopped) {
      if (!this.paused) {
        this.update(this.currentCount);
      }

      setTimeout(() => this.loop(), this.interval);
    }
  }  

}


function alertText(){
  let inputText = document.getElementById("text");
  let word = inputText.value;
  alert(word);
}

window.onload = function() {  

  let inputEl = document.getElementById("seconds");
  const lol = new Timer(inputEl,alertText);
  document.getElementById("setup").onclick = () => lol.start();
  document.getElementById("reset").onclick = () => lol.reset();
  document.getElementById("pause").onclick = () => lol.pause();
  document.getElementById("stop").onclick = () => lol.stop();
};