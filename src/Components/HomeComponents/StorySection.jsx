import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from '../Common/Slider'

const StorySection = () => {
	return (
		<Stack sx={{ padding: '40px', gap: '2.5rem', position: 'relative' }}>
			<Box>
				<Typography
					className='partner-heading'
					sx={{ maxWidth: '680px', textAlign: 'left !important' }}
				>
					Learn the stories of those we’ve already helped
				</Typography>
			</Box>
			<Box>
				<Slider />
			</Box>
		</Stack>
	)
}

export default StorySection
