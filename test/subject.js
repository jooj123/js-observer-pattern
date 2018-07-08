const assert = require('assert');
const sinon = require('sinon');
const Subject = require('../src/subject');
const TestObserver = require('./test-observer');

describe('Subject', () => {
  it('should observe correctly', () => {
    let spy = sinon.spy(console, 'log');

    const subject = new Subject();
    const martin = new TestObserver('Martin');
    const alana = new TestObserver('Alana');

    subject.subscribe(martin);
    subject.subscribe(alana);

    subject.notifyAll();

    assert(spy.calledWith('Test Observer: Martin'));
    assert(spy.calledWith('Test Observer: Alana'));

    spy.restore();
  });

});