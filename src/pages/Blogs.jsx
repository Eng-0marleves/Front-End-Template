import PageTitle from "../components/shared/PageTitle";
import SectionLayout from "../components/layout/SectionLayout";
import BlogsGrid from "../components/pages/blogs/BlogsGrid";
import BlogFilter from "../components/pages/blogs/BlogFilter";
import { useState } from 'react';
import blogsData from "../data/blogsData";

function Blogs() {
	const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

	const handleFilter = (filteredData) => {
		setFilteredBlogs(filteredData);
	};

	return (
		<SectionLayout>
			<PageTitle title="Blogs" />

			<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
				<div className="md:col-span-9">
					<BlogsGrid data={filteredBlogs} />
				</div>

				<div className="md:col-span-3">
					<BlogFilter data={blogsData} onFilter={handleFilter} />
				</div>
			</div>
		</SectionLayout>
	);
}

export default Blogs;
