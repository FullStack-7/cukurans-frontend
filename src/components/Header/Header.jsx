import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import userImg from '../../assets/avatar-icon.png';
import logo from '../../assets/logo.png';
import { BiMenu } from 'react-icons/bi';

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
												? 'text-primaryColor text-[16px] leading-7 font-[500]'
												: 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
										}>
										{item.display}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* Nav Right */}
					<div className="flex items-center gap-2">
						<div className="hidden">
							<Link to="/">
								<figure className="w-[35px] h-[35px] rounded-full">
									<img src={userImg} alt="" className="w-full rounded-full" />
								</figure>
							</Link>
						</div>

						<Link to="/login">
							<button className="bg-primaryColor py-2 px-4 text-white font-[500] h-[44px] flex items-center justify-center rounded-lg text-[18px] hover:bg-hoverColor">
								Login
							</button>
						</Link>

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
