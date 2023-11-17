import React from 'react';
import TestimonialList from './TestimonialList';

const Testimonial = () => {
	return (
		<section>
			<div className="container">
				<div className="xl:w-[470px] mx-auto">
					<h2 className="heading text-center">Penilaian</h2>
					<p className="text__para text-center mb-4">
						Penilaian dari beberapa pelanggan
					</p>
				</div>
				<TestimonialList />
			</div>
		</section>
	);
};

export default Testimonial;
