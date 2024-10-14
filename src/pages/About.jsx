import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLayout from "../components/layout/SectionLayout";
import PageTitle from "../components/shared/PageTitle";
import AboutHeroSection from "../components/pages/about/AboutHeroSection";
import States from "../components/pages/about/States";
import Testimonials from "../components/pages/about/Testmentiols";
import Brands from '../components/pages/about/Brands';
import AboutServices from '../components/pages/about/AboutServices';

const About = () => {
	const titleRef = useRef(null);
	const heroSectionRef = useRef(null);
	const statesRef = useRef(null);
	const testimonialsRef = useRef(null);
	const servicesDataRef = useRef(null);

	const isTitleInView = useInView(titleRef, { once: true });
	const isHeroSectionInView = useInView(heroSectionRef, { once: true });
	const isStatesInView = useInView(statesRef, { once: true });
	const isTestimonialsInView = useInView(testimonialsRef, { once: true });
	const isServicesInView = useInView(servicesDataRef, { once: true });

	return (
		<SectionLayout>
			<motion.div
				ref={titleRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
			>
				<PageTitle title="About Us" />
			</motion.div>

			<motion.div
				ref={heroSectionRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isHeroSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<AboutHeroSection />
			</motion.div>

			<motion.div
				ref={statesRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isStatesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<States />
			</motion.div>

			<motion.div
				ref={testimonialsRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<Testimonials />
			</motion.div>

			<Brands />

			<motion.div
				ref={servicesDataRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>

				<AboutServices isVisible={isServicesInView} />
			</motion.div>
		</SectionLayout>
	);
};

export default About;
