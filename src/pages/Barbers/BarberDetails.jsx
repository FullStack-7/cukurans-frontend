import { useState } from 'react';

import barberImg from './../../assets/barberImg1.jpg';
import starIcon from './../../assets/Star.png';
import BarberAbout from './BarberAbout';
import SideForm from './SideForm';
import Feedback from './Feedback';

const BarberDetails = () => {
	const [tab, setTab] = useState('');
	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				<div className="grid md:grid-cols-3 gap-[50px]">
					<div className="md:col-span-2">
						<div className="flex items-center gap-5">
							<figure className="max-w-[240px] max-h-[240px]">
								<img src={barberImg} alt="" className="w-full rounded-lg" />
							</figure>

							<div>
								<span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] font-semibold rounded lg:leading-7">
									5+ Pengalaman
								</span>
								<h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
									Joni Iskandar
								</h3>
								<div className="flex items-center gap-[6px]">
									<span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
										<img src={starIcon} alt="" /> 4.8
									</span>
									<span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
										(272)
									</span>
								</div>
								<p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-3">
									Saya joni iskandar umur 25 tahun, mempunyai pengalaman
									dibidang cukur selama 5 tahun lebih.
								</p>
							</div>
						</div>

						<div className="mt-[50px] border-b border-solid border-[#ffffff]">
							<button
								onClick={() => setTab('about')}
								className={`${
									tab === 'about' &&
									'border-b border-solid border-primaryColor w-5'
								}py-2 px-5 mr-5 text-[18px] leading-7 text-headingColor font-semibold`}>
								Tentang saya
							</button>
							<button
								onClick={() => setTab('feedback')}
								className={`${
									tab === 'feedback' &&
									'border-b border-solid border-primaryColor w-5'
								}py-2 px-5 mr-5 text-[18px] leading-7 text-headingColor font-semibold`}>
								Feedback
							</button>
						</div>

						<div className="mt-[50px]">
							{tab === 'about' && <BarberAbout />}
							{tab === 'feedback' && <Feedback />}
						</div>
					</div>

					<div>
						<SideForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BarberDetails;
