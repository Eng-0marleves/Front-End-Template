import React from 'react';
import CountUp from 'react-countup';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DescriptionIcon from '@mui/icons-material/Description';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GroupIcon from '@mui/icons-material/Group';

const Stats = () => {
	const stats = [
		{ icon: <EmojiEmotionsIcon style={{ fontSize: '3rem', color: 'var(--skin-color)' }} />, value: 232, label: 'Happy Clients', description: 'consequuntur quae' },
		{ icon: <DescriptionIcon style={{ fontSize: '3rem', color: 'var(--skin-color)' }} />, value: 521, label: 'Projects', description: 'adipisci atque cum quia aut' },
		{ icon: <HeadsetMicIcon style={{ fontSize: '3rem', color: 'var(--skin-color)' }} />, value: 1453, label: 'Hours Of Support', description: 'aut commodi quaerat' },
		{ icon: <GroupIcon style={{ fontSize: '3rem', color: 'var(--skin-color)' }} />, value: 32, label: 'Hard Workers', description: 'rerum asperiores dolor' },
	];

	return (
		<div className="container mx-auto py-5">
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat, index) => (
					<div key={index} className="flex items-start gap-2">
						<div>
							<div className="mb-4">{stat.icon}</div>
						</div>
						<div className="text-left">
							<div className="text-4xl font-bold text-gray-800 mb-2">
								<CountUp end={stat.value} duration={2.5} />
							</div>
							<div className="text-gray-600">
								<strong style={{ color: 'var(--skin-color)' }}>{stat.label}</strong> {stat.description}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
