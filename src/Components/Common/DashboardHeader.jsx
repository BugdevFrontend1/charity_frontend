import { Avatar, Box, Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import dashboardLogo from '../../Assets/Images/dashboard_logo.png'
import { BiSearch } from 'react-icons/bi'
import { AiFillBell } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'

const DashboardHeader = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box
			sx={{
				justifyContent: 'space-between',
				display: 'flex',
				padding: '20px 30px',
				gap: '1.5rem',
				position: 'relative',
				zIndex: '999',
				background: '#FFF',
				boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.10)',
			}}
		>
			<Box sx={{ flex: '.3', margin: 'auto' }}>
				<img src={dashboardLogo} />
			</Box>
			<Box
				sx={{ flex: '1', display: 'flex', gap: '15px', alignItems: 'center' }}
			>
				<Box>
					<BiSearch
						style={{
							fontSize: '22px',
							cursor: 'pointer',
							color: 'rgba(117,117,117,1)',
						}}
					/>
				</Box>
				<Box sx={{ flex: '1' }}>
					{' '}
					<input
						className='dashboard-header_search-input'
						placeholder='Search'
					/>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'end',
					alignItems: 'center',
					gap: '15px',
				}}
			>
				<Box>
					<AiFillBell
						style={{
							fontSize: '24px',
							cursor: 'pointer',
						}}
					/>
				</Box>
				<Box
					sx={{
						flex: '1',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Avatar>I</Avatar>
					<Box>
						<div>
							<Button
								id='basic-button'
								aria-controls={open ? 'basic-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}
								className='avatar-text'
							>
								Khubaib Shoukat{'   '}
								<IoMdArrowDropdown
									style={{ fontSize: '24px', fontWeight: '500' }}
								/>
							</Button>
							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button',
								}}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleClose}>Logout</MenuItem>
							</Menu>
						</div>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default DashboardHeader
