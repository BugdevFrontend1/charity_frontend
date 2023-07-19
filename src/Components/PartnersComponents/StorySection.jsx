import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from '../Common/Slider'

const StorySection = () => {
	return (
		<Stack sx={{ padding: '40px', gap: '2.5rem', position: 'relative' ,pt:'70px'}}>
			<Box>
				<Typography
					className='partner-heading'
					sx={{ textAlign: 'left !important' }}
				>
					Together To Help The World Better!
				</Typography>
				<Typography sx={{fontFamily:'inter', fontWeight:'300', fontSize:'22px'}}>Please help us change lives around the world</Typography>
			</Box>
			<Box>
				<Slider />
			</Box>
		</Stack>
	)
}

export default StorySection
