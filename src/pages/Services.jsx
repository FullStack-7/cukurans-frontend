import icon1 from '../assets/services1.png';
import icon2 from '../assets/services2.png';
import icon3 from '../assets/services3.png';

const Services = () => {
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
					<div class="shadow-lg rounded-xl mt-[30px] lg:mt-[55px]">
						<div class="mx-4 mt-4 rounded-xl bg-slate-100">
							<img src={icon1} class="w-full h-full" />
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-2">
								<h2 class="text-lg antialiased font-bold leading-relaxed text-headingColor">
									Warna Rambut
								</h2>
								<p class="text-lg antialiased font-semibold leading-relaxed text-purpleColor">
									Rp. 30.000
								</p>
							</div>
							<p class="text_para antialiased font-normal leading-normal text-gray-700 opacity-75">
								Kami memiliki pelayanan mewarnai rambut, dengan berbagai macam
								pilihan warna.
							</p>
						</div>
					</div>
					<div class="shadow-lg rounded-xl mt-[30px] lg:mt-[55px]">
						<div class="mx-4 mt-4 rounded-xl bg-slate-100">
							<img src={icon2} class="w-full h-full" />
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-2">
								<h2 class="text-lg antialiased font-bold leading-relaxed text-headingColor">
									Keramas
								</h2>
								<p class="text-lg antialiased font-semibold leading-relaxed text-primaryColor">
									Rp. 20.000
								</p>
							</div>
							<p class="text_para antialiased font-normal leading-normal text-gray-700 opacity-75">
								Kami memiliki pelayanan keramas rambut, dapat membuat rambutmu
								menjadi sehat, wangi, dan berkilau.
							</p>
						</div>
					</div>
					<div class="shadow-lg rounded-xl mt-[30px] lg:mt-[55px]">
						<div class="mx-4 mt-4 rounded-xl bg-slate-100">
							<img src={icon3} class="w-full h-full" />
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-2">
								<h2 class="text-lg antialiased font-bold leading-relaxed text-headingColor">
									Cukur Jenggot
								</h2>
								<p class="text-lg antialiased font-semibold leading-relaxed text-yellowColor">
									Rp. 10.000
								</p>
							</div>
							<p class="text_para antialiased font-normal leading-normal text-gray-700 opacity-75">
								Cukur jenggot, merupakan pelayanan yang kami sediakan. Untuk
								para lelaki yang mempunyai jenggot atau kumis yang tebal
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
