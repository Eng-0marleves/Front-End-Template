import { useState, useEffect } from 'react';
import { getCssVariableValue } from '../utils/getCssVariable';
import { editCssVariableValue } from '../utils/editCssVariable';

const useSkinColor = () => {
	const [skinColor, setSkinColor] = useState('');

	useEffect(() => {
		const currentSkinColor = getCssVariableValue('--skin-color') || '#3498db';
		setSkinColor(currentSkinColor);
	}, []);

	const updateSkinColor = (newColor) => {
		editCssVariableValue('--skin-color', newColor);
		setSkinColor(newColor);
	};

	return [skinColor, updateSkinColor];
};

export default useSkinColor;
