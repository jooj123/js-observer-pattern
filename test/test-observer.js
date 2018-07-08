const TestObserver = function TestObserver(name) {
  this.name = name;

  return {
    notify: () => {
      console.log(`Test Observer: ${this.name}`);
    }
  }
}

module.exports = TestObserver;
