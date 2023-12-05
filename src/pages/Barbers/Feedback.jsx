import { useState } from 'react';
import FeedbackForm from './FeedbackForm.jsx';

const Feedback = () => {
	const [formFeedback, setFormFeedback] = useState(false);
	return (
		<div>
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
