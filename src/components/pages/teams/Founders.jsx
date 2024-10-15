import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import foundersData from '../../../data/foundersData';

function Founders() {
	return (
		<Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
			{foundersData.map((founder) => (
				<motion.div
					key={founder.id}
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					<Box
						position="relative"
						width={300}
						height={400}
						borderRadius={2}
						overflow="hidden"
						boxShadow={3}
						sx={{
							'.details': {
								transition: 'bottom 0.3s, opacity 0.3s',
							},
							'&:before': {
								content: '""',
								position: 'absolute',
								bottom: 0,
								left: 0,
								right: 0,
								height: '100%',
								background: 'transparent',
								zIndex: 1,
								transition: 'background 0.3s',
							},
							'&:hover:before': {
								background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
							},
							'&:hover .details': {
								bottom: 0,
								opacity: 1,
							},
						}}
					>
						<img
							src={founder.image}
							alt={founder.name}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								zIndex: 0,
							}}
						/>
						<Box
							className="details"
							position="absolute"
							bottom={-100}
							left={0}
							right={0}
							color="white"
							p={1}
							textAlign="center"
							opacity={0}
							transition="opacity 0.3s"
							zIndex={2}
						>
							<Typography variant="h6">{founder.name}</Typography>
							<Typography variant="body2" className='italic'>{founder.title}</Typography>
							<Box display="flex" justifyContent="center" mt={1}>
								<IconButton href={founder.socialMedia.facebook} color="inherit" size="medium">
									<Facebook fontSize="medium" />
								</IconButton>
								<IconButton href={founder.socialMedia.twitter} color="inherit" size="medium">
									<Twitter fontSize="medium" />
								</IconButton>
								<IconButton href={founder.socialMedia.linkedin} color="inherit" size="medium">
									<LinkedIn fontSize="medium" />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</motion.div>
			))}
		</Box>
	);
}

export default Founders;
