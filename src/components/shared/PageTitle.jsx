import { Typography } from '@mui/material'

function PageTitle({ title }) {
	return (
		<Typography className="title" data-title="About Us" variant="h4" sx={{ mt: 4 }}>
			{title}
		</Typography>
	)
}

export default PageTitle