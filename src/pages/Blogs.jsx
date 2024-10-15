import PageTitle from "../components/shared/PageTitle";
import SectionLayout from "../components/layout/SectionLayout";
import BlogsGrid from "../components/pages/blogs/BlogsGrid";
import BlogFilter from "../components/pages/blogs/BlogFilter";
import { useState } from 'react';
import blogsData from "../data/blogsData";
import { motion } from 'framer-motion';

function Blogs() {
	const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

	const handleFilter = (filteredData) => {
		setFilteredBlogs(filteredData);
	};

	// Animation variants
	const gridAnimation = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -50 }
	};

	const filterAnimation = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 50 }
	};

	return (
		<SectionLayout>
			<PageTitle title="Blogs" />

			<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
				<motion.div
					className="md:col-span-9"
					variants={gridAnimation}
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.5 }}
				>
					<BlogsGrid data={filteredBlogs} />
				</motion.div>

				<motion.div
					className="md:col-span-3"
					variants={filterAnimation}
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.5 }}
				>
					<BlogFilter data={blogsData} onFilter={handleFilter} />
				</motion.div>
			</div>
		</SectionLayout>
	);
}

export default Blogs;
