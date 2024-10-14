export const editCssVariableValue = (variableName, value) => {
	if (!variableName.startsWith('--')) {
		variableName = `--${variableName}`;
	}

	document.documentElement.style.setProperty(variableName, value);
};
