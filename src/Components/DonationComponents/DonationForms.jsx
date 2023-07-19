import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import QueryForm from '../Common/QueryForm'
import DonationForm from '../Common/DonationForm'

const DonationForms = () => {
	return (
		<Stack
			sx={{
				padding: '40px 60px',
				gap: '3.5rem',
				position: 'relative',
				pt: '80px',
				alignContent: 'space-between',
				flexDirection: 'row',
			}}
		>
			<Stack sx={{ flex: '1', gap: '1.5rem' }}>
				<Typography className='donation-form_small'>Donation</Typography>
				<Typography className='donation-form_heading'>
					Don't Let Poverty Destroy Someone's Dreams
				</Typography>
				<Typography className='donation-form_text'>
					The secret to happiness lies in helping others. Never underestimate
					the difference YOU can make in the lives of the poor, the abused and
					the helpless. Spread sunshine in their lives no matter what the
					weather may be.
				</Typography>

                <DonationForm/>
			</Stack>
			<QueryForm />
		</Stack>
	)
}

export default DonationForms
