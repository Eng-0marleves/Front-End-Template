import TeamsContainer from '../components/pages/teams/TeamsContainer'
import SectionLayout from '../components/layout/SectionLayout'
import PageTitle from '../components/shared/PageTitle'
import Founders from '../components/pages/teams/Founders'

function Teams() {
	return (
		<SectionLayout>
			<PageTitle title="Our Teams" />

			<Founders />

			<TeamsContainer />


		</SectionLayout>
	)
}

export default Teams