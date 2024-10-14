import { Box, Typography } from '@mui/material';
import "../../../../assets/css/service.css";

function Service({ icon: Icon, title, description }) {
	return (
		<Box component="div" className="p-10 border shadow card">
			<div className="service-icon">
				<Icon sx={{ fontSize: 28 }} />
			</div>
			<Box>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="body2">
					{description}
				</Typography>
			</Box>
		</Box>
	);
}

export default Service;
