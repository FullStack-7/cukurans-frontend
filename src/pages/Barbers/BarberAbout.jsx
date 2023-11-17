import { formatDate } from '../../assets/data/formatDate.js';

const BarberAbout = () => {
	return (
		<div>
			<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
				Tentang Saya
			</h3>
			<p className="text_para">
				Di balik setiap potongan rambut yang rapi dan kumis yang teratur,
				terdapat seni yang tak terbantahkan. Joni Iskandar adalah barber dengan
				pengalaman 5 tahun bukan hanya seorang ahli dalam memotong rambut,
				tetapi juga seorang seniman yang memahami keunikan setiap individu yang
				duduk di kursinya. Satu hal yang membedakan barber berpengalaman adalah
				perhatian mereka terhadap detail. Mereka tidak hanya memotong rambut,
				tetapi mereka menciptakan pengalaman unik untuk setiap pelanggan. Dari
				pemilihan gaya yang sesuai dengan bentuk wajah hingga ke akhir potongan
				yang tajam, setiap langkah diambil dengan cermat.
			</p>

			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
					Pengalaman
				</h3>

				<ul className="grid sm:grid-cols-2 gap-[30px] pt-4">
					<li className="p-4 rounded-lg bg-[#f3f3d7]">
						<span className="text-yellowColor text-[15px] leading-6 font-semibold">
							{formatDate('9-08-2016')} - {formatDate('12-04-2017')}
						</span>

						<p className="text-[16px] leading-6 font-medium text-textColor">
							Kursus cukur di Hairnerds Studio
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BarberAbout;
