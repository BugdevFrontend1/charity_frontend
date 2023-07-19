import React from 'react'
import { Box, Typography } from '@mui/material'
import milestoneImage from '../../Assets/Images/milestone.png'
import proofImg from '../../Assets/Images/proof.png'

const MileStone = () => {
	return (
		<Box
			sx={{
				padding: '40px',
				gap: '2.5rem',
				position: 'relative',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Box
				sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}
			>
				<Box sx={{ borderLeft: '1px solid #169EEB', px: '15px' }}>
					<Typography
						sx={{ fontSize: '20px', fontWeight: '300', fontFamily: 'inter' }}
					>
						We’re Helping Hand On
					</Typography>
					<Typography
						sx={{ fontSize: '30px', fontWeight: '600', fontFamily: 'inter' }}
					>
						90,100 Children In 120+ Countries.{' '}
					</Typography>
				</Box>
				<Box>
					<Typography
						sx={{
							fontSize: '13px',
							fontWeight: '300',
							fontFamily: 'inter',
							maxWidth: '545px',
						}}
					>
						Charity Navigator's Giving Basket empowers you to support multiple
						charities in one convenient checkout while controlling how much of
						your information you share with each organization.
					</Typography>
				</Box>
				<Box>
					<img src={proofImg} width={550} style={{ marginTop: '40px' }} />
				</Box>
			</Box>
			<Box>
				<img src={milestoneImage} width={550} />
			</Box>
		</Box>
	)
}

export default MileStone
