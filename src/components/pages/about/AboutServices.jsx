import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { motion } from 'framer-motion';
import tabData from '../../../data/tabData';
import DynamicHeroSection from '../../shared/DynamicHeroSection';

function AboutServices({ isVisible }) {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	return (
		<Box className="about-services-container p-4">
			<Tabs
				value={selectedTab}
				onChange={handleTabChange}
				aria-label="services-tabs"
				variant="scrollable"
				scrollButtons="auto"
				allowScrollButtonsMobile
				centered
				sx={{
					borderBottom: '1px solid #e0e0e0',
					'.MuiTab-root': {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '8px',
						transition: 'border-color 0.3s, color 0.3s',
					},
					'.Mui-selected': {
						color: 'primary.main',
					},
					'.MuiTabs-scroller': {
						display: 'flex',
						justifyContent: 'center',
					},
					'.MuiTabs-flexContainer': {
						justifyContent: 'center',
					},
				}}
			>
				{tabData.map((tab) => (
					<Tab
						key={tab.id}
						label={
							<Box
								className="hidden md:flex items-center justify-between gap-2"
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<Box
									className="flex items-center justify-between gap-2"
									sx={{
										color: 'inherit',
										'&:hover': {
											color: 'primary.main',
										},
									}}
								>
									{tab.icon}
									{tab.tabTitle}
								</Box>
							</Box>
						}
						disableRipple
						className="text-gray-700 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-2 md:border-0"
					/>
				))}
			</Tabs>

			<Box className="tab-content mt-6">
				{tabData.map((tab) => (

					isVisible && (
						<motion.div
							key={tab.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: selectedTab === tab.id ? 1 : 0, y: selectedTab === tab.id ? 0 : 50 }}
							transition={{ duration: 0.5 }}
							style={{ display: selectedTab === tab.id ? 'block' : 'none' }}
						>
							<DynamicHeroSection
								img={tab.content.img}
								title={tab.content.title}
								description={tab.content.description}
								quote={tab.content.quote}
								features={tab.content.features}
								caption={tab.content.caption}
							/>
						</motion.div>
					)
				))}
			</Box>
		</Box>
	);
}

export default AboutServices;
