/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
	let maxNameLength = Math.max(...names.map((name) => name.length));
	let border = '*'.repeat(maxNameLength + 4);

	let framedNames = border + '\n';
	names.forEach((name) => {
	  let paddedName = `* ${name.padEnd(maxNameLength)} *`;
	  framedNames += paddedName + '\n';
	});
	framedNames += border;

	return framedNames;
}

module.exports = { createFrame };
