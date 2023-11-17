import Faqitem from './Faqitem';
import { faqs } from '../../assets/data/faqs.js';
import faqImg from '../../assets/faq-img.png';

const Faqlist = () => {
	return (
		<section>
			<div className="container">
				<div className="flex justify-between gap-[50px] lg:gap-0">
					<div className="w-1/2 hidden md:block ">
						<img src={faqImg} alt="" className="items-center" />
					</div>

					<div className="w-full md:w-1/2">
						<h3 className="heading">Pertanyaan yang sering ditanyakan</h3>
						<ul className="mt-[26px]">
							{faqs.map((item, index) => (
								<Faqitem item={item} key={index} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqlist;
