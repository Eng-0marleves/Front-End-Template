import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SectionLayout from '../components/layout/SectionLayout';
import { teamsData } from '../data/teamsData';
import { List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function TabsDetails() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const variants = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
	};

	return (
		<SectionLayout>
			<Box
				sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', width: '100%', padding: 0 }}
			>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					{teamsData.map((team, index) => (
						<Tab key={team.id} label={team.title} {...a11yProps(index)} />
					))}
				</Tabs>

				{teamsData.map((team, index) => (
					<TabPanel value={value} index={index} key={team.id} className='w-full mx-auto ml-4 p-0'>
						<Box
							component={motion.div}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={variants}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'left',
								width: '100%',
								padding: 0,
							}}
						>
							<Box
								component={motion.div}
								variants={variants}
								sx={{
									width: '100%',
									height: { xs: '300px', sm: '400px', md: '600px' },
									display: { xs: 'none', md: 'block' },
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									mb: 3,
								}}
							>
								<motion.img
									src={team.image}
									alt={team.title}
									className='w-full h-full object-cover'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.7 }}
								/>
							</Box>

							<motion.div className='w-full text-left' initial="initial" animate="animate" variants={variants}>
								<Typography variant="h6" color='primary'>{team.title}</Typography>
								<Typography variant="body1" sx={{ mt: 1 }}>
									{team.description}
								</Typography>

								<List>
									{team.features.map((feature, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -30 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
										>
											<ListItem className="flex flex-row gap-2" disableGutters>
												<CheckCircleIcon color="primary" />
												<ListItemText primary={feature} />
											</ListItem>
										</motion.div>
									))}
								</List>

								<Typography variant="body1" sx={{ mt: 1 }}>
									{team.caption}
								</Typography>
							</motion.div>
						</Box>
					</TabPanel>
				))}
			</Box>

			<style jsx>{`
				.MuiBox-root.css-19kzrtu {
					padding: 0;
				}
			`}</style>
		</SectionLayout>
	);
}
