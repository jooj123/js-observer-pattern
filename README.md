# JS Observer Pattern
Simple observer pattern in JS

### Usage

```
const subject = new Subject();
const martin = new TestObserver('Martin');
const alana = new TestObserver('Alana');

subject.subscribe(martin);
subject.subscribe(alana);

subject.notifyAll();
```
