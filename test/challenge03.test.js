const {organizeInventory} = require('../challenges/challenge03');

describe('organizeInventory', () => {
  it('should organize inventory by category and sum quantities', () => {
    const inventory = [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' },
    ];

    const expectedOutput = {
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    };

    expect(organizeInventory(inventory)).toEqual(expectedOutput);
  });

  it('should organize inventory by category and sum quantities', () => {
    const inventory = [
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' },
    ];
    const expectedOutput = {
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    };
    expect(organizeInventory(inventory)).toEqual(expectedOutput);
  });

  it('should handle inventory with a single item', () => {
    const inventory = [{ name: 'doll', quantity: 5, category: 'toys' }];
    const expectedOutput = {
      toys: {
        doll: 5,
      },
    };
    expect(organizeInventory(inventory)).toEqual(expectedOutput);
  });

  it('should return an empty object for an empty inventory', () => {
	const inventory = [];
	const expectedOutput = {};
	expect(organizeInventory(inventory)).toEqual(expectedOutput);
});
});
