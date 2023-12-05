import React from 'react';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/Login.jsx';
import BarberDashboard from '../dashboard/barber/BarberDashboard.jsx';
import BarberDetails from '../pages/Barbers/BarberDetails.jsx';
import SignUp from '../pages/Signup.jsx';
import Barbers from '../pages/Barbers/Barbers.jsx';
import UserDashboard from '../dashboard/user/UserDashboard.jsx';

import { Routes, Route } from 'react-router-dom';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/barbers" element={<Barbers />} />
			<Route path="/barbers/:id" element={<BarberDetails />} />
			<Route path="/services" element={<Services />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/users/userprofile/:id" element={<UserDashboard />} />
			<Route path="/dashboard-barber" element={<BarberDashboard />} />
		</Routes>
	);
};

export default Routers;
