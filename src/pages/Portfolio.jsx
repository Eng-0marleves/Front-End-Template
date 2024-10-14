import Products from '../components/pages/portfolio/Products'
import SectionLayout from '../components/layout/SectionLayout'
import PageTitle from '../components/shared/PageTitle'
import React from 'react'
import Founders from '../components/pages/portfolio/Founders'

function Portfolio() {
	return (
		<SectionLayout>
			<PageTitle title="Portfolio" />

			<Founders />

			<Products />
		</SectionLayout>)
}

export default Portfolio
