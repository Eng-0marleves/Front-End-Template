// src/components/Slider.js
import React, { useEffect, useState } from 'react';
import slides from '../../../../data/home-slider';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};

	const handlePrevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const intervalId = setInterval(handleNextSlide, 20000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="slider">
			<div className="slider-content">
				<motion.div
					className="slide"
					key={currentSlide}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5 }}
				>
					<div className='flex align-middle flex-col gap-3 mx-4'>
						<p className='skin-color text-4xl'>{slides[currentSlide].title}</p>
						{/* <p className='text-2xl'>{slides[currentSlide].subtitle}</p> */}
						<p>{slides[currentSlide].description}</p>
						<Link to="/about">
							<Button variant="contained" color="primary">
								Learn More
							</Button>
						</Link>
					</div>
				</motion.div>
				<div className="slider-controllers hidden lg:flex">
					<button onClick={handlePrevSlide} aria-label="Previous slide" className="prev">
						<ArrowBack />
					</button>
					<button onClick={handleNextSlide} aria-label="Next slide" className="next">
						<ArrowForward />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Slider;
