import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config.js';
import axios from 'axios';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		getServices();
	}, []);

	const getServices = async () => {
		try {
			const response = axios.get(`${BASE_URL}/services`);

			const { data } = await response;

			setServices(data);
		} catch (error) {
			console.info(error);
		}
	};

	return (
		<section>
			<div className="container">
				<div className="lg:w-[470px] mx-auto">
					<h2 className="heading text-center">Layanan Kami</h2>
					<p className="text_para text-center">
						Layanan selain potong rambut di dalam barbershop kami
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
					{services.data?.map((service) => (
						<div
							className="shadow-lg rounded-xl mt-[30px] lg:mt-[55px]"
							key={service._id}>
							{/* <div className="mx-4 mt-4 rounded-xl bg-slate-100">
								<img src={icon1} className="w-full h-full" />
							</div> */}
							<div className="p-6">
								<div className="flex items-center justify-between mb-2">
									<h2 className="text-lg antialiased font-bold leading-relaxed text-headingColor">
										{service.name}
									</h2>
									<p className="text-lg antialiased font-semibold leading-relaxed text-purpleColor">
										Rp. {service.price}
									</p>
								</div>
								<p className="text_para antialiased font-normal leading-normal text-gray-700 opacity-75">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
