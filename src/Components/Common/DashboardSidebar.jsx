import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const DashboardSidebar = () => {
	const location = useLocation()
	console.log(location?.pathname)
	const [dashboardLink, SetDashboardLink] = useState([
		{
			name: 'Default',
			href: '/donar-dashboard',
		},
		{
			name: 'Donation History',
			href: '/donar-dashboard/donation-history',
		},
	])
	const [appsLink, SetAppsLink] = useState([
		{
			name: 'Profile',
			href: '/donar-dashboard/profile',
		},
		{
			name: 'Calander',
			href: '/donar-dashboard/calander',
		},
	])
	return (
		<Stack
			sx={{
				width: '240px',
				minHeight: '88vh',
				height: '100%',
				justifyContent: 'space-between',
				padding: '50px 0',
				background: '#FFF',
				boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.10)',
			}}
		>
			<Stack>
				<Stack>
					<p className='dashboard-sidebar_link-item fade-color'>DASHBOARD</p>

					{dashboardLink?.map((item, index) => {
						return (
							<Link
								key={index}
								to={item?.href}
								className={`${
									location?.pathname === item?.href ? 'active-sidebar' : ''
								} dashboard-sidebar_link-item m-1`}
							>
								{item?.name}
							</Link>
						)
					})}
				</Stack>
				<Stack>
					<p className='dashboard-sidebar_link-item fade-color'>Apps</p>

					{appsLink?.map((item, index) => {
						return (
							<Link
								key={index}
								to={item?.href}
								className={`${
									location?.pathname === item?.href ? 'active-sidebar' : ''
								} dashboard-sidebar_link-item m-1`}
							>
								{item?.name}
							</Link>
						)
					})}
				</Stack>
			</Stack>
			<Box>
				<Typography
					sx={{
						fontFamily: 'inter',
						fontSize: '22px',
						fontWeight: '500',
						padding: '0 30px',
					}}
				>
					<AiOutlineLogout /> Logout
				</Typography>
			</Box>
		</Stack>
	)
}

export default DashboardSidebar
