import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ContactForm from '../Common/ContactForm'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ContactSection = () => {
	return (
		<Stack
			sx={{
				padding: '40px 60px',
				gap: '3.5rem',
				position: 'relative',

				gap: '60px',
				flexDirection: 'row',
			}}
		>
			<Stack sx={{ flex: 1 }}>
				<ContactForm heading='Send A Message' btnText='Submit' />
			</Stack>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					width: '370px',
					height: 'fit-content',
				}}
			>
				<Typography className='query-form_heading' variant='h6'>
					We are Social
				</Typography>
				<Stack
					sx={{
						gap: '1rem',
						flex: '1',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{ background: '#169EEB', borderRadius: '50%', padding: '14px' }}
					>
						<FaFacebookF style={{ fontSize: '40px', color: '#fff' }} />
					</Box>
					<Box>
						<Typography
							sx={{ fontSize: '22px', fontFamily: 'inter', fontWeight: '600' }}
						>
							Facebook
						</Typography>
					</Box>
				</Stack>
				<Stack
					sx={{
						gap: '1rem',
						flex: '1',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{ background: '#169EEB', borderRadius: '50%', padding: '14px' }}
					>
						<FaInstagram style={{ fontSize: '40px', color: '#fff' }} />
					</Box>
					<Box>
						<Typography
							sx={{ fontSize: '22px', fontFamily: 'inter', fontWeight: '600' }}
						>
							Instagram
						</Typography>
					</Box>
				</Stack>
				<Stack
					sx={{
						gap: '1rem',
						flex: '1',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{ background: '#169EEB', borderRadius: '50%', padding: '14px' }}
					>
						<FaTwitter style={{ fontSize: '40px', color: '#fff' }} />
					</Box>
					<Box>
						<Typography
							sx={{ fontSize: '22px', fontFamily: 'inter', fontWeight: '600' }}
						>
							Twitter
						</Typography>
					</Box>
				</Stack>
			</Box>
		</Stack>
	)
}

export default ContactSection
