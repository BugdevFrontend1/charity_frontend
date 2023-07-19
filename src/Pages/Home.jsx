import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import HeroSection from '../Components/HomeComponents/HeroSection'
import MissionSection from '../Components/HomeComponents/MissionSection'
import HelpSection from '../Components/HomeComponents/HelpSection'
import LowerBanner from '../Components/HomeComponents/LowerBanner'
import Partners from '../Components/HomeComponents/Partners'
import Footer from '../Components/Common/Footer'
import StorySection from '../Components/HomeComponents/StorySection'

const Home = () => {
	return (
		<Box>
			<Header background='transparent' active='Home' />
			<HeroSection />
			<MissionSection />
			<StorySection />
			<HelpSection />
			<LowerBanner />
			<Partners />
			<Footer />
		</Box>
	)
}

export default Home
