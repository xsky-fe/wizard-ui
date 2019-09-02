import elasticQuery from '../elastic-query';

describe('elastic query', () => {
  it('can parse query string to array', () => {
    const str = 'passive:true AND name:asdf';
    expect(elasticQuery.toArr(str)).toEqual([
      { type: 'passive', value: 'true' },
      { type: 'name', value: 'asdf' },
    ]);
  });

  it('can format arr to query string', () => {
    const arr = [{ type: 'passive', value: 'true' }, { type: 'name', value: 'asdf' }];
    expect(elasticQuery.toStr(arr)).toBe('passive:true AND name:asdf');
  });
});
