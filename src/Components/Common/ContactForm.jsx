import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'

const ContactForm = ({ heading, btnText }) => {
	const handleSubmit = (event) => {
		event.preventDefault()
		// Handle form submission logic here
	}
	return (
		<Stack component='form' onSubmit={handleSubmit} sx={{ gap: '20px' }}>
			<Box>
				<Box>
					<Typography className='query-form_heading' variant='h6'>
						{heading}
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					maxWidth: '650px',
					background: 'rgba(203, 230, 248, 0.50)',
					borderRadius: '30px',
					padding: '30px 40px',
					height: 'fit-content',
					border: '1px solid #726A6A;',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '50px',
						padding: '15px 0',
					}}
				>
					<Box sx={{ display: 'flex', gap: '30px' }}>
						<Box sx={{ flex: 1 }}>
							<input
								type='text'
								placeholder='Enter Your Name'
								className='donation-form_input'
							/>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', gap: '30px' }}>
						<Box sx={{ flex: 1 }}>
							<input
								type='text'
								placeholder='Enter Your Email'
								className='donation-form_input'
							/>
						</Box>
						<Box sx={{ flex: 1 }}>
							<input
								type='text'
								placeholder='Subject'
								className='donation-form_input'
							/>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', gap: '30px' }}>
						<Box sx={{ flex: 1 }}>
							<input
								type='text'
								placeholder='Enter Your Message'
								className='donation-form_input'
							/>
						</Box>
					</Box>
				</Box>
			</Box>

			<Button
				type='submit'
				variant='contained'
				sx={{
					borderRadius: '50px',
					width: 'fit-content',
					background: '#F90 !important',
					fontSize: '20px',
					fontWeight: '500',
					mt: '20px',
					padding: '13px 18px',
				}}
			>
				{btnText}
			</Button>
		</Stack>
	)
}

export default ContactForm
