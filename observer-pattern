function myObserver() {
  this.trackers = [];
  this.subscribe = function(fn){
    this.trackers.push(fn)
  }
  this.unsubscribe = function(fn) {
    this.trackers = this.trackers.filter(f => f !== fn)
  }
  this.notify = function(...args) {
    this.trackers.forEach(t => {
      t(args);
    })
  }
}

function logger(data) {
  console.log(`logged ${Date.now()} ${data}`);
}

function toastify(data) {
  console.log(`taosted ${Date.now()} ${data}`);
}

const observable = new myObserver();

observable.subscribe(logger);
observable.subscribe(toastify);


observable.notify("User clicked button!");
