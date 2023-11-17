import { Link } from 'react-router-dom';
import { RiTwitterFill } from 'react-icons/ri';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const socialMedia = [
	{
		path: 'https://www.instagram.com/',
		icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
	},
	{
		path: 'https://github.com/',
		icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
	},
	{
		path: 'https://www.linkedin.com/in/',
		icon: <RiTwitterFill className="group-hover:text-white w-4 h-5" />,
	},
];

const Links1 = [
	{
		path: '/home',
		display: 'Home',
	},
	{
		path: '/services',
		display: 'Layanan',
	},
	{
		path: '/',
		display: 'Blog',
	},
];

const Links2 = [
	{
		path: '/barbers',
		display: 'Temukan Barber',
	},
	{
		path: '/barbers',
		display: 'Booking Barber',
	},
	{
		path: '/',
		display: 'Beri Masukan',
	},
];

const Links3 = [
	{
		path: '/',
		display: 'Donate',
	},
	{
		path: '/contact',
		display: 'Kontak Kami',
	},
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="pb-16 pt-10">
			<div className="container">
				<div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
					<div>
						{/* <img src={logo} alt="" /> */}
						<p className="text-[16px] leading-7 font-[400] text-textColor">
							@Fs-7 all right reserved {year}
						</p>

						<div className="flex items-center gap-3 mt-4">
							{socialMedia.map((link, index) => (
								<Link
									to={link.path}
									key={index}
									className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
									{link.icon}
								</Link>
							))}
						</div>
					</div>

					<div>
						<h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
							Menu
						</h2>

						<ul>
							{Links1.map((item, index) => (
								<li key={index} className="mb-4">
									<Link
										to={item.path}
										className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
										{item.display}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
							Saya ingin
						</h2>

						<ul>
							{Links2.map((item, index) => (
								<li key={index} className="mb-4">
									<Link
										to={item.path}
										className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
										{item.display}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
							Support kami
						</h2>

						<ul>
							{Links3.map((item, index) => (
								<li key={index} className="mb-4">
									<Link
										to={item.path}
										className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
										{item.display}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
