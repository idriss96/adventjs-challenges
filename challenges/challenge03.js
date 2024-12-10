/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */

function organizeInventory(inventory) {
  return inventory.reduce((acc, item) => {
    const { category, name, quantity } = item;
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][name]) {
      acc[category][name] = 0;
    }
    acc[category][name] += quantity;
    return acc;
  }, {});
}

module.exports = { organizeInventory };
