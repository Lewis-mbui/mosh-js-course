/*
function StopWatch() {
  let startTime = 0;
  let stopTime = 0;
  
  this.duration = 0;

  this.start = function() {
    if (startTime === 0){
      startTime = Date.now();
      console.log('clock started at ' + startTime);
    }
    else {
      console.error('stopwatch already started at ' + startTime);
    }
    
  };

  this.stop = function() {
    if (startTime === 0) console.error('Stopwatch not started');
    else if (stopTime === 0) {
      stopTime = Date.now();
      console.log('clock stopped at' + stopTime);
      this.duration = (stopTime - startTime) / 1000;
      startTime = 0;
      stopTime = 0;
    }
  };

  this.reset = function() {
    startTime = 0;
    stopTime = 0;
    this.duration = 0;
  }
}

const sw = new StopWatch();
*/

function StopWatch() {
  let startTime, stopTime, running, duration = 0;

  this.start = function() {
    if (running)
      throw new Error('Stopwatch already started!!');
    running = true;
    startTime = Date.now();
  };

  this.stop = function() {
    if (!running)
      throw new Error('Stopwatch not running!!');

    running = false;
    stopTime = Date.now();
    const seconds = (stopTime - startTime) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = 0;
    stopTime = 0;
    running = false;
    duration = 0;
    console.log('stop watch reset')
  };

  Object.defineProperty(this, 'duration',
    {
      get: function() {return duration}
    }
  );
}

const sw = new StopWatch();