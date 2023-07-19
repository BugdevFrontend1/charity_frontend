import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import storyImg from '../../Assets/Images/story.png'
import Sidebar from './Components/Sidebar'
import ContactForm from '../Common/ContactForm'
const MainContent = () => {
	return (
		<Stack
			sx={{
				padding: '40px 60px',
				gap: '3.5rem',
				position: 'relative',
				pt: '80px',
				alignContent: 'space-between',
				flexDirection: 'row',
			}}
		>
			<Stack sx={{ flex: '1', gap: '30px' }}>
				<Box>
					<img
						src={storyImg}
						alt='story Img'
						style={{ width: '100%', height: '450px', objectFit: 'cover' }}
					/>
				</Box>
				<Box>
					<Typography
						sx={{ fontSize: '36px', fontWeight: '600', fontFamily: 'inter' }}
					>
						Provide Education to uneducated Childerns
					</Typography>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: '400',
							fontFamily: 'inter',
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy
						text.Lorem Ipsum is simply dummy text of the printing and
						typesettingindustry. Lorem Ipsum has been the industry's standard
						dummy text.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text
					</Typography>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: '400',
							fontFamily: 'inter',
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy
						text.Lorem Ipsum is simply dummy text of the printing and
						typesettingindustry. Lorem Ipsum has been the industry's standard
						dummy text.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text
					</Typography>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: '400',
							fontFamily: 'inter',
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy
						text.Lorem Ipsum is simply dummy text of the printing and
						typesettingindustry. Lorem Ipsum has been the industry's standard
						dummy text.Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text
					</Typography>
				</Box>
				<Box>
					<ContactForm heading='Leave Your Comment' btnText='Post Comment' />
				</Box>
			</Stack>
			<Sidebar />
		</Stack>
	)
}

export default MainContent
