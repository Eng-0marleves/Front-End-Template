"use client";
import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Link,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import "../../assets/css/header.css";

const Header = () => {
	const location = useLocation();
	const [elevated, setElevated] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const sections = ['/', '/about', '/services', '/portfolio', '/teams', '/contact'];

	useEffect(() => {
		const handleScroll = () => {
			if (location.pathname === '/') {
				setElevated(window.scrollY > 50);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [location.pathname]);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerOpen(open);
	};

	const drawerList = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{sections.map((path) => (
					<ListItem
						button
						key={path}
						component="a"
						href={path}
						selected={location.pathname === path}
						sx={{
							backgroundColor: location.pathname === path ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
							color: location.pathname === path ? 'primary.main' : 'inherit',
							'&:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.08)',
							},
						}}
					>
						<ListItemText primary={path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<AppBar
			position="fixed"
			color={elevated || location.pathname !== '/' ? 'inherit' : 'transparent'}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				px: 2,
				boxShadow: elevated || location.pathname !== '/' ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
				transition: 'var(--transition)'
			}}
		>
			<Toolbar className="w-full" sx={{ justifyContent: 'space-between' }}>
				<Typography variant="h4" component="div" sx={{ color: 'var(--skin-color)', ml: 2 }}>
					LEVES
				</Typography>

				<Box className="hidden lg:flex gap-4">
					{sections.map((path) => (
						<Link
							key={path}
							className={`route ${location.pathname === path ? 'active' : ''}`}
							color={location.pathname !== '/' || elevated ? '#000' : '#fff'}
							href={path}
						>
							{path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
						</Link>
					))}
				</Box>

				<Box className="flex lg:hidden gap-4">

					<IconButton
						edge="start"
						color="white"
						aria-label="menu"
						onClick={toggleDrawer(true)}
						className="visible lg:hidden text-white"
					>
						<MenuIcon className={location.pathname !== '/' || elevated ? 'text-black' : 'text-white'} />
					</IconButton>

					<Drawer
						anchor="right"
						open={drawerOpen}
						onClose={toggleDrawer(false)}
					>
						{drawerList()}
					</Drawer>
				</Box>
			</Toolbar>
		</AppBar >
	);
};

export default Header;
