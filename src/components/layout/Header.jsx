"use client";
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import "../../assets/css/header.css";

const Header = () => {
	const location = useLocation();
	const [elevated, setElevated] = useState(false);

	const isActive = (path) => location.pathname === path;

	const sections = ['/', '/about', '/services', '/contact'];

	useEffect(() => {
		const handleScroll = () => {
			setElevated(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AppBar
			position="fixed"
			color={elevated ? 'inherit' : 'transparent'}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				px: 2,
				boxShadow: elevated ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
				transition: 'background-color 0.3s',
			}}
		>
			<Toolbar className="w-full" sx={{ justifyContent: 'space-between' }}>
				<Typography variant="h4" component="div" sx={{ color: 'var(--skin-color)', ml: 2 }}>
					LEVES
				</Typography>

				<Box sx={{ display: 'flex', gap: 4 }}>
					{sections.map((path) => (
						<Link
							key={path}
							className={`route ${isActive(path) ? 'active' : ''}`}
							color={location.pathname !== '/' || elevated ? '#000' : '#fff'}
							href={path}
						>
							{path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar >
	);
};

export default Header;
