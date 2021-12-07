import { StringCountPipe } from './string-count.pipe';

describe('StringCountPipe', () => {
  it('create an instance', () => {
    const pipe = new StringCountPipe();
    expect(pipe).toBeTruthy();
  });
});
