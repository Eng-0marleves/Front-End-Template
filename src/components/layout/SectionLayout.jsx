import React from 'react';
import { Box } from '@mui/material';

const SectionLayout = ({ children }) => {
	return (
		<Box className="container mx-auto mt-20 p-4 flex flex-col gap-12">
			{children}
		</Box>
	);
};

export default SectionLayout;
