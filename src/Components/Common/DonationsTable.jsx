import React from 'react'
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Stack,
	Typography,
} from '@mui/material'
import { BsArrowRight } from 'react-icons/bs'

const DonationsTable = ({ TableHeading }) => {
	const donations = [
		{ id: 1, amount: 50, status: 'Pending', for: 'Health' },
		{ id: 2, amount: 100, status: 'Completed', for: 'Education' },
		{ id: 3, amount: 20, status: 'Pending', for: 'Health' },
	]

	return (
		<Stack sx={{ gap: '20px' }}>
			<Typography
				sx={{ fontFamily: 'inter', fontWeight: '600', fontSize: '22px' }}
			>
				{TableHeading}
			</Typography>
			<TableContainer component={Paper} sx={{ background: 'transparent' }}>
				<Table>
					<TableHead>
						<TableRow className='donation-table_header'>
							<TableCell
								className='donation-table_heading'
								style={{ width: '25%', borderRadius: '15px 0 0 15px' }}
							>
								Donation
							</TableCell>
							<TableCell
								className='donation-table_heading'
								style={{ width: '25%' }}
								align='left'
							>
								Amount
							</TableCell>
							<TableCell
								className='donation-table_heading'
								style={{ width: '25%' }}
								align='left'
							>
								For
							</TableCell>
							<TableCell
								className='donation-table_heading'
								style={{ width: '25%', borderRadius: '0 15px 15px 0px' }}
								align='left'
							>
								Status
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{donations.map((donation) => (
							<>
								<TableRow key={donation.id}>
									<TableCell
										className='donation-table_text'
										component='th'
										scope='row'
									>
										Donation {donation.id}
									</TableCell>
									<TableCell className='donation-table_text' align='left'>
										${donation.amount}
									</TableCell>
									<TableCell className='donation-table_text' align='left'>
										{donation.for}
									</TableCell>
									<TableCell className='donation-table_text' align='left'>
										<span
											style={{
												display: 'flex',
												gap: '10px',
												alignItems: 'center',
											}}
										>
											<div
												style={{
													background: 'green',
													width: '17px',
													height: '17px',
													borderRadius: '50%',
												}}
											></div>
											<div>{donation.status}</div>
										</span>
									</TableCell>
								</TableRow>
								<TableRow key={donation.id}>
									<TableCell
										className='donation-table_text bg-white'
										component='th'
										scope='row'
										style={{ width: '25%', borderRadius: '30px 0 0 30px' }}
									>
										<span style={{ paddingLeft: '30px', fontWeight: '500' }}>
											ID: {donation.id}
										</span>
									</TableCell>
									<TableCell
										className='donation-table_text bg-white'
										align='left'
									></TableCell>
									<TableCell
										className='donation-table_text bg-white'
										align='left'
									></TableCell>
									<TableCell
										className='donation-table_text bg-white color-blue'
										align='left'
										style={{ width: '25%', borderRadius: '0 30px 30px 0px' }}
									>
										<span
											style={{
												display: 'flex',
												gap: '12px',
												alignItems: 'center',
											}}
										>
											View Recipient <BsArrowRight />
										</span>
									</TableCell>
								</TableRow>
								<TableRow key={donation.id}>
									<TableCell
										className='border-bottom  donation-table_text'
										component='th'
										scope='row'
									></TableCell>
									<TableCell
										className='border-bottom  donation-table_text'
										align='left'
									></TableCell>
									<TableCell
										className='border-bottom  donation-table_text'
										align='left'
									></TableCell>
									<TableCell
										className='border-bottom  donation-table_text'
										align='left'
									></TableCell>
								</TableRow>
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Stack>
	)
}

export default DonationsTable
