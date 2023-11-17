import { useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const Faqitem = ({ item }) => {
	const [isOpen, setisOpen] = useState(false);

	const toggleAccordion = () => {
		setisOpen(!isOpen);
	};

	return (
		<div className="p-2 lg:p-4 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
			<div
				className="flex items-center justify-between gap-5"
				onClick={toggleAccordion}>
				<h4 className="text-[16px] leading-6 lg:text-[18px] lg:leading-7 text-headingColor font-medium">
					{item.question}
				</h4>
				<div
					className={`w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center`}>
					{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
				</div>
			</div>
			{isOpen && (
				<div className="mt-4">
					<p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
						{item.content}
					</p>
				</div>
			)}
		</div>
	);
};

export default Faqitem;
