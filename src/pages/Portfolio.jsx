import Products from '../components/pages/portfolio/Products'
import SectionLayout from '../components/layout/SectionLayout'
import PageTitle from '../components/shared/PageTitle'
import React from 'react'

function Portfolio() {
	return (
		<SectionLayout>
			<PageTitle title="Portfolio" />

			<Products />
		</SectionLayout>
	)
}

export default Portfolio
