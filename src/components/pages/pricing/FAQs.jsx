import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { motion } from 'framer-motion';
import faqsData from '../../../data/faqsData';

function FAQs() {
	const [expanded, setExpanded] = useState(0);

	const handleChange = (index) => (event, isExpanded) => {
		setExpanded(isExpanded ? index : false);
	};

	// Motion variant for animation
	const accordionAnimation = {
		initial: { opacity: 0, y: -20 },
		animate: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1, // Delay based on index
				duration: 0.3,
			}
		}),
		exit: {
			opacity: 0,
			y: -20,
			transition: { duration: 0.2 },
		}
	};

	return (
		<Box>
			{faqsData.map((faq, index) => (
				<motion.div
					key={index}
					variants={accordionAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
					custom={index} // Pass the index for delay calculation
				>
					<Accordion
						expanded={expanded === index}
						onChange={handleChange(index)}
						sx={{
							marginBottom: 4,
							boxShadow: 0,
							backgroundColor: expanded === index ? 'primary.main' : '#eee',
							color: expanded === index ? 'common.white' : 'text.primary',
							transition: 'background-color 0.3s ease, color 0.3s ease',
							'&:hover': {
								backgroundColor: expanded === index ? 'primary.main' : 'grey.100',
								color: expanded === index ? 'common.white' : 'primary.main',
							}
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: expanded === index ? 'common.white' : 'primary.main' }} />}
							aria-controls={`panel${index}-content`}
							id={`panel${index}-header`}
						>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<HelpOutlineIcon sx={{ mr: 1, color: expanded === index ? 'common.white' : 'primary.main' }} />
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									{faq.question}
								</Typography>
							</Box>
						</AccordionSummary>
						<AccordionDetails>
							<Typography textAlign='left'>
								{faq.answer}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</motion.div>
			))}
		</Box>
	);
}

export default FAQs;
