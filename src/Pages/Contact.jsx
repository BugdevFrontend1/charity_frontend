import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import HeroSection from '../Components/ContactComponents/HeroSection'
import ContactIcons from '../Components/ContactComponents/ContactIcons'
import ContactSection from '../Components/ContactComponents/ContactSection'

const Contact = () => {
	return (
		<Box>
			<Header background={'#CBE6F8;'} active='Contact' />

			<HeroSection />
			<ContactIcons />
			<ContactSection />
			<Footer />
		</Box>
	)
}

export default Contact
