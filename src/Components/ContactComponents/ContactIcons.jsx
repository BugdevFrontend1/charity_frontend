import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import IconBox from './Components/IconBox'
import { AiOutlineHome, AiFillHeart } from 'react-icons/ai'

import { PiStudentFill } from 'react-icons/pi'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { MdForwardToInbox } from 'react-icons/md'
const ContactIcons = () => {
	return (
		<Stack
			sx={{
				padding: '40px 60px',
				gap: '3.5rem',
				position: 'relative',
				pt: '80px',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '60px',
			}}
		>
			<Box>
				<Typography
					sx={{ fontSize: '30px', fontWeight: '800', fontFamily: 'inter' }}
				>
					Contact Us
				</Typography>
			</Box>

			<Stack sx={{ gap: '40px', flexDirection: 'row', width: '100%' }}>
				<IconBox Icon={FaMapMarkerAlt} Heading={'Lahore , Pakistan'} />
				<IconBox
					Icon={FaPhone}
					Heading={'+1 345 545534534 <br/> +1 345 545534534'}
				/>
				<IconBox Icon={MdForwardToInbox} Heading={'Donakin@gmail.com'} />
			</Stack>
		</Stack>
	)
}

export default ContactIcons
