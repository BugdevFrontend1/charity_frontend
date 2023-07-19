import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import avatar from '../../../Assets/Images/avatar.png'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const ProfileCard = () => {
	return (
		<Stack sx={{ gap: '20px' }}>
			<Box
				sx={{
					background: '#fff',
					borderRadius: '30px',
					padding: '30px',
					display: 'flex',
					gap: '30px',
				}}
			>
				<Stack>
					<img
						src={avatar}
						alt='avatar'
						width={137}
						style={{ borderRadius: '37px', marginTop: '-100px' }}
					/>
				</Stack>
				<Stack sx={{ gap: '15px', flex: '1', paddingRight: '50px' }}>
					<Typography
						sx={{ fontSize: '30px', fontWeight: '500', fontFamily: 'inter' }}
					>
						Khubaib Shoukat
					</Typography>
					<Typography
						sx={{ fontSize: '20px', fontWeight: '400', fontFamily: 'inter' }}
					>
						It is a long established fact that a reader will be distracted.
					</Typography>
				</Stack>

				<Stack sx={{ flex: '1', gap: '16px', mt: '10px' }}>
					<Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
						<MdEmail style={{ fontSize: '24px' }} />
						<Typography
							sx={{ fontSize: '20px', fontWeight: '400', fontFamily: 'inter' }}
						>
							Email:
						</Typography>
						<Typography
							sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'inter' }}
						>
							exampl@gmail.com
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
						<MdLocationOn style={{ fontSize: '24px' }} />
						<Typography
							sx={{ fontSize: '20px', fontWeight: '400', fontFamily: 'inter' }}
						>
							Address:
						</Typography>
						<Typography
							sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'inter' }}
						>
							Washington Dc, USA
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Box
				sx={{
					background: '#fff',
					borderRadius: '30px',
					padding: '30px 50px',
					minHeight: '350px',
					display: 'flex',
				}}
			>
				<Stack sx={{ gap: '15px', flex: '1', paddingRight: '50px' }}>
					<Typography
						sx={{ fontSize: '30px', fontWeight: '500', fontFamily: 'inter' }}
					>
						Name:
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: '400',
							fontFamily: 'inter',
							maxWidth: '650px',
						}}
					>
						It is a long established fact that a reader will be distracted. It
						is a long established fact that a reader will be distracted. It is a
						long established fact that a reader will be distracted.
					</Typography>
				</Stack>
			</Box>
		</Stack>
	)
}

export default ProfileCard
