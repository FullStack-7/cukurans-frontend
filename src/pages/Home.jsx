import BarberList from '../components/Barbers/BarberList';
import Faqlist from '../components/Faq/Faqlist';
import HeroSection from '../components/Hero/HeroSection';
import Menu from '../components/Menu/Menu';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
	return (
		<>
			<HeroSection />
			<Menu />
			<BarberList />
			<Faqlist />
			<Testimonial />
		</>
	);
};

export default Home;
