import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import Partners from '../Components/PartnersComponents/Partners'
import StorySection from '../Components/PartnersComponents/StorySection'
import HeroSection from '../Components/PartnersComponents/HeroSection'
import MileStone from '../Components/PartnersComponents/MileStone'
import FeaturedCompaign from '../Components/PartnersComponents/FeaturedCompaign'

const Projects = () => {
	return (
		<Box>
			<Header background={'#CBE6F8;'} active='Projects' />
			<HeroSection />
			<StorySection />
			<MileStone />
			<FeaturedCompaign />
			<Partners />
			<Footer />
		</Box>
	)
}

export default Projects
