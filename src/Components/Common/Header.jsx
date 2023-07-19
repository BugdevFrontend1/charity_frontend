import React from 'react'
import Logo from '../../Assets/Images/logo.png'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = ({ background, active }) => {
	return (
		<Box
			sx={{
				justifyContent: 'space-between',
				display: 'flex',
				padding: '30px',
				gap: '2.5rem',
				position: 'relative',
				zIndex: '999',
				background: background,
			}}
		>
			<Box>
				<img src={Logo} alt='logo' />
			</Box>

			<Box
				className='header-link'
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					flex: 1,
					gap: '2.5rem',
					alignItems: 'center',
				}}
			>
				<Link
					to={'/'}
					style={{ color: active === 'Home' ? '#169EEB' : '#000' }}
				>
					<Typography className='text-22'>Home</Typography>
				</Link>
				<Link
					to={'/donation'}
					style={{ color: active === 'Donation' ? '#169EEB' : '#000' }}
				>
					<Typography className='text-22'>Donations</Typography>
				</Link>
				<Link
					to={'/projects'}
					style={{ color: active === 'Projects' ? '#169EEB' : '#000' }}
				>
					<Typography className='text-22'>Projects</Typography>
				</Link>
				<Link
					to={'/contact'}
					style={{ color: active === 'Contact' ? '#169EEB' : '#000' }}
				>
					<Typography className='text-22'>Contact</Typography>
				</Link>
			</Box>
			<Box sx={{ alignItems: 'center', display: 'flex' }}>
				<Button
					sx={{
						color: '#FFF',
						fontSize: '22px',
						fontFamily: 'Inter',
						fontWeight: 800,
						padding: '14px 18px',
						borderRadius: '50px',
						background: '#F90',
					}}
				>
					Donation
				</Button>
			</Box>
		</Box>
	)
}

export default Header
