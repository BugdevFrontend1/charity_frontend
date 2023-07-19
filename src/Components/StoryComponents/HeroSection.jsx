	import { Box } from '@mui/material'
	import React from 'react'
	import HeroBanner from '../Common/HeroBanner'
	import bannerImg from '../../Assets/Images/breadcrumbs_bg2.png'

	const HeroSection = () => {
		return (
			<Box>
				<HeroBanner heading='Stories' backgroundImg={bannerImg} />
			</Box>
		)
	}

	export default HeroSection
