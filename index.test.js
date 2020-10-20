test('selects defined variable', () => {
  const trekSelect = require('./index')();
  
  const decl = { value: 'select(undefined, undefined, 2px, undefined)' };
  trekSelect.Declaration(decl);
  expect(decl.value).toBe('2px');

  decl.value = 'select(  undefined  , undefined, 2px, undefined )';
  trekSelect.Declaration(decl);
  expect(decl.value).toBe('2px');
});