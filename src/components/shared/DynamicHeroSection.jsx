import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

function DynamicHeroSection({ img, title, description, quote, features, caption }) {
	const textVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.2,
			},
		}),
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<Box
			display="flex"
			flexDirection={{ xs: 'column-reverse', md: 'row' }}
			justifyContent="space-between"
			alignItems={{ xs: 'center', md: 'flex-start' }}
			gap={0}
		>
			<Box flex={1} paddingRight={{ md: 5 }} textAlign={'left'}>
				<motion.div initial="hidden" animate="visible">
					<motion.div variants={textVariants} custom={0}>
						<Typography variant="h5" gutterBottom>
							{title}
						</Typography>
					</motion.div>
					<motion.div variants={textVariants} custom={1}>
						<Typography className="italic" variant="subtitle2" color="text.secondary" gutterBottom>
							{quote}
						</Typography>
					</motion.div>

					<List>
						{features.map((feature, index) => (
							<motion.div variants={textVariants} custom={index + 2} key={index}>
								<ListItem className="flex flex-row gap-2" disableGutters>
									<CheckCircleIcon color="primary" />
									<ListItemText primary={feature} />
								</ListItem>
							</motion.div>
						))}
					</List>

					<motion.div variants={textVariants} custom={5}>
						<Typography variant="body1" marginTop={2}>
							{description}
						</Typography>
					</motion.div>
					<motion.div variants={textVariants} custom={6}>
						<Typography variant="caption" marginTop={2}>
							{caption}
						</Typography>
					</motion.div>
				</motion.div>
			</Box>

			<motion.img
				src={img}
				alt={title}
				style={{
					width: '600px',
					height: '400px',
					objectFit: 'cover',
					borderRadius: '8px',
				}}
				variants={imageVariants}
				initial="hidden"
				animate="visible"
			/>
		</Box>
	);
}

export default DynamicHeroSection;
