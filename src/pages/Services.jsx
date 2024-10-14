import PageTitle from "../components/shared/PageTitle"
import SectionLayout from "../components/layout/SectionLayout"
import ServicesContainer from "../components/pages/services/services/ServicesContainer"
import Skills from "../components/pages/services/Skills"
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { motion } from 'framer-motion';

function Services() {
	const servicesRef = useRef();
	const skillsRef = useRef();

	const isServicesVisible = useOnScreen(servicesRef);
	const isSkillsVisible = useOnScreen(skillsRef);

	return (
		<SectionLayout>
			<PageTitle title="Our Services" />


			<motion.div
				ref={servicesRef}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: isServicesVisible ? 1 : 0, y: isServicesVisible ? 0 : 50 }}
				transition={{ duration: 0.5 }}
			>
				<ServicesContainer />
			</motion.div>

			<motion.div
				ref={skillsRef}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: isSkillsVisible ? 1 : 0, y: isSkillsVisible ? 0 : 50 }} // Correct the condition here
				transition={{ duration: 0.5 }}
			>
				<Skills isVisable={isSkillsVisible} />
			</motion.div>


		</SectionLayout>
	)
}

export default Services