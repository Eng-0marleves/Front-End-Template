import PageTitle from "../components/shared/PageTitle"
import SectionLayout from "../components/layout/SectionLayout"
import Prices from "../components/pages/pricing/Prices"
import FAQs from "../components/pages/pricing/FAQs"
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

function Pricing() {
	const pricesRef = useRef(null);
	const faqsRef = useRef(null);

	const isPricesInView = useInView(pricesRef, { once: true });
	const isFAQsInView = useInView(faqsRef, { once: true });
	return (
		<SectionLayout>
			<PageTitle title="Pricing" />

			<motion.div
				ref={pricesRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isPricesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
			>
				<Prices />
			</motion.div>

			<motion.div
				ref={faqsRef}
				initial={{ opacity: 0, y: 20 }}
				animate={isFAQsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5 }}
			>
				<FAQs />
			</motion.div>
		</SectionLayout>
	)
}

export default Pricing