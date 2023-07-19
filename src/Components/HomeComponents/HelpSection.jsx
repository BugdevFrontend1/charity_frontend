import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import donation from '../../Assets/Images/Donation.png'

const HelpSection = () => {
	return (
		<Box
			sx={{
				justifyContent: 'space-between',
				display: 'flex',
				padding: '30px',
				gap: '1rem',
				background: 'rgba(203, 230, 248, 0.70)',
			}}
			className='Hero-Section_Container'
		>
			<Box
				sx={{
					textAlign: 'right',
					position: 'relative',
					zIndex: '1',
					flex: '1',
				}}
				className='hero-section_Img'
			>
				<img src={donation} alt='donation' width={650} />
			</Box>
			<Box
				sx={{
					flex: '1',
					display: 'flex',
					alignItems: 'start',
					flexDirection: 'column',
					justifyContent: 'center',
					position: 'relative',
					zIndex: '1',
					gap: '30px',
				}}
				className='hero-section_content'
			>
				<Typography
					sx={{
						color: '#000',
						textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
						fontSize: '50px',
						fontFamily: 'Inter',
						fontWeight: 600,
						maxWidth: '350px',
					}}
				>
					What have we done with your help?
				</Typography>
				<Typography
					sx={{
						color: '#000',
						textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
						fontSize: '20px',
						fontFamily: 'Inter',

						fontWeight: 600,
					}}
				>
					Charity Navigator is a research tool for anyone looking to make a
					difference.
				</Typography>
				<Typography
					sx={{
						color: '#000',
						textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
						fontSize: '18px',
						fontFamily: 'Inter',

						fontWeight: 400,
					}}
				>
					You can use Charity Navigator to find and support thousands of
					charities that align with your passions and values. We use data from
					the IRS, partners, and the charities themselves to power our unbiased
					ratings so that you can give with confidence.
				</Typography>
			</Box>
		</Box>
	)
}

export default HelpSection
