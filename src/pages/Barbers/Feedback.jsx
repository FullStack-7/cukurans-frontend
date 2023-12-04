import { useState } from 'react';
import avatar from '../../assets/avatar.png';
import { formatDate } from '../../assets/data/formatDate.js';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm.jsx';

const Feedback = () => {
	const [formFeedback, setFormFeedback] = useState(false);
	return (
		<div>
			<div className="mb-[50px]">
				<h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
					Penilaian
				</h4>

				<div className="flex justify-between gap-10 mb-[30px]">
					<div className="flex gap-3">
						<figure className="w-10 h-10 rounded-full">
							<img className="w-full" src={avatar} alt="" />
						</figure>

						<div>
							<h4 className="text-[16px] leading-6 font-bold">Bagas Hananto</h4>
							<p className="text-[14px] leading-6 text-textColor">
								{formatDate('12-04-2023')}
							</p>
							<p className="text__para mt-3 font-medium text-[15px]">
								Pelayanan Memuaskan, Saya merekomendasikannya
							</p>
						</div>
					</div>

					<div className="flex gap-1">
						{[...Array(5).keys()].map((index) => (
							<AiFillStar key={index} className="text-yellowColor"></AiFillStar>
						))}
					</div>
				</div>
			</div>

			{!formFeedback && (
				<div className="text-center">
					<button
						className="btn rounded-lg"
						onClick={() => setFormFeedback(true)}>
						Berikan Feedback
					</button>
				</div>
			)}

			{formFeedback && <FeedbackForm />}
		</div>
	);
};

export default Feedback;
