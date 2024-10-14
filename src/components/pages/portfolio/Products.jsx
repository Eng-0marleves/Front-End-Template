import React, { useState } from 'react';
import {
	Tabs,
	Tab,
	Box,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Slide,
	Dialog,
	IconButton,
	Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { categories, productData } from '../../../data/productData';
import { Link } from 'react-router-dom';

function Products() {
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [filteredProducts, setFilteredProducts] = useState(productData);
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedProductIndex, setSelectedProductIndex] = useState(null);

	const handleTabChange = (event, newValue) => {
		setSelectedCategory(newValue);
		const selectedCategoryLabel = categories[newValue];
		if (selectedCategoryLabel === "All") {
			setFilteredProducts(productData);
		} else {
			const filtered = productData.filter((project) => project.category === selectedCategoryLabel);
			setFilteredProducts(filtered);
		}
	};

	const handleImageClick = (index) => {
		setSelectedProductIndex(index);
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		setSelectedProductIndex(null);
	};

	const handleNext = () => {
		setSelectedProductIndex((prevIndex) =>
			prevIndex === filteredProducts.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setSelectedProductIndex((prevIndex) =>
			prevIndex === 0 ? filteredProducts.length - 1 : prevIndex - 1
		);
	};

	return (
		<Box className="Products-section">
			<Tabs
				value={selectedCategory}
				onChange={handleTabChange}
				variant="scrollable"
				scrollButtons="auto"
				centered
				sx={{
					borderBottom: '1px solid #e0e0e0',
					'.MuiTabs-flexContainer': {
						justifyContent: 'center',
					},
					'.Mui-selected': {
						color: 'primary.main',
					},
				}}
			>
				{categories.map((category, index) => (
					<Tab key={index} label={category} sx={{ textTransform: 'none', fontWeight: 'bold' }} />
				))}
			</Tabs>

			<Box
				className="Products-content mt-6"
				display="grid"
				gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
				gap={4}
			>
				{filteredProducts.length > 0 ? (
					filteredProducts.map((project, index) => (
						<Slide direction="up" in timeout={{ enter: 500 + index * 100 }} key={project.id}>
							<Card sx={{ width: '100%', maxWidth: 345, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
								<div className="overflow-hidden">
									<CardMedia
										component="img"
										image={project.img}
										alt={project.title}
										sx={{
											objectFit: 'cover',
											transition: 'transform 0.3s ease',
											height: '300px',
										}}
										className="card-media"
										onClick={() => handleImageClick(index)}
									/>
								</div>
								<CardContent>
									<Link to={`/portfolio/${project.id}`} className="hover:text-primary transition-colors">
										<Typography gutterBottom variant="h6" component="div">
											{project.title}
										</Typography>
									</Link>
									<Typography variant="body2" color="textSecondary">
										{project.subtitle}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										Category: {project.category}
									</Typography>
								</CardContent>
							</Card>
						</Slide>
					))
				) : (
					<Typography variant="body1" color="textSecondary" align="center">
						No Products found in this category.
					</Typography>
				)}
			</Box>

			<Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
				{selectedProductIndex !== null && (
					<Fade in key={selectedProductIndex} timeout={500}>
						<Box height="fit-content" width="100%" className="w-full position-relative">
							<IconButton
								onClick={handleCloseDialog}
								sx={{ position: 'fixed', top: 8, right: 8, color: '#fff', zIndex: 1 }}
							>
								<CloseIcon />
							</IconButton>

							<IconButton
								onClick={handlePrev}
								sx={{ position: 'fixed', top: '50%', left: '10px', zIndex: 10, color: 'white' }}
							>
								<ArrowBackIos />
							</IconButton>

							<CardMedia
								component="img"
								image={filteredProducts[selectedProductIndex].img}
								alt={filteredProducts[selectedProductIndex].title}
								sx={{
									objectFit: 'cover',
									maxHeight: '80vh',
									width: '100%',
								}}
							/>
							<Box className="p-2">
								<Typography variant="h6" color="primary">
									{filteredProducts[selectedProductIndex].title}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{filteredProducts[selectedProductIndex].subtitle}
								</Typography>
							</Box>

							<IconButton
								onClick={handleNext}
								sx={{ position: 'fixed', top: '50%', right: '10px', zIndex: 10, color: 'white' }}
							>
								<ArrowForwardIos />
							</IconButton>
						</Box>
					</Fade>
				)}
			</Dialog>



			<style jsx>{`
				.card-media {
					cursor: pointer;
					overflow: hidden;
				}

				.card-media:hover {
					transform: scale(1.1);
				}
			`}</style>
		</Box>
	);
}

export default Products;
