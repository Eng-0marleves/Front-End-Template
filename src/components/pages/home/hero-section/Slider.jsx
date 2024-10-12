import React, { useEffect, useState } from 'react';
import slides from '../../../../data/home-slider';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

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
				<div className="slide flex align-middle flex-col gap-3">
					<p className='skin-color text-4xl'>{slides[currentSlide].title}</p>
					{/* <p className='text-2xl'>{slides[currentSlide].subtitle}</p> */}
					<p>{slides[currentSlide].description}</p>
					<Link to="/about">
						<Button variant="contained" color="primary">
							Learn More
						</Button>
					</Link>
				</div>
				<div className="slider-controllers">
					<button onClick={handlePrevSlide} aria-label="Previous slide" className="prev" variant="contained" color="primary">
						<ArrowBack />
					</button>
					<button onClick={handleNextSlide} aria-label="Next slide" className="next" variant="contained" color="primary">
						<ArrowForward />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Slider;
