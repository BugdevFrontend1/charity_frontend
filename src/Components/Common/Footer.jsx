import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../Assets/Images/logo.png'
import {
	FaFacebookF,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhone,
	FaTwitter,
} from 'react-icons/fa'
import { MdForwardToInbox } from 'react-icons/md'

const Footer = () => {
	return (
		<Stack
			sx={{
				padding: '50px 40px',
				background: 'rgba(203, 230, 248, 0.70)',
				flexDirection: 'row',
				justifyContent: 'space-around',
				gap: '20px',
			}}
		>
			<Stack sx={{ flex: '1', gap: '25px' }}>
				<Box>
					<img src={Logo} alt='' />
				</Box>
				<Box>
					<Typography className='copyright-text'>
						&copy; 2023 Donakion is part of helping people for the name of
						Allah.
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: '20px' }}>
					<FaFacebookF className='social-icon' />
					<FaTwitter className='social-icon' />
					<FaInstagram className='social-icon' />
				</Box>
			</Stack>
			<Stack sx={{ flex: '1', gap: '25px' }}>
				<Typography className='footer_heading'>Our Projects </Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
			</Stack>
			<Stack sx={{ flex: '1', gap: '25px' }}>
				<Typography className='footer_heading'>Quick Links</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
				<Typography className='footer_text'>Lorem Ipsum</Typography>
			</Stack>
			<Stack sx={{ flex: '1', gap: '25px' }}>
				<Typography className='footer_heading'>Contact Info </Typography>
				<Typography className='footer_text'>
					<FaMapMarkerAlt className='icon-link' /> Lahore ,Pakistan
				</Typography>
				<Typography className='footer_text'>
					<MdForwardToInbox className='icon-link' /> charity@gmail.com
				</Typography>
				<Typography className='footer_text'>
					<FaPhone className='icon-link' />
					+1 344 433534
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Footer
