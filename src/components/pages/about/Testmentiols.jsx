import React from 'react';
import { Rating } from '@mui/material';
import { motion } from 'framer-motion';
import testimonialsData from '../../../data/testimonialsData';

const Testimonials = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

			{testimonialsData.map((testimonial, index) => (
				<motion.div
					key={index}
					className="bg-white p-6 rounded-md shadow-md"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.2, duration: 0.5 }}
				>
					<div className='flex gap-4'>
						<img
							alt={testimonial.name}
							src={testimonial.image}
							style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
						/>

						<div className='text-left'>
							<h3 className="text-lg font-semibold">{testimonial.name}</h3>
							<p className="text-gray-600 mb-1">{testimonial.role}</p>
							<Rating value={testimonial.rating} precision={0.5} readOnly />
						</div>
					</div>
					<p className="text-gray-500 text-left italic">{testimonial.testimonial}</p>
				</motion.div>
			))}
		</div>
	);
};

export default Testimonials;
