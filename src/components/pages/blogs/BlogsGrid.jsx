import React, { useState } from 'react';
import { Box, Grid, Pagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BlogSection from './BlogSection';
import BlogFooter from './BlogFooter';

function BlogsGrid({ data }) {
	const [page, setPage] = useState(1);
	const [blogsPerPage, setBlogsPerPage] = useState(4);
	const totalBlogs = data.flat();
	const indexOfLastBlog = page * blogsPerPage;
	const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

	const currentBlogs = totalBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

	const handleChangePage = (event, value) => {
		setPage(value);
	};

	const handleChangeBlogsPerPage = (event) => {
		setBlogsPerPage(event.target.value);
		setPage(1);
	};

	return (
		<Box>
			<Grid container spacing={4} direction="column">
				{currentBlogs.map((blog, index) => (
					<Grid item xs={12} key={index}>
						{blog.content && blog.content.length > 0 ? (
							<div className='shadow-md'>
								<BlogSection
									img={blog.content[0].img}
									title={blog.content[0].title}
									description={blog.content[0].description}
									author={blog.author}
									date={blog.date}
									tags={blog.tags}
									id={blog.id}
								/>

								<BlogFooter author={blog.author} date={blog.date} tags={blog.tags} id={blog.id} />
							</div>
						) : (
							<Box>No content available</Box>
						)}
					</Grid>
				))}
			</Grid>
			<div className="flex justify-between items-center mt-8">
				<FormControl variant="outlined" className='w-32'>
					<InputLabel id="blogs-per-page-label">Blogs Per Page</InputLabel>
					<Select
						labelId="blogs-per-page-label"
						value={blogsPerPage}
						onChange={handleChangeBlogsPerPage}
						label="Blogs Per Page"
					>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={12}>12</MenuItem>
						<MenuItem value={16}>16</MenuItem>
					</Select>
				</FormControl>

				<Pagination
					count={Math.ceil(totalBlogs.length / blogsPerPage)}
					page={page}
					onChange={handleChangePage}
					color="primary"
					sx={{ display: 'flex', justifyContent: 'center' }}
				/>
			</div>
		</Box >
	);
}

export default BlogsGrid;
