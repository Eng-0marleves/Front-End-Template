import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Skills({ isVisable }) {
	const skillsData = [
		{ title: 'HTML', percentage: 90 },
		{ title: 'CSS', percentage: 85 },
		{ title: 'JavaScript', percentage: 80 },
		{ title: 'React', percentage: 75 },
		{ title: 'Node.js', percentage: 70 },
	];

	return (
		<Box className="skills-container flex flex-wrap justify-between items-start gap-6">
			<Box
				className="skills-image"
				sx={{
					display: { xs: 'none', md: 'flex' },
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					src="https://th.bing.com/th/id/OIP.xNIRTXZprk1aP1lnqJX4RwHaE8?rs=1&pid=ImgDetMain"
					alt="Placeholder"
					style={{ width: '100%', height: 'auto' }}
				/>
			</Box>
			<Box className="skills-content" sx={{ flex: 1 }}>
				<Typography variant="h4" component="h2">
					Skills
				</Typography>
				<Box className="skills-list" sx={{ mt: 2 }}>
					{skillsData.map((skill, index) => (
						<motion.div
							key={index}
							className="skill-item mt-2"
							sx={{ mb: 2 }}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="flex justify-between items-center">
								<Typography className="skill-title" variant="body1">
									{skill.title}
								</Typography>
								<Typography variant="caption" color="textSecondary">
									{skill.percentage}%
								</Typography>
							</div>
							<Box className="skill-percentage">
								<motion.div
									className="skill-bar"
									style={{
										height: '10px',
										backgroundColor: '#ccc',
										position: 'relative',
										overflow: 'hidden',
										borderRadius: '5px',
									}}
								>
									<motion.div
										variant="determinate"
										initial={{ width: 0 }}
										animate={{ width: isVisable ? `${skill.percentage}%` : 0 }}
										transition={{ duration: 1 }}
										style={{
											height: '100%',
											backgroundColor: 'var(--skin-color)',
										}}
									/>
								</motion.div>
							</Box>
						</motion.div>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default Skills;
