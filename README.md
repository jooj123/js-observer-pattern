# JS Observer Pattern
Simple observer pattern in JS

### Usage

```javascript
const subject = new Subject();
const kano = new TestObserver('Kano');
const subZero = new TestObserver('Sub Zero');

subject.subscribe(kano);
subject.subscribe(subZero);

subject.notifyAll();
```
