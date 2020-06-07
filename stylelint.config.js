module.exports = {
	extends: 'stylelint-config-sass-guidelines',
	rules: {
		indentation: 'tab',
		'order/properties-alphabetical-order': null,
		// Review rules below
		'selector-max-id': null,
		'shorthand-property-no-redundant-values': null,
		'length-zero-no-unit': null,
		'declaration-property-value-blacklist': null,
		'max-nesting-depth': null,
		'selector-max-compound-selectors': null,
		'selector-class-pattern': null,
	},
};
