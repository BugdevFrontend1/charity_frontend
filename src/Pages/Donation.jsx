import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import HeroSection from '../Components/DonationComponents/HeroSection'
import Partners from '../Components/DonationComponents/Partners'
import DonationForms from '../Components/DonationComponents/DonationForms'

const Donation = () => {
	return (
		<Box>
			<Header background={'#CBE6F8;'} active='Donation' />
			<HeroSection />
			<DonationForms />
			<Partners />
			<Footer />
		</Box>
	)
}

export default Donation
