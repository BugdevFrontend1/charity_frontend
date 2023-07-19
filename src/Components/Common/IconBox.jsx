import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const IconBox = ({ Icon, Heading, Text }) => {
	return (
		<Stack
			sx={{
				padding: '30px 40px',
				pb: '90px',
				gap: '1rem',
				background: 'rgba(203, 230, 248, 0.70)',
				flex: '1',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box sx={{ background: '#169EEB', borderRadius: '50%', padding: '14px' }}>
				<Icon style={{ fontSize: '70px', color: '#fff' }} />
			</Box>
			<Box>
				<Typography className='IconBox-heading'>{Heading}</Typography>
			</Box>
			<Box>
				<Typography className='IconBox-text'>{Text}</Typography>
			</Box>
		</Stack>
	)
}

export default IconBox
