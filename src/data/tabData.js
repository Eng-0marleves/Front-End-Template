import { Construction, Code, DesignServices, BusinessCenter } from '@mui/icons-material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const tabData = [
	{
		id: 0,
		tabTitle: 'Construction',
		icon: <Construction />,
		content: {
			img: 'https://img.freepik.com/premium-photo/two-architects-engineers-are-meeting-discuss-inspect-house-designs-meet-building-construction-standards-interior-design-decoration-ideas_528263-4667.jpg	',
			title: 'Professional Construction Services',
			description: 'We provide high-quality construction services for all types of projects, ensuring safety, durability, and efficiency.',
			quote: '"Building the future, restoring the past."',
			features: [
				'Residential & Commercial Projects',
				'Renovations and Remodeling',
				'Structural Integrity Assurance',
				'Green Building Techniques',
			],
			caption: 'Construction work tailored to meet your project’s unique requirements.',
		},
	},
	{
		id: 1,
		tabTitle: 'Development',
		icon: <Code />,
		content: {
			img: 'https://th.bing.com/th/id/OIP.q4GjLGAAxIUefdD7qTtAiwHaE8?rs=1&pid=ImgDetMain',
			title: 'Full-Stack Development Services',
			description: 'Our development services range from full-stack web applications to mobile apps, delivering fast and reliable solutions.',
			quote: '"Code that powers innovation."',
			features: [
				'Full-Stack Development',
				'Mobile Application Development',
				'API Development & Integration',
				'Performance Optimization',
			],
			caption: 'Bringing your ideas to life with high-quality code and innovation.',
		},
	},
	{
		id: 2,
		tabTitle: 'Design',
		icon: <DesignServices />,
		content: {
			img: 'https://wpengine.com/wp-content/uploads/2016/06/design-team-header.png',
			title: 'Innovative Design Solutions',
			description: 'We offer creative design solutions that are tailored to meet your business needs, from branding to user interface designs.',
			quote: '"Design is not just what it looks like and feels like. Design is how it works."',
			features: [
				'User Interface (UI) Design',
				'Graphic Design & Branding',
				'User Experience (UX) Enhancements',
				'Prototyping and Wireframing',
			],
			caption: 'Enhancing customer experience through innovative design.',
		},
	},
	{
		id: 3,
		tabTitle: 'Marketing',
		icon: <TipsAndUpdatesIcon />,
		content: {
			img: 'https://searchengineland.com/wp-content/seloads/2022/06/Shutterstock_1315381259.jpg',
			title: 'Strategic Marketing Services',
			description: 'Our marketing services help businesses grow their audience through targeted strategies that drive engagement and sales.',
			quote: '"Marketing is no longer about the stuff you make, but about the stories you tell."',
			features: [
				'Digital Marketing Strategies',
				'Search Engine Optimization (SEO)',
				'Social Media Marketing',
				'Content Marketing & Branding',
			],
			caption: 'Maximizing your reach with creative and data-driven marketing strategies.',
		},
	},
	{
		id: 4,
		tabTitle: 'Consulting',
		icon: <BusinessCenter />,
		content: {
			img: 'https://th.bing.com/th/id/OIP.Oz5Ij2gtBEUP_ThlNhgy6QHaE8?rs=1&pid=ImgDetMain',
			title: 'Expert Business Consulting',
			description: 'We provide expert consulting services to help you streamline operations, improve efficiency, and drive business growth.',
			quote: '"Consulting is about making an impact that matters."',
			features: [
				'Business Strategy Development',
				'Operational Efficiency Improvements',
				'Market Analysis & Insights',
				'Project Management Support',
			],
			caption: 'Helping you navigate complex challenges with strategic business insights.',
		},
	},
];

export default tabData;
