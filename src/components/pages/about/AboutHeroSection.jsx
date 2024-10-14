import DynamicHeroSection from "../../shared/DynamicHeroSection";

function AboutHeroSection() {
	const heroData = {
		img: "https://img.freepik.com/premium-photo/modern-workspace-harmony-diverse-teams-collaborating-bright-open-office-environments_689832-21478.jpg?w=1380",
		title: "About Our Company",
		quote: "Delivering excellence through innovation and creativity.",
		description:
			"We are committed to delivering exceptional results for our clients by leveraging cutting-edge technologies and a customer-centric approach.",
		features: [
			"High-quality services tailored for you",
			"Experienced professionals",
			"Customer-first approach",
		],
		caption: "Our commitment to excellence drives every project we undertake.",
	};

	return <DynamicHeroSection {...heroData} />;
}

export default AboutHeroSection;
