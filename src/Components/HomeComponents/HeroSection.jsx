import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import hero_banner from '../../Assets/Images/hero_banner.png'
import big_stripe from '../../Assets/Images/big_stripe.png'
import small_stripe from '../../Assets/Images/small_stripe.png'

const HeroSection = () => {
	return (
		<>
			<Box
				sx={{
					justifyContent: 'space-between',
					display: 'flex',
					padding: '30px',
					gap: '1rem',
					background: 'rgba(203, 230, 248, 0.70)',
					mt: '-145px !important',
					pt: '185px !important',
					position: 'relative',
				}}
				className='Hero-Section_Container'
			>
				<img
					src={big_stripe}
					alt='big_stripe'
					style={{ position: 'absolute', top: '0', left: '0' }}
				/>
				<img
					src={small_stripe}
					alt='small_stripe'
					style={{ position: 'absolute', top: '0', left: '500px' }}
				/>
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
							fontSize: '65px',
							fontFamily: 'Inter',

							fontWeight: 800,
						}}
					>
						We can make a diffence ,
						<span style={{ color: '#169EEB' }}>Lets Start now!</span>
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
						we are greatly appreciate your donation, and your sacrifice.your
						support helps to further our mission through including
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
							// mt: '50px',
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
					<img src={hero_banner} alt='hero_banner' />
				</Box>
			</Box>
			<Box>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1000 100'
					preserveAspectRatio='none'
					style={{ fill: 'rgba(203, 230, 248, 0.70)' }}
				>
					<path
						className='elementor-shape-fill'
						d='M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
      c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
      c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z'
					></path>
				</svg>
			</Box>
		</>
	)
}

export default HeroSection
