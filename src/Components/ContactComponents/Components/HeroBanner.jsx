import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const HeroBanner = ({ heading }) => {
	return (
		<Stack
			sx={{
				height: '400px',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				justifyContent: 'center',
				position: 'relative',
			}}
		>
			<iframe
				src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=8&output=embed&iwloc=near'
				title='Google Map'
				style={{
					width: '100%',
					height: '100%',
					border: 0,
				}}
				allowFullScreen
			></iframe>
			<Box
				sx={{
					background: '#F90;',
					color: '#000 !important',
					width: 'fit-content',
					padding: '15px 20px',
					position: 'absolute',
					bottom: '-25px',
					ml: '60px',
				}}
			>
				<span className='hero-banner_bradcramb'>Home </span>
				<AiOutlineRight style={{ color: '#fff' }} />
				<span className='hero-banner_bradcramb'> {heading} </span>
			</Box>
		</Stack>
	)
}

export default HeroBanner
