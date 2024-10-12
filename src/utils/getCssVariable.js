export const getCssVariableValue = (variableName) => {
	return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};