/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
	let filtradGifts = gifts.filter((value, index, self) => self.indexOf(value) === index);
	let orderGits = filtradGifts.sort((a,b) => a - b);
	return orderGits;
  }

  module.exports = { prepareGifts };

