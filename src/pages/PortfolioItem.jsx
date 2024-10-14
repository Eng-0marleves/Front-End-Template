import { useParams } from 'react-router-dom';
import SectionLayout from '../components/layout/SectionLayout';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from '../data/productData';
import { motion } from 'framer-motion';

function PortfolioItem() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = () => {
			const foundProduct = productData.find((item) => item.id === +id);
			setProduct(foundProduct);
			setLoading(false);
		};

		console.log('fetching product', productData);
		fetchProduct();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!product) {
		return <div>Product not found.</div>;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
	};

	return (
		<SectionLayout>
			<div className="flex flex-col lg:flex-row gap-6 p-6">
				{/* Slider Section with Animation */}
				<motion.div
					className="w-full lg:w-1/2 slider-container"
					initial={{ x: '-100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Slider {...settings}>
						{product.images.map((image, index) => (
							<div key={index}>
								<img src={image} alt={product.title} className="w-full h-auto rounded-md" />
							</div>
						))}
					</Slider>
				</motion.div>

				{/* Details Section with Animation */}
				<motion.div
					className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-md text-left"
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-2xl font-bold mb-4">{product.title}</h1>
					<p className="mb-2"><strong>Category:</strong> {product.category}</p>
					<p className="mb-2"><strong>Origin:</strong> {product.origin}</p>
					<p className="mb-2"><strong>Date:</strong> {product.date}</p>
					<p className="mb-2">
						<strong>URL:</strong> <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{product.url}</a>
					</p>
					<h2 className="mt-4 text-xl">Description</h2>
					<p>{product.description}</p>
				</motion.div>
			</div>
		</SectionLayout>
	);
}

export default PortfolioItem;
