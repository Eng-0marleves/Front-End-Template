import React, { useState } from 'react';
import PageTitle from "../components/shared/PageTitle";
import SectionLayout from "../components/layout/SectionLayout";
import {
	Box,
	Typography,
	TextField,
	Button,
	Grid,
	Alert
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		subject: '',
		email: '',
		message: '',
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setError('All fields are required.');
			setSuccess('');
			return;
		}

		console.log('Form submitted:', formData);
		setSuccess('Your message has been sent successfully!');
		setError('');

		setTimeout(() => {
			setSuccess('');
		}, 5000);

		setFormData({ name: '', subject: '', email: '', message: '' });
	};

	return (
		<SectionLayout>
			<PageTitle title="Contact Us" />
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Box
							sx={{
								p: 3,
								borderRadius: 2,
								boxShadow: '0 0 4px #ccc',
								backgroundColor: '#fff',
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								justifyContent: { xs: 'space-between', sm: 'center' },
								flexWrap: 'wrap',
								gap: 2
							}}
						>
							<Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 200px' }}>
								<LocationOnIcon color="primary" sx={{ mr: 1 }} />
								<Typography variant="body1">
									<strong className='text-primary'>Address:</strong> A108 Adam Street
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 200px' }}>
								<PhoneIcon color="primary" sx={{ mr: 1 }} />
								<Typography variant="body1">
									<strong className='text-primary'>Call Us:</strong> +1 5589 55488 55
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 200px' }}>
								<EmailIcon color="primary" sx={{ mr: 1 }} />
								<Typography variant="body1">
									<strong className='text-primary'>Email Us:</strong> info@example.com
								</Typography>
							</Box>
						</Box>
					</motion.div>
				</Grid>
			</Grid>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Box sx={{ p: 3, borderRadius: 2, boxShadow: '0 0 4px #ccc', backgroundColor: '#fff' }}>
					<form onSubmit={handleSubmit}>
						<Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={4}>
							<TextField
								name="name"
								label="Your Name"
								variant="outlined"
								fullWidth
								margin="normal"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<TextField
								name="subject"
								label="Subject"
								variant="outlined"
								fullWidth
								margin="normal"
								value={formData.subject}
								onChange={handleChange}
								required
							/>
						</Box>
						<TextField
							name="email"
							label="Your Email"
							type="email"
							variant="outlined"
							fullWidth
							margin="normal"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<TextField
							name="message"
							label="Message"
							multiline
							rows={4}
							variant="outlined"
							fullWidth
							margin="normal"
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<Box mt={2} display="flex" justifyContent="center">
							<Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none', boxShadow: 'none' }}>
								Send Message
							</Button>
						</Box>
					</form>

					{error && <Alert severity="error" sx={{ mt: 2, position: 'fixed', bottom: 20, left: 20 }}>{error}</Alert>}
					{success && <Alert severity="success" sx={{ mt: 2, position: 'fixed', bottom: 20, left: 20 }}>{success}</Alert>}
				</Box>
			</motion.div>
		</SectionLayout>
	);
}

export default Contact;
