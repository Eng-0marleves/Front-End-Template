import SectionLayout from '../components/layout/SectionLayout';
import { useParams } from 'react-router-dom';
import blogsData from '../data/blogsData';
import BlogSection from '../components/pages/blogs/BlogSection';
import { Box } from '@mui/material';
import BlogFooter from '../components/pages/blogs/BlogFooter';

function BlogPage() {
	const { id } = useParams();

	const foundBlog = blogsData.find(b => b.id === +id);

	console.log(foundBlog.content);

	return (
		<SectionLayout>
			<Box sx={{ boxShadow: 2 }}>
				{foundBlog.content.map((contentItem, index) => (
					<BlogSection
						key={index}
						img={contentItem.img}
						title={contentItem.title}
						description={contentItem.description}
					/>
				))}

				<BlogFooter author={foundBlog.author} date={foundBlog.date} tags={foundBlog.tags} />
			</Box>
		</SectionLayout>
	);
}

export default BlogPage;
