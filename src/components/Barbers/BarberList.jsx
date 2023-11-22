import { barbers } from '../../assets/data/barbers.js';
import BarberCard from './BarberCard.jsx';

const BarberList = () => {
	return (
		<section>
			<div className="container">
				<div className="xl:w-[470px] mx-auto">
					<h2 className="heading text-center">Barber kami</h2>
					<p className="text_para text-center mb-4">
						Tenaga professional yang berada didalam barbershop kami
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
					{barbers.map((barber) => (
						<BarberCard key={barber.id} barber={barber} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BarberList;
