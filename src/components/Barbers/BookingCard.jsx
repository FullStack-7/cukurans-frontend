import { IoIosCloseCircleOutline } from "react-icons/io"
import { SlMustache } from "react-icons/sl"
import { LuPaintbrush2 } from "react-icons/lu"
import { FaHandHoldingWater } from "react-icons/fa"
import { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const bookingHours = [
	"10:00 AM",
	"10:30 AM",
	"11:00 AM",
	"11:30 AM",
	"12:00 PM",
	"01:00 PM",
	"01:30 PM",
	"02:00 PM",
	"02:30 PM",
	"03:00 PM",
	"03:30 PM",
	"04:00 PM",
	"04:30 PM",
	"05:00 PM",
	"05:30 PM",
	"06:00 PM",
	"06:30 PM",
	"07:00 PM",
	"07:30 PM",
	"08:00 PM",
	"08:30 PM",
]

const services = [
	{
		id: 1,
		name: "warnai rambut",
		price: 100000,
		icon: <LuPaintbrush2 className="text-[40px]" />,
		smallIcon: <LuPaintbrush2 className="text-[20px]" />,
	},
	{
		id: 2,
		name: "keramas",
		price: 100000,
		icon: <FaHandHoldingWater className="text-[40px]" />,
		smallIcon: <FaHandHoldingWater className="text-[20px]" />,
	},
	{
		id: 3,
		name: "cukur jenggot",
		price: 100000,
		icon: <SlMustache className="text-[40px]" />,
		smallIcon: <SlMustache className="text-[20px]" />,
	},
]

const BookingCard = ({ closeModal }) => {
	const [bookingDate, setBookingDate] = useState(new Date())
	const [bookingHour, setBookingHour] = useState(bookingHours[0])
	const haircut = 100000
	const [total, setTotal] = useState(haircut)
	const [selectedServices, setSelectedServices] = useState([])

	useEffect(() => {
		if (selectedServices.length > 0) {
			const totalServices = selectedServices.reduce((total, service) => {
				return total + service.price
			}, 0)
			setTotal(haircut + totalServices)
		} else {
			setTotal(haircut)
		}
	}, [selectedServices])

	// valid days are from today until one month ahead
	// valid day only on monday, thursday, and saturday
	const currentDate = new Date()
	// Calculate the date one month ahead
	const oneMonthAhead = new Date()
	oneMonthAhead.setMonth(currentDate.getMonth() + 1)

	const tileDisabled = ({ date }) => {
		return (
			date < currentDate ||
			date >= oneMonthAhead ||
			!(date.getDay() === 1 || date.getDay() === 4 || date.getDay() === 6)
		)
	}

	// Function to toggle and add services to state
	const toggleService = (service) => {
		const isServiceSelected = selectedServices.some(
			(selected) => selected.id === service.id,
		)

		if (isServiceSelected) {
			// Remove service if already selected
			const updatedServices = selectedServices.filter(
				(selected) => selected.id !== service.id,
			)
			setSelectedServices(updatedServices)
		} else {
			// Add service if not selected
			setSelectedServices([...selectedServices, service])
		}
	}

	return (
		<div className="fixed top-0 left-0">
			<div className="w-screen h-screen bg-black bg-opacity-40">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-96 w-full px-5">
					<div className="max-h-[500px] overflow-scroll shadow-md rounded-md bg-white p-5 w-full relative">
						<IoIosCloseCircleOutline
							className="absolute top-3 right-3 text-[40px] cursor-pointer"
							onClick={() => closeModal()}
						/>
						<p className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3">
							Book Appointment
						</p>
						<p>Layanan tambahan</p>
						<div className="grid grid-cols-3 gap-3 text-sm py-3">
							{services.map((service, index) => (
								<div
									key={"service-" + index}
									className="col-span-1 text-center"
									onClick={() => toggleService(service)}
								>
									<button className="rounded-full border border-black p-2 mb-2">
										{service.icon}
									</button>
									<p>{service.name}</p>
								</div>
							))}
						</div>
						<p>Pilih Tanggal</p>
						<Calendar
							onChange={setBookingDate}
							value={bookingDate}
							className={["rounded-lg", "my-4"]}
							tileDisabled={tileDisabled}
						/>

						<p>Pilih waktu mulai</p>

						<select className="w-full" size={3} value={bookingHour}>
							{bookingHours.map((hour, index) => (
								<option
									key={"hour-" + index}
									selected={hour === bookingHour}
									className={`${
										hour === bookingHour ? "bg-blue-300" : "bg-teal-300"
									} mb-2 text-white font-extrabold text-center rounded-lg p-2`}
									onClick={() => setBookingHour(hour)}
								>
									{hour}
								</option>
							))}
						</select>
						<p className="font-extrabold text-lg mt-5 mb-2">Summary</p>
						<div className="grid grid-cols-4 bg-teal-100 shadow-md rounded-md mb-5">
							<div className="bg-teal-600 col-span-1 rounded-s-md text-white px-2 py-3">
								<p className="text-lg font-bold">
									{bookingDate.toLocaleDateString("en-US", {
										weekday: "short",
									})}
								</p>
								<p className="font-extrabold">{bookingDate.getDate()}</p>
								<hr className="my-3 border-2 border-white" />
								<p className="text-xs">{bookingHour}</p>
							</div>
							<div className="col-span-3 p-2 py-3">
								<p className="text-xs mb-3">Layanan Tambahan</p>
								<div className="grid grid-cols-3 gap-3 ">
									{selectedServices.length > 0 ? (
										selectedServices.map((service, index) => (
											<div
												key={"service-" + index}
												className="col-span-1 text-center"
												onClick={() => toggleService(service)}
											>
												<button className="rounded-full border border-black p-2 mb-2">
													{service.smallIcon}
												</button>
												<p className="text-xs">{service.name}</p>
											</div>
										))
									) : (
										<p className="text-xs col-span-3">
											Tidak ada layanan tambahan
										</p>
									)}
								</div>
								<hr className="my-3 border-2 border-white" />
								<p>Total: Rp.{total}</p>
							</div>
						</div>
						<button className="bg-teal-300 py-3 text-center w-full rounded-lg font-extrabold text-white focus:bg-teal-800">
							Buat Janji
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingCard
