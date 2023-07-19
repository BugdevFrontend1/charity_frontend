import { Box, Stack } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Default from './DonarPages/Default'
import DonationHistory from './DonarPages/DonationHistory'
import Profile from './DonarPages/Profile'
import Calender from './DonarPages/Calender'
import DashboardHeader from '../Components/Common/DashboardHeader'
import DashboardSidebar from '../Components/Common/DashboardSidebar'

const DonarDashboard = () => {
	return (
		<Stack sx={{ background: '#f5f5f5' }}>
			<DashboardHeader />
			<Box sx={{ display: 'flex' }}>
				<Box>
					<DashboardSidebar />
				</Box>
				<Box sx={{ flex: '1' }}>
					<Routes>
						<Route path='/' element={<Default />} />
						<Route path='/donation-history' element={<DonationHistory />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/calander' element={<Calender />} />
					</Routes>
				</Box>
			</Box>
		</Stack>
	)
}

export default DonarDashboard
