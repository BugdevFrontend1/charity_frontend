import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import IconBox from '../Common/IconBox'
import { AiOutlineHome, AiFillHeart } from 'react-icons/ai'

import { PiStudentFill } from 'react-icons/pi'
const MissionSection = () => {
	return (
		<Stack sx={{ padding: '40px 60px', alignItems: 'center', gap: '2rem' }}>
			<Box>
				<Typography className='mission-heading'>
					We Are in A Mission To Help The Helpless
				</Typography>
			</Box>

			<Stack sx={{ gap: '40px', flexDirection: 'row', width: '100%' }}>
				<IconBox
					Icon={AiOutlineHome}
					Heading={'For Homeless'}
					Text={
						'An organization’s mission statement should clearly communicate'
					}
				/>
				<IconBox
					Icon={PiStudentFill}
					Heading={'For Education'}
					Text={
						'An organization’s mission statement should clearly communicate'
					}
				/>
				<IconBox
					Icon={AiFillHeart}
					Heading={'For Health'}
					Text={
						'An organization’s mission statement should clearly communicate'
					}
				/>
			</Stack>
		</Stack>
	)
}

export default MissionSection
