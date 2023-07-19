import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Slider = () => {
	const slide_data = [
		{
			title: 'Slide 1',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.',
			image:
				'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
		},
		{
			title: 'Slide 2',
			text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image:
				'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
		},
		{
			title: 'Slide 3',
			text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
			image:
				'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
		},
	]
	const buttonStyle = {
		background: 'none',
		border: '1px solid #169EEB',
		borderRadius: '50%',
		padding: '10px',
	}

	const properties = {
		prevArrow: (
			<button
				className='prev-btn'
				style={{
					...buttonStyle,
					position: 'absolute',
					top: '-155px',
					left: '86%',
				}}
			>
				<BsArrowLeftShort
					style={{ color: 'red !important', fontSize: '54px' }}
				/>
			</button>
		),
		nextArrow: (
			<button
				className='next-btn'
				style={{
					...buttonStyle,
					position: 'absolute',
					top: '-155px',
				}}
			>
				<BsArrowRightShort
					style={{ color: 'red !important', fontSize: '54px' }}
				/>
			</button>
		),
	}
	return (
		<Slide {...properties} slidesToShow={3}>
			{slide_data?.map((slide, index) => (
				<div
					key={index}
					className='each-slide-effect'
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						margin: '0 15px',
					}}
				>
					<img src={slide?.image} alt='' height={280} />
					<p className='slide_title'>{slide?.title}</p>
					<p className='slide_text'>{slide?.text}</p>
					<Link to='/story'>
						<p className='slide_read-more'>read more</p>
					</Link>
				</div>
			))}
		</Slide>
	)
}

export default Slider
