import { Grid } from '@mui/material';
import Service from './Service';
import servicesData from '../../../../data/servicesData';
import { motion } from 'framer-motion';

function ServicesContainer() {
	return (
		<Grid container spacing={4}>
			{servicesData.map((service, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: index * 0.1 }}
					>
						<Service
							icon={service.icon}
							title={service.title}
							description={service.description}
						/>
					</motion.div>
				</Grid>
			))}
		</Grid>
	);
}

export default ServicesContainer;
