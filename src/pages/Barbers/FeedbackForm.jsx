import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [reviewText, setReviewText] = useState('');

	const handleSubmitText = (e) => {
		e.preventDefault();
	};

	return (
		<form action="">
			<div>
				<h3 className="text-headigColor text-[16px] leading-6 font-semibold mb-4 mt-0">
					Berikan penilaian terhadap kapster kami
				</h3>

				<div>
					{[...Array(5).keys()].map((item, index) => {
						index += 1;

						return (
							<button
								key={index}
								type="button"
								className={`
              ${
								index <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'
							} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
								onClick={() => setRating(index)}
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(rating)}
								onDoubleClick={() => {
									setHover(0);
									setRating(0);
								}}>
								<span>
									<AiFillStar />
								</span>
							</button>
						);
					})}
				</div>
			</div>

			<div className="mt-[30px]">
				<h3 className="text-headigColor text-[16px] leading-6 font-semibold mb-4 mt-0">
					Bagikan pengalaman mu dengan kapster kami
				</h3>

				<textarea
					className="border border-solid border-[#006ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
					rows="5"
					placeholder="Write your message"
					onClick={() => setReviewText(e.target.value)}></textarea>
			</div>

			<button
				type="submit"
				className="btn rounded-lg"
				onClick={handleSubmitText}>
				Kirim pesan
			</button>
		</form>
	);
};

export default FeedbackForm;
