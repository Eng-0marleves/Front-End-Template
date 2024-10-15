import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Group as GroupIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamsData } from '../../../data/teamsData.js';

function TeamsContainer() {
	const navigate = useNavigate();

	const handleTeamClick = (id) => {
		navigate(`/teams/${id}`);
	};

	return (
		<Box>
			<Grid container spacing={4}>
				{teamsData.map((team) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={team.id}
						onClick={() => handleTeamClick(team.id)}
						sx={{ cursor: 'pointer' }}
					>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ opacity: 0.8, y: -10 }}
							transition={{ duration: 0.5 }}
						>
							<Box
								sx={{
									width: '100%',
									height: 300,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									border: '1px solid #ddd',
									borderRadius: '8px',
									textAlign: 'center',
									boxShadow: 2,
									overflow: 'hidden',
									position: 'relative',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundImage: `url(${team.image})`,
								}}
							/>
							<Box
								sx={{
									width: '90%',
									background: 'white',
									margin: '-25% auto 0',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									padding: '50px',
									marginBottom: 1,
									zIndex: 10,
								}}
								boxShadow={2}
								position='relative'
								className='details'
							>
								<Box
									sx={{
										color: '#fff',
										fontSize: '32px',
										position: 'absolute',
										top: '-35px',
										left: '50%',
										transform: 'translateX(-50%)',
										background: 'var(--skin-color)',
										width: '70px',
										height: '70px',
										lineHeight: '8px',
										borderRadius: '50%',
										border: '5px solid #fff',
									}}
									className='icon flex justify-center items-center transition-all'
								>
									<GroupIcon />
								</Box>
								<Typography variant="h6" className='transition text-primary'>
									{team.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{team.description}
								</Typography>
							</Box>
						</motion.div>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default TeamsContainer;
