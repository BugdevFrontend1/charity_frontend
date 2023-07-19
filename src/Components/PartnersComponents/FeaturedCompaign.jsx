import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import featuredCompaignImg from '../../Assets/Images/featured_compaign.png'
const FeaturedCompaign = () => {
	return (
		<Box
			sx={{
				padding: '40px 120px',
				position: 'relative',
				display: 'flex',
				justifyContent: 'space-between',
				background: '#F3F3F3;',
			}}
		>
			<Stack sx={{ flex: '0.9', gap: '20px' }}>
				<Box sx={{ borderLeft: '1px solid #169EEB', px: '15px' }}>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: '300',
							fontFamily: 'inter',
							color: '#169EEB;',
						}}
					>
						Help The World Better
					</Typography>
					<Typography
						sx={{ fontSize: '36px', fontWeight: '600', fontFamily: 'inter' }}
					>
						Featured Campaigns
					</Typography>
				</Box>
				<Stack sx={{ background: '#fff', ml: '15px' }}>
					<Box className='tabs-btn active-tab'>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily: 'inter',
								color: '#797979;',
							}}
							className='tabs-btn-text'
						>
							Water Charity
						</Typography>
						<Typography
							sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
							className='tabs-btn-heading'
						>
							Water for all children
						</Typography>
					</Box>
					<Box className='tabs-btn'>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily: 'inter',
								color: '#797979;',
							}}
							className='tabs-btn-text'
						>
							Water Charity
						</Typography>
						<Typography
							sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
							className='tabs-btn-heading'
						>
							Water for all children
						</Typography>
					</Box>
					<Box className='tabs-btn'>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily: 'inter',
								color: '#797979;',
							}}
							className='tabs-btn-text'
						>
							Water Charity
						</Typography>
						<Typography
							sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
							className='tabs-btn-heading'
						>
							Water for all children
						</Typography>
					</Box>

					<Box className='tabs-btn'>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily: 'inter',
								color: '#797979;',
							}}
							className='tabs-btn-text'
						>
							Water Charity
						</Typography>
						<Typography
							sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
							className='tabs-btn-heading'
						>
							Water for all children
						</Typography>
					</Box>

					<Box className='tabs-btn'>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: '600',
								fontFamily: 'inter',
								color: '#797979;',
							}}
							className='tabs-btn-text'
						>
							Water Charity
						</Typography>
						<Typography
							sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
							className='tabs-btn-heading'
						>
							Water for all children
						</Typography>
					</Box>
				</Stack>
			</Stack>
			<Box sx={{ flex: '1' }}>
				<img
					src={featuredCompaignImg}
					alt='tabsData'
					style={{
						maxWidth: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</Box>
		</Box>
	)
}

export default FeaturedCompaign
