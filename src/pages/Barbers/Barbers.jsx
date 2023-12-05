import BarberCard from '../../components/Barbers/BarberCard.jsx';

const Barbers = () => {
	return (
		<>
			<section>
				<div className="container text-center">
					<h2 className="heading">Pilihlah Barber Sesukamu</h2>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
						<BarberCard />
					</div>
				</div>
			</section>
		</>
	);
};

export default Barbers;
