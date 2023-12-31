import { useEffect, useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext.jsx';

const navLinks = [
	{
		path: '/',
		display: 'Home',
	},
	{
		path: '/barbers',
		display: 'Temukan Barber',
	},
	{
		path: '/services',
		display: 'Layanan',
	},
	{
		path: '/contact',
		display: 'Kontak',
	},
];
const Header = () => {
	const headerRef = useRef(null);
	const menuRef = useRef(null);
	const { userId, username, token, role } = useContext(authContext);

	const handleStickyHeader = () => {
		window.addEventListener('scroll', () =>
			document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
				? headerRef.current.classList.add('sticky_header')
				: headerRef.current.classList.remove('sticky_header'),
		);
	};

	useEffect(() => {
		handleStickyHeader();
		return window.removeEventListener('scroll', handleStickyHeader);
	}, []);

	const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

	return (
		<header className="header flex items-center sticky_header" ref={headerRef}>
			<div className="container">
				<div className="flex items-center justify-between">
					{/* LOGO */}
					<div>
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
					</div>
					{/* MENU */}
					<div className="navigation" ref={menuRef} onClick={toggleMenu}>
						<ul className="menu flex items-center gap-[2rem]">
							{navLinks.map((item, i) => (
								<li key={i}>
									<NavLink
										to={item.path}
										className={(navClass) =>
											navClass.isActive
												? 'text-primaryColor md:text-[16px] lg:text-[18px] leading-7 font-[500]'
												: 'text-textColor md:text-[16px] lg:text-[18px] leading-7 font-[500] hover:text-primaryColor'
										}>
										{item.display}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* Nav Right */}
					<div className="flex items-center gap-2">
						{username && token && userId && role ? (
							<div>
								<Link
									to={`${
										role === 'barber'
											? '/dashboard-barber'
											: `/users/userprofile/${userId}`
									}`}>
									<p className="text-xl">
										Hi,{' '}
										<span className="text-primaryColor font-[600] ">
											{username}
										</span>
									</p>
								</Link>
							</div>
						) : (
							<Link to="/login">
								<button className="bg-primaryColor py-2 px-4 text-white font-[600] h-[44px] flex items-center justify-center rounded-lg">
									Login
								</button>
							</Link>
						)}

						<span className="md:hidden" onClick={toggleMenu}>
							<BiMenu className="w-6 h-6 cursor-pointer" />
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
