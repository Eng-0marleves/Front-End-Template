import { AccessTime, Person, Tag } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function BlogFooter({ author, date, tags, id }) {
	return (
		<div className='flex justify-between items-center flex-wrap mt-4 text-gray-600 p-4'>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Person sx={{ marginRight: 1 }} color='primary' />
					<Typography variant="body2">{author}</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<AccessTime sx={{ marginRight: 1 }} color='primary' />
					<Typography variant="body2">{date}</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Tag sx={{ marginRight: 1 }} color='primary' />
					<Typography variant="body2">{tags.join(', ')}</Typography>
				</Box>
			</Box>
			{
				id && (
					<Button
						variant="contained"
						color="primary"
						href={`/blog/${id}`}
					>
						Read More
					</Button>
				)
			}
		</div>
	)
}

export default BlogFooter