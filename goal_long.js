/* This is functionally the same as goal.js, but more readable so
 * you don't have to de-obfuscate it yourself.
 */

function g(x) {
	if (x === 'al')
		return 'gal';
	else if (x === undefined) {
		var os = '';
		return function (y) {
			os += 'o';
			if (y === 'al')
				return 'g' + os + 'al';
			else if (y === undefined)
				return arguments.callee;
		};
	}
}

print(g('al'));
print(g()('al'));
print(g()()('al'));
print(g()()()('al'));
