const { createFrame } = require('../challenges/challenge02');

test('Should correctly frame names with varying lengths', () => {
  const names = ['midu', 'madeval', 'educalvolpz'];
  const expectedOutput =
    '***************\n' +
    '* midu        *\n' +
    '* madeval     *\n' +
    '* educalvolpz *\n' +
    '***************';
  expect(createFrame(names)).toBe(expectedOutput);
});

test('Should correctly frame a single name', () => {
  const names = ['midu'];
  const expectedOutput =
  	'********\n' +
  	'* midu *\n' +
	'********';
  expect(createFrame(names)).toBe(expectedOutput);
});

test('Should correctly frame names of increasing lengths', () => {
  const names = ['a', 'bb', 'ccc'];
  const expectedOutput =
    '*******\n' +
	'* a   *\n' +
	'* bb  *\n' +
	'* ccc *\n' +
	'*******';
  expect(createFrame(names)).toBe(expectedOutput);
});

test('Should correctly frame names with the longest name at the end', () => {
  const names = ['a', 'bb', 'ccc', 'dddd'];
  const expectedOutput =
    '********\n' +
    '* a    *\n' +
    '* bb   *\n' +
    '* ccc  *\n' +
    '* dddd *\n' +
    '********';
  expect(createFrame(names)).toBe(expectedOutput);
});
