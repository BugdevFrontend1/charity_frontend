import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const HeroBanner = ({ heading, backgroundImg }) => {
	return (
		<Stack
			sx={{
				height: '550px',
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				justifyContent: 'center',
				pl: '60px',
				position: 'relative',
			}}
		>
			<Typography className='hero-banner_Heading'> {heading}</Typography>
			<Box
				sx={{
					background: '#F90;',
					color: '#000 !important',
					width: 'fit-content',
					padding: '15px 20px',
					position: 'absolute',
					bottom: '-25px',
				}}
			>
				<span className='hero-banner_bradcramb'>Home </span>
				<AiOutlineRight  style={{color:'#fff'}}/>
				<span className='hero-banner_bradcramb'> {heading} </span>
			</Box>
		</Stack>
	)
}

export default HeroBanner
