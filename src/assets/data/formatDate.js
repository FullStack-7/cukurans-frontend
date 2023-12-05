export const formatDate = (date, config) => {
	const options = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};

	const option = config ? config : options;

	return new Date(date).toLocaleDateString('en-US', option);
};
