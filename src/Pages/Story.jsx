import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import HeroSection from '../Components/StoryComponents/HeroSection'
import Partners from '../Components/StoryComponents/Partners'
import MainContent from '../Components/StoryComponents/MainContent'

const Story = () => {
	return (
		<Box>
			<Header background='#CBE6F8' active='Story' />
			<HeroSection />
			<MainContent />
			<Partners />
			<Footer />
		</Box>
	)
}

export default Story
