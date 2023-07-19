import { Box, Typography } from '@mui/material'
import React from 'react'
import popularImg from '../../../Assets/Images/breadcrumbs_bg1.png'

const Sidebar = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				width: '370px',
				height: 'fit-content',
			}}
		>
			<Typography
				sx={{ fontSize: '36px', fontWeight: '600', fontFamily: 'inter' }}
			>
				Popular Stories
			</Typography>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<img
					src={popularImg}
					style={{ width: '65px', height: '65px', objectFit: 'cover' }}
				/>
				<Typography
					sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
				>
					Clean Water Provide By Poor People!!
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<img
					src={popularImg}
					style={{ width: '65px', height: '65px', objectFit: 'cover' }}
				/>
				<Typography
					sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
				>
					Clean Water Provide By Poor People!!
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<img
					src={popularImg}
					style={{ width: '65px', height: '65px', objectFit: 'cover' }}
				/>
				<Typography
					sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
				>
					Clean Water Provide By Poor People!!
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<img
					src={popularImg}
					style={{ width: '65px', height: '65px', objectFit: 'cover' }}
				/>
				<Typography
					sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
				>
					Clean Water Provide By Poor People!!
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<img
					src={popularImg}
					style={{ width: '65px', height: '65px', objectFit: 'cover' }}
				/>
				<Typography
					sx={{ fontSize: '22px', fontWeight: '600', fontFamily: 'inter' }}
				>
					Clean Water Provide By Poor People!!
				</Typography>
			</Box>
		</Box>
	)
}

export default Sidebar
