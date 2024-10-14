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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { categories, productData } from '../../../data/productData';
import { Link } from 'react-router-dom';

function Products() {
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [filteredProducts, setFilteredProducts] = useState(productData);
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleTabChange = (event, newValue) => {
		setSelectedCategory(newValue);
		const selectedCategoryLabel = categories[newValue];
		if (selectedCategoryLabel === "All") {
			setFilteredProducts(productData);
		} else {
			const filtered = productData.filter(project => project.category === selectedCategoryLabel);
			setFilteredProducts(filtered);
		}
	};

	const handleImageClick = (project) => {
		setSelectedProduct(project);
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		setSelectedProduct(null);
	};

	return (
		<Box className="Products-section p-4">
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
					<Tab
						key={index}
						label={category}
						sx={{ textTransform: 'none', fontWeight: 'bold' }}
					/>
				))}
			</Tabs>

			<Box className="Products-content mt-6" display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
				{filteredProducts.length > 0 ? (
					filteredProducts.map((project, index) => (
						<Slide direction="up" in timeout={{ enter: 500 + index * 100 }} key={project.id}>
							<Card sx={{ width: '100%', maxWidth: 345, position: 'relative', overflow: 'hidden' }}>
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
										onClick={() => handleImageClick(project)}
									/>
								</div>
								<CardContent>
									<Link to={`/portfolio/${project.id}`} className=''>
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
				<Box position="relative">
					{/* <IconButton
						onClick={handleCloseDialog}
						sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
					>
						<CloseIcon />
					</IconButton> */}
					{selectedProduct && (
						<Box height="90vh">
							<CardMedia
								component="img"
								image={selectedProduct.img}
								alt={selectedProduct.title}
								sx={{
									objectFit: 'contain',
									height: '80vh',
									width: '100%',
								}}
							/>
							<Box>
								<Typography variant="h6">{selectedProduct.title}</Typography>
								<Typography variant="body2" color="textSecondary">
									{selectedProduct.subtitle}
								</Typography>
							</Box>
						</Box>
					)}
				</Box>
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
