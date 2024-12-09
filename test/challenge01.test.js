const { prepareGifts } = require('../challenges/challenge01');

test('Should return an empty array of [1, 2, 3, 4, 5]', () => {
  const gifts1 = [3, 1, 2, 3, 4, 2, 5];
  const preparedGifts1 = prepareGifts(gifts1);
  expect(preparedGifts1).toEqual([1, 2, 3, 4, 5]);
});

test('Should return an empty array of // [5, 6]', () => {
  const gifts2 = [6, 5, 5, 5, 5];
  const preparedGifts2 = prepareGifts(gifts2);
  expect(preparedGifts2).toEqual([5, 6]);
});

test('Should return an empty array when the input is an empty array []', () => {
  const gifts3 = [];
  const preparedGifts3 = prepareGifts(gifts3);
  expect(preparedGifts3).toEqual([]);
});
