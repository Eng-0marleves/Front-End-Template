import { Box, IconButton, List, ListItem, Button } from "@mui/material";
import { motion } from "framer-motion";
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

function ThemeSettings({ changeColor, changeMode }) {
	const [isOpen, setIsOpen] = useState(false);
	const colors = ['#ec1839', '#FF5733', '#3498db', '#27ae60', '#f1c40f'];

	const handleThemeChange = (color) => {
		changeColor(color);
	};

	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`flex flex-row items-center gap-4 fixed top-3/4 right-2 z-10 transition-all duration-300`}
			style={{
				transform: isOpen ? 'translateX(0)' : 'translateX(calc(100% - 44px))',
			}}
		>
			<motion.div
				onClick={toggleList}
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
			>
				<IconButton
					color="primary"
					sx={{
						color: 'white',
						fontSize: '1rem',
						width: '40px',
						height: '40px',
						backgroundColor: 'primary.main',
						'&:hover': {
							opacity: 0.9,
							backgroundColor: 'primary.main',
						},
					}}
				>
					<SettingsIcon />
				</IconButton>
			</motion.div>

			<Box>
				<List className="flex flex-row bg-primary rounded-md">
					{colors.map((color) => (
						<ListItem key={color} sx={{ padding: 0 }}>
							<Button
								variant="contained"
								sx={{
									backgroundColor: color,
									minWidth: '24px',
									minHeight: '24px',
									margin: '0 8px',
									padding: 0,
									borderRadius: '50%',
									boxShadow: '0 0 0 2px var(--shadow-skin-color)',
									'&:hover': {
										backgroundColor: color,
										opacity: 0.8,
										boxShadow: '0 0 0 1px var(--shadow-skin-color)',
									},
								}}
								onClick={() => handleThemeChange(color)}
							/>
						</ListItem>
					))}
				</List>
			</Box>
		</div>
	);
}

export default ThemeSettings;
