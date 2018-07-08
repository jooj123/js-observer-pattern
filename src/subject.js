const Subject = function Subject() {
  this.observers = [];

  return {
    subscribe: (observer) => {
      this.observers.push(observer)
    },
    notifyAll: () => {
      this.observers.forEach((observer) => observer.notify());
    },
    notifyObserver: (observer) => {
      const index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },
    unsubscribe: (observer) => {
      this.observers = this.observers.filter((obs) => obs !== observer);
    },
  };
}

module.exports = Subject;