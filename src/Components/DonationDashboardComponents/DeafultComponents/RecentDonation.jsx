import { Box } from '@mui/material'
import React from 'react'
import DonationsTable from '../../Common/DonationsTable'

const RecentDonation = () => {
	return (
		<Box sx={{ maxWidth: '100%', overflowX: 'auto', padding: '30px 0' }}>
			<DonationsTable TableHeading='Recent Donation' />
		</Box>
	)
}

export default RecentDonation
