import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function BlogSection({ img, title, description, }) {
	return (
		<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
			<Card sx={{ width: '100%', boxShadow: 0, borderRadius: 0 }}>
				{img && (
					<img src={img} alt={title} className='w-full h-96 object-cover object-center' />
				)}
				<CardContent>
					<div className='text-left flex flex-col justify-start gap-4'>
						<Typography variant="h5" component="div">
							{title}
						</Typography>
						<Typography variant="body2" color="#111">
							{description}
						</Typography>
					</div>
				</CardContent>
			</Card>
		</Box>
	);
}

export default BlogSection;
