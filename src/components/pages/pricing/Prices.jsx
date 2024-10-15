import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import pricesData from '../../../data/pricesData';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

function Prices() {
	const theme = useTheme();

	const cardAnimation = {
		initial: { opacity: 0, x: 30 },
		animate: { opacity: 1, x: 0 },
		whileHover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' },
		transition: { duration: 0.5 }
	};

	const renderFeatures = (features) => (
		<Box component="ul" className="list-none" mb={2}>
			{Object.entries(features).map(([feature, available], idx) => (
				<Typography
					component="li"
					key={idx}
					textAlign="center"
					color={available ? "textPrimary" : "textSecondary"}
					sx={{ textDecoration: available ? 'none' : 'line-through' }}
				>
					{feature}
				</Typography>
			))}
		</Box>
	);

	return (
		<Box my={5}>
			<Grid container spacing={4}>
				{pricesData.map((plan, index) => (
					<Grid item xs={12} md={4} key={plan.title}>
						<motion.div {...cardAnimation}>
							<Card
								sx={{
									border: `2px solid ${plan.popular ? theme.palette.primary.main : '#ddd'}`,
									transition: 'all 0.3s ease',
									borderRadius: '12px',
									overflow: 'hidden',
								}}
							>
								<CardContent>
									<Box className="flex justify-center mb-4 p-4 w-fit mx-auto rounded-full bg-primary" sx={{ boxShadow: '0 0 0px 10px var(--shadow-skin-color)' }}>
										<plan.icon style={{
											fontSize: 80, color: '#fff', boxShadow: '-moz-initial',
											borderRadius: '50%', border: 0
										}} />
									</Box>

									<Typography variant="h5" align="center" fontWeight="bold">
										{plan.title}
									</Typography>

									<Box textAlign="center" mb={2}>
										<Typography variant="h3" fontWeight="bold">
											<span className="text-primary">{plan.pricePerMonth}</span>
											<span className="text-sm">/month</span>
										</Typography>
									</Box>

									{renderFeatures(plan.features)}

									<Box textAlign="center" mt={3}>
										<Button
											variant="contained"
											color='primary'
											sx={{
												borderRadius: '20px',
												fontWeight: 'bold',
												boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
												textTransform: 'none',
											}}
										>
											Choose Plan
										</Button>
									</Box>
								</CardContent>
							</Card>
						</motion.div>
					</Grid>
				))}
			</Grid>
		</Box >
	);
}

export default Prices;
