const Contact = () => {
	return (
		<section>
			<div className="px-4 mx-auto max-w-screen-md">
				<h2 className="heading text-center">Kontak kami</h2>
				<p className="mb-6 lg:mb-14 font-light text-center text_para">
					Untuk informasi lebih lanjut, hubungi kami
				</p>
				<form action="" className="space-y-8">
					<div>
						<label htmlFor="" className="form_label">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="example@mail.com"
							className="form_input mt-1 rounded-lg"
						/>
					</div>
					<div>
						<label htmlFor="" className="form_label">
							Subjek
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Beri tahu kami bagaimana kami dapat membantu Anda"
							className="form_input mt-1 rounded-lg"
						/>
					</div>
					<div>
						<label htmlFor="" className="form_label">
							Pesan
						</label>
						<textarea
							rows="6"
							type="text"
							name="message"
							id="message"
							placeholder="kirim pesanmu disini"
							className="form_input mt-1 rounded-lg"
						/>
					</div>
					<button type="submit" className="btn rounded-lg sm:w-fit">
						Kirim pesan
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
