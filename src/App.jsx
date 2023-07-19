import { Box } from '@mui/material'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Donation from './Pages/Donation'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Story from './Pages/Story'
import DonarDashboard from './Pages/DonarDashboard'

function App() {
	return (
		<Box sx={{ maxWidth: '1650px', margin: 'auto' }}>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/donation/*' element={<Donation />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/story' element={<Story />} />
				<Route path='/donar-dashboard/*' element={<DonarDashboard />} />
			</Routes>
		</Box>
	)
}

export default App
