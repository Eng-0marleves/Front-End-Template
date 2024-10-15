import { Diamond } from '@mui/icons-material';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
const pricesData = [
	{
		title: 'Basic Plan',
		icon: ViewInArRoundedIcon,
		pricePerMonth: '$10',
		features: {
			'Feature 1': true,
			'Feature 2': true,
			'Feature 3': false,
			'Feature 4': false,
			'Feature 5': false,
		},
		popular: false,
	},
	{
		title: 'Standard Plan',
		icon: RocketRoundedIcon,
		pricePerMonth: '$20',
		features: {
			'Feature 1': true,
			'Feature 2': true,
			'Feature 3': true,
			'Feature 4': true,
			'Feature 5': false,
		},
		popular: true,
	},
	{
		title: 'Premium Plan',
		icon: Diamond,
		pricePerMonth: '$30',
		features: {
			'Feature 1': true,
			'Feature 2': true,
			'Feature 3': true,
			'Feature 4': true,
			'Feature 5': true,
		},
		popular: false,
	},
];

export default pricesData;
