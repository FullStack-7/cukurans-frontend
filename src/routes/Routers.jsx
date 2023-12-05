import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import BarberDashboard from '../dashboard/Barber/BarberDashboard';
import BarberDetails from '../pages/Barbers/BarberDetails';
import SignUp from '../pages/SignUp';
import Barbers from '../pages/Barbers/Barbers';
import Payment from '../pages/Barbers/Payment.jsx';
import UserDashboard from '../dashboard/user/UserDashboard';

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
			<Route path="/payment" element={<Payment />} />
			<Route path="/users/userprofile/:id" element={<UserDashboard />} />
			<Route path="/dashboard-barber" element={<BarberDashboard />} />
		</Routes>
	);
};

export default Routers;
