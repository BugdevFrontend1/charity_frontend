import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBank, BsPaypal } from 'react-icons/bs'

const DonationForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
		// Handle form submission logic here
	}
	return (
		<Box
			component='form'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				background: 'rgba(203, 230, 248, 0.50)',
				borderRadius: '30px',
				padding: '30px 40px',
			}}
			onSubmit={handleSubmit}
		>
			<Box
				sx={{
					borderBottom: '1px solid #9D9C9C;',
					pb: '10px',
				}}
			>
				<Box sx={{ display: 'flex', gap: '20px', mb: '50px' }}>
					<Stack sx={{ gap: '20px' }}>
						<Typography className='donation-form_heading'>
							Select Your Donation Amount
						</Typography>
						<Box
							className='donation-form_radio-btn'
							sx={{ display: 'flex', gap: '15px' }}
						>
							<Box sx={{ display: 'flex', gap: '5px' }}>
								<input type='radio' id='option1' name='donation' value='20' />
								<label htmlFor='option1'>$20</label>
							</Box>
							<Box sx={{ display: 'flex', gap: '5px' }}>
								<input type='radio' id='option2' name='donation' value='30' />
								<label htmlFor='option2'>$30</label>
							</Box>
							<Box sx={{ display: 'flex', gap: '5px' }}>
								<input type='radio' id='option3' name='donation' value='50' />
								<label htmlFor='option3'>$50</label>
							</Box>
							<Box sx={{ display: 'flex', gap: '5px' }}>
								<input
									type='radio'
									id='option4'
									name='donation'
									value='custom'
								/>
								<label htmlFor='option4'>Custom</label>
							</Box>
						</Box>
						<Box>
							<input
								type='text'
								placeholder='Custom Amount'
								className='donation-form_input'
							/>
						</Box>
					</Stack>
					<Stack sx={{ pl: '20px', pt: '5px', gap: '8px' }}>
						<Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
							Pay using
						</Typography>
						<Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
							<BsPaypal style={{ color: 'blue' }} /> Paypal
						</Typography>
						<Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
							<BsBank /> Bank Account
						</Typography>
					</Stack>
				</Box>
				<Box>
					<Typography className='donation-form_policy-text'>
						This is simple a note to the donators regarding our services and
						policy.
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					padding: '15px 0',
				}}
			>
				<Box sx={{ display: 'flex', gap: '30px' }}>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='First Name'
							className='donation-form_input'
						/>
					</Box>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Last Name'
							className='donation-form_input'
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: '30px' }}>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Your Email'
							className='donation-form_input'
						/>
					</Box>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Zip Code'
							className='donation-form_input'
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: '30px' }}>
					<Box sx={{ flex: 1 }}>
						<select className='donation-form_input' defaultValue=''>
							<option value=''>Select</option>
							<option value='$20'>$20</option>
							<option value='$30'>$30</option>
							<option value='$50'>$50</option>
						</select>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					padding: '15px 0',
				}}
			>
				<Typography sx={{ fontSize: '20px', fontWeight: '600', ml: '15px' }}>
					Payment Details
				</Typography>
				<Box sx={{ display: 'flex', gap: '30px' }}>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Enter your card numbers'
							className='donation-form_input'
						/>
					</Box>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Enter your name on card'
							className='donation-form_input'
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: '30px' }}>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Expiry Date'
							className='donation-form_input'
						/>
					</Box>
					<Box sx={{ flex: 1 }}>
						<input
							type='text'
							placeholder='Security Code'
							className='donation-form_input'
						/>
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
					fontWeight: '600',
					mt: '10px',
					padding: '15px 20px',
				}}
			>
				<AiOutlineHeart style={{ fontSize: '30px', marginRight: '10px' }} />
				Donate Now
			</Button>
		</Box>
	)
}

export default DonationForm
