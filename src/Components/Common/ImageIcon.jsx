import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ImageIcon = ({ Image, Heading, Text }) => {
	return (
		<Stack
			sx={{
				padding: '30px 40px',
				pb: '60px',
				gap: '1rem',
				background: 'white',
				borderRadius: '20px',
				flex: '1',
				justifyContent: 'center',
				alignItems: 'center',
				maxWidth: '300px',
			}}
		>
			<Box>
				<img src={Image} alt='image' />
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

export default ImageIcon
