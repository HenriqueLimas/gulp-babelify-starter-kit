import {getAnswer} from '../../public/src/foo/foo.js';

describe('First test', () => {
  it('should be 42.', () => {
    expect(getAnswer()).toBe(42);
  });
});