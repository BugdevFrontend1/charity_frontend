import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import gather from '../../Assets/Images/gather.png'
import ariete from '../../Assets/Images/ariete.png'
import vindicia from '../../Assets/Images/vindicia.png'
import blogbus from '../../Assets/Images/blogbus.png'

const TrustedPartners = () => {
	return (
		<Stack sx={{ padding: '40px 60px', alignItems: 'center', gap: '4rem' }}>
			<Box>
				<Typography className='partner-heading'>
					Trusted Around The World
				</Typography>
			</Box>
			<Stack
				sx={{
					gap: '40px',
					flexDirection: 'row',
					width: '100%',
					justifyContent: 'space-around',
				}}
			>
				<Box>
					<img src={gather} alt='' />
				</Box>
				<Box>
					<img src={ariete} alt='' />
				</Box>
				<Box>
					<img src={vindicia} alt='' />
				</Box>
				<Box>
					<img src={blogbus} alt='' />
				</Box>
			</Stack>
		</Stack>
	)
}

export default TrustedPartners
