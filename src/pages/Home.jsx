import React, { useRef } from 'react';
import AboutHeroSection from "../components/pages/about/AboutHeroSection";
import "../assets/css/home.css";
import HeroSection from "../components/pages/home/hero-section/HeroSection";
import ServicesContainer from "../components/pages/services/services/ServicesContainer";
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useOnScreen';

function Home() {
	const heroRef = useRef();
	const aboutRef = useRef();
	const servicesRef = useRef();

	const isHeroVisible = useOnScreen(heroRef);
	const isAboutVisible = useOnScreen(aboutRef);
	const isServicesVisible = useOnScreen(servicesRef);

	return (
		<div className="Home">
			<motion.div
				ref={heroRef}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: isHeroVisible ? 1 : 0, y: isHeroVisible ? 0 : 50 }}
				transition={{ duration: 0.5 }}
			>
				<HeroSection />
			</motion.div>

			<div className="container mt-8 mx-auto p-4 flex flex-col gap-12">
				<motion.div
					ref={aboutRef}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: isAboutVisible ? 1 : 0, y: isAboutVisible ? 0 : 50 }}
					transition={{ duration: 0.5 }}
				>
					<AboutHeroSection />
				</motion.div>

				<motion.div
					ref={servicesRef}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: isServicesVisible ? 1 : 0, y: isServicesVisible ? 0 : 50 }}
					transition={{ duration: 0.5 }}
				>
					<ServicesContainer />
				</motion.div>
			</div>
		</div>
	);
}

export default Home;
