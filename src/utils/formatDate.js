export default function formatDate(isoDateString) {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const date = new Date(isoDateString);
	return date.toLocaleDateString('id-ID', options);
}
