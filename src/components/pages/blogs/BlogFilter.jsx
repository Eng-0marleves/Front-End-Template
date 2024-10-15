import { Box, TextField, Chip, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function BlogFilter({ data, onFilter }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTags, setSelectedTags] = useState([]);
	const [uniqueTags, setUniqueTags] = useState([]);

	useEffect(() => {
		const tagsSet = new Set();
		data.forEach(blog => {
			blog.tags?.forEach(tag => tagsSet.add(tag));
		});
		setUniqueTags([...tagsSet]);
	}, [data]);

	useEffect(() => {
		const filteredBlogs = data.filter(blog => {
			const { title, description } = blog.content[0];

			const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				description.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesTags = selectedTags.length === 0 || blog.tags?.some(tag => selectedTags.includes(tag));

			return matchesSearch && matchesTags;
		});

		onFilter(filteredBlogs);
	}, [searchTerm, selectedTags, data, onFilter]);

	const handleTagClick = (tag) => {
		setSelectedTags(prevTags => prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]);
	};

	return (
		<Box width="100%" sx={{ boxShadow: 2, p: 2 }}>
			<TextField
				fullWidth
				label="Search by title or description"
				variant="outlined"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				sx={{ marginBottom: 2 }}
			/>

			<Typography className='text-left text-primary' variant="h6">Filter by Tags:</Typography>
			<Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
				{uniqueTags.map((tag, index) => (
					<Chip
						key={index}
						label={tag}
						onClick={() => handleTagClick(tag)}
						color={selectedTags.includes(tag) ? 'primary' : 'default'}
						sx={{ m: 0.5 }}
					/>
				))}
			</Stack>

			<Typography className='text-left text-primary' variant="h6" sx={{ marginBottom: 2 }}>Latest Blogs:</Typography>
			{data.slice(0, 3).map((blog, index) => (
				<Box key={index} sx={{ marginBottom: 2 }}>
					<img src={blog.content[0].img} alt={blog.content[0].title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
					<Typography variant="subtitle1">{blog.content[0].title}</Typography>
				</Box>
			))}
		</Box>
	);
}

export default BlogFilter;
