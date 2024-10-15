import { ArrowUpward } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		const scrolled = window.scrollY > 200;
		setIsVisible(scrolled);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0 },
	};

	return (
		<div className="fixed bottom-8 right-8">
			<motion.div
				initial="hidden"
				animate={isVisible ? 'visible' : 'hidden'}
				variants={variants}
				transition={{ duration: 0.3 }}
			>
				<IconButton
					onClick={scrollTop}
					sx={{
						borderRadius: '50%',
						width: 40,
						height: 40,
						lineHeight: 8,
						background: 'var(--skin-color)',
						':hover': {
							background: 'var(--skin-color)',
							opacity: 0.9,
						},
					}}
					variant="contained"
					color="primary"
				>
					<ArrowUpward fontSize="32px" sx={{ padding: 0, color: '#fff' }} />
				</IconButton>
			</motion.div>
		</div>
	);
}

export default ScrollTop;
