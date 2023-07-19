import { Stack } from '@mui/material'
import React from 'react'
import TotalDonation from '../../Components/DonationDashboardComponents/DonationHistoryComponents/TotalDonation'

const DonationHistory = () => {
	return (
		<Stack sx={{ padding: '30px 30px' }}>
			<TotalDonation />
		</Stack>
	)
}

export default DonationHistory
