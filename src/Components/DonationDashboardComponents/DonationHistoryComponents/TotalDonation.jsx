import { Box } from '@mui/material'
import React from 'react'
import DonationsTable from '../../Common/DonationsTable'

const TotalDonation = () => {
	return (
		<Box sx={{ maxWidth: '100%', overflowX: 'auto', padding: '30px 0' }}>
			<DonationsTable TableHeading='3 Total Donations' />
		</Box>
	)
}

export default TotalDonation
