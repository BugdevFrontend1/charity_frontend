import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const QueryForm = () => {
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
				width: '450px',
				background: 'rgba(203, 230, 248, 0.50)',
				borderRadius: '30px',
				padding: '30px 40px',
				height: 'fit-content',
			}}
			onSubmit={handleSubmit}
		>
			<Box>
				<Typography className='query-form_heading' variant='h6'>
					Have any Question ?
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<Typography className='query-form_label'>Full Name:</Typography>
				<input className='query-form_input' />
				<Typography className='query-form_label'>Email Address:</Typography>
				<input className='query-form_input' />
				<Typography className='query-form_label'>How can help you?</Typography>
				<textarea
					style={{
						border: '1px solid',
						background: 'transparent',
						fontSize: '20px',
						padding: '15px',
						fontFamily: 'inter',
						borderRadius: '30px',
					}}
					rows={8}
				/>

				<Button
					type='submit'
					variant='contained'
					sx={{
						borderRadius: '50px',
						width: 'fit-content',
						background: '#F90 !important',
						fontSize: '20px',
						fontWeight: '500',
						mt: '10px',
					}}
				>
					Ask it Now
				</Button>
			</Box>
		</Box>
	)
}

export default QueryForm
