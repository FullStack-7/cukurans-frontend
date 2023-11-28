import BarberCard from '../../components/Barbers/BarberCard.jsx';

const Barbers = () => {
	return (
		<>
			<section>
				<div className="container text-center">
					<h2 className="heading">Pilihlah Barber Sesukamu</h2>
					<div className="max-w-[570px] mt-[22px] mx-auto bg-[#0066FF2c] rounded-md flex items-center justify-between">
						<input
							type="search"
							className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
							placeholder="Search Barber"
						/>
						<button className="btn mt-0 rounded-[0px] rounded-r-md">
							Cari
						</button>
					</div>
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
