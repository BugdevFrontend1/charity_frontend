import { Button, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import banner from '../../Assets/Images/volunteer-holding-box.png'

const LowerBanner = () => {
	return (
		<Box
			sx={{
				justifyContent: 'space-between',
				display: 'flex',
				padding: '30px',
				gap: '1rem',
			}}
			className='Hero-Section_Container'
		>
			<Box
				sx={{
					flex: '1',
					display: 'flex',
					alignItems: 'start',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					position: 'relative',
					zIndex: '1',
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
					}}
				>
					We believe your donation will help to survive people and may allah
					rewards you jannah
				</Typography>
				<Typography
					sx={{
						color: '#000',
						textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
						fontSize: '20px',
						fontFamily: 'Inter',

						fontWeight: 400,
					}}
				>
					There is enough food on earth to feed everyone. Millions are going
					hungry not because of a global inability to grow enough food, although
					this could change as climate-related disasters.
				</Typography>
				<Button
					sx={{
						color: '#FFF',
						fontSize: '22px',
						fontFamily: 'Inter',
						fontWeight: 800,
						padding: '14px 18px',
						borderRadius: '50px',
						background: '#F90 !important',
					}}
				>
					<AiOutlineHeart style={{ fontSize: '30px', marginRight: '10px' }} />
					Donate Now
				</Button>
			</Box>
			<Box
				sx={{
					flex: '1',
					textAlign: 'right',
					position: 'relative',
					zIndex: '1',
				}}
				className='hero-section_Img'
			>
				<img src={banner} alt='banner' />
			</Box>
		</Box>
	)
}

export default LowerBanner
