import React from 'react';
import { Box, Typography, Link, IconButton, List, ListItem, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
	return (
		<>
			<Box
				component="footer"
				padding="40px"
				bgcolor="#111"
				color="white"
				display="flex"
				justifyContent="space-between"
				flexWrap='wrap'
				flexDirection={{ xs: 'column', md: 'row' }}
				gap={4}
				textAlign='left'
			>
				<Box>
					<Typography variant="h4" gutterBottom style={{ color: 'var(--skin-color)' }}>
						LEVES
					</Typography>
					<Typography variant="body2">
						Empowering innovation, delivering excellence.
					</Typography>
				</Box>

				{/* Contact Us Section */}
				<Box>
					<Typography variant="h6" gutterBottom>
						Contact Us
					</Typography>
					<List>
						<ListItem disableGutters>
							<LocationOnIcon color="primary" />
							<ListItemText primary="1234 Street Name, City, Country" />
						</ListItem>

						<ListItem disableGutters>
							<EmailIcon color="primary" />
							<ListItemText primary="info@leves.com" />
						</ListItem>

						<ListItem disableGutters>
							<PhoneIcon color="primary" />
							<ListItemText primary="+1 234 567 890" />
						</ListItem>
					</List>
				</Box>

				{/* Quick Links Section */}
				<Box>
					<Typography variant="h6" gutterBottom>
						Quick Links
					</Typography>
					<List>
						<ListItem disableGutters>
							<ChevronRightIcon color="primary" />
							<ListItemText primary={<Link href="/" color="inherit" underline="hover">Home</Link>} />
						</ListItem>

						<ListItem disableGutters>
							<ChevronRightIcon color="primary" />
							<ListItemText primary={<Link href="/about" color="inherit" underline="hover">About Us</Link>} />
						</ListItem>

						<ListItem disableGutters>
							<ChevronRightIcon color="primary" />
							<ListItemText primary={<Link href="/services" color="inherit" underline="hover">Services</Link>} />
						</ListItem>

						<ListItem disableGutters>
							<ChevronRightIcon color="primary" />
							<ListItemText primary={<Link href="/contact" color="inherit" underline="hover">Contact</Link>} />
						</ListItem>
					</List>
				</Box>

				<Box>
					<Typography variant="h6" gutterBottom>
						Follow Us
					</Typography>
					<Typography variant="body2" gutterBottom>
						Stay connected with us through social platforms!
					</Typography>
					<Box display="flex" gap={2}>
						<IconButton
							href="https://facebook.com"
							target="_blank"
							aria-label="Facebook"
							color="primary"
							sx={{
								border: '2px solid transparent',
								transition: 'color 0.3s, border-color 0.3s',
								'&:hover': {
									color: 'primary.main',
									borderColor: 'primary.main',
								}
							}}
						>
							<FacebookIcon />
						</IconButton>
						<IconButton
							href="https://twitter.com"
							target="_blank"
							aria-label="Twitter"
							color="primary"
							sx={{
								border: '2px solid transparent',
								transition: 'color 0.3s, border-color 0.3s',
								'&:hover': {
									color: 'primary.main',
									borderColor: 'primary.main',
								}
							}}
						>
							<TwitterIcon />
						</IconButton>
						<IconButton
							href="https://instagram.com"
							target="_blank"
							aria-label="Instagram"
							color="primary"
							sx={{
								border: '2px solid transparent',
								transition: 'color 0.3s, border-color 0.3s',
								'&:hover': {
									color: 'primary.main',
									borderColor: 'primary.main',
								}
							}}
						>
							<InstagramIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>

			{/* Copyright Section */}
			<Box
				textAlign="center"
				width="100%"
				borderTop="1px solid #333"
				padding="20px"
				backgroundColor="#111"
			>
				<Typography variant="body2" color="#eee" className='flex justify-center gap-2'>
					© {new Date().getFullYear()} <span className='text-primary'>LEVES</span> All rights reserved.
				</Typography>
			</Box>
		</>
	);
}

export default Footer;
