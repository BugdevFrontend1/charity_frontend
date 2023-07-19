import { Box, Stack } from '@mui/material'
import React from 'react'
import DonationStats from '../../Components/DonationDashboardComponents/DeafultComponents/DonationStats'
import RecentDonation from '../../Components/DonationDashboardComponents/DeafultComponents/RecentDonation'

const Default = () => {
	return (
		<Stack sx={{ padding: '50px 30px' }}>
			<Box>
				<DonationStats />
			</Box>
			<Box>Hello world</Box>
			<Box>
				<RecentDonation />
			</Box>
		</Stack>
	)
}

export default Default
