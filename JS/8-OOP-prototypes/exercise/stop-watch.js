// Premature Optimization is the root of all EVILS!!

function StopWatch() {
  let startTime, stopTime, running, duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() {return duration},
    set: function(value) {duration = value}
  });
  
  Object.defineProperty(this, 'startTime', {
    get: function() {return startTime}
  });

  Object.defineProperty(this, 'stopTime', {
    get: function() {return stopTime}
  });

  Object.defineProperty(this, 'running', {
    get: function() {return running}
  });
}

StopWatch.prototype.start = function() {
  if (this.running)
    throw new Error('Stopwatch already started!!');
  this.running = true;
  this.startTime = Date.now();
};

StopWatch.prototype.stop = function() {
  if (!this.running)
    throw new Error('Stopwatch not running!!');

  this.running = false;
  this.stopTime = Date.now();
  const seconds = (stopTime - startTime) / 1000;
  this.duration += seconds;
}

StopWatch.prototype.reset = function() {
  this.startTime = 0;
  this.stopTime = 0;
  this.running = false;
  this.duration = 0;
  console.log('stop watch reset')
}

const sw = new StopWatch();
sw.duration = 10;
