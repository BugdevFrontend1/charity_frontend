import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const IconBox = ({ Icon, Heading }) => {
	const formattedHeading = Heading.replace(/<br\s*\/?>/g, '<br />')
	return (
		<Stack
			sx={{
				padding: '60px 40px',
				gap: '1rem',
				flex: '1',
				justifyContent: 'center',
				alignItems: 'center',
				border: ' 1px solid #ADABAB;',
				flexDirection: 'row',
			}}
		>
			<Box sx={{ background: '#169EEB', borderRadius: '50%', padding: '14px' }}>
				<Icon style={{ fontSize: '40px', color: '#fff' }} />
			</Box>
			<Box>
				<Typography
					sx={{ fontSize: '22px', fontFamily: 'inter' }}
					dangerouslySetInnerHTML={{ __html: formattedHeading }}
				/>
			</Box>
		</Stack>
	)
}

export default IconBox
