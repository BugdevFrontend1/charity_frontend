import React from 'react'
import ImageIcon from '../../Common/ImageIcon'
import todayDonation from '../../../Assets/Images/today_donation.png'
import totalDonation from '../../../Assets/Images/total_donation.png'
import monthDonation from '../../../Assets/Images/month_donation.png'

const DonationStats = () => {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
		>
			<ImageIcon
				Image={totalDonation}
				Heading={'$4,500'}
				Text={'Total Donation'}
			/>
			<ImageIcon
				Image={todayDonation}
				Heading={'$14,500'}
				Text={'Today Donation'}
			/>
			<ImageIcon
				Image={monthDonation}
				Heading={'$44,500'}
				Text={'July Donation'}
			/>
		</div>
	)
}

export default DonationStats
