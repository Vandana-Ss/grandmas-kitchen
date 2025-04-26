import Footer from "../components/Footer.jsx";


function GrandmasKitchen() {
	return (
		<>
			<section className="container mt-15 w-[50%] mx-auto">
				<h1 className="underline decoration-[3px] decoration-[#42965f] underline-offset-[18px] text-[1.5em] font-playfair pb-13">
					GRANDMA'S KITCHEN RECIPES
				</h1>

				<p className="mb-7">At the heart of Grandma’s Kitchen Recipes is more than just food—it’s nostalgia,
					warmth, and the magic of home. We believe that some of the best memories are made
					around the kitchen table, where stories are shared, laughter echoes, and the
					comforting aroma of traditional recipes fills the air.
				</p>

				<p className="mb-7">
					This is our tribute to the timeless touch of a grandmother’s love. Every dish is crafted
					with care, carrying flavors passed down through generations—recipes that are simple,
					soulful, and meant to be shared.
				</p>

				<p className="mb-7">
					For us, it’s not just about what’s on the plate. It’s about the feeling of coming home.
					Whether it’s a hearty trifle, a spice-rich curry, or a sweet treat from childhood,
					Grandma’s Kitchen Recipes celebrates the beauty of cooking with love, patience, and purpose.
				</p>

				<p>
					Rooted in tradition, inspired by memories, and seasoned with warmth—this is what makes our kitchen special.
				</p>

			</section>

			<section className="container mx-auto mt-40 w-[70%]">
				<div className="flex justify-between w-full">
					<div className="w-1/2">
						<h2 className="text-[1.5em] font-playfair pb-5">BRUNCH /</h2>
						<ul>
							<li>Monday - Friday:</li>
							<li>10:00am - 3:00pm</li>
						</ul>
						<p className="font-thin"><em>*We are closed for brunch on Saturdays & Sundays — </em></p>
						<p className="font-thin"> <em>taking the morning off to recharge!</em></p>
					</div>

					<div className="w-1/2">
						<h2 className="text-[1.5em] font-playfair pb-5">DINNER /</h2>
						<ul>
							<li>Monday - Thursday:</li>
							<li>7:00pm - 11:00pm</li>
						</ul>
						<ul>
							<li>Friday - Saturday:</li>
							<li>7:00pm - 2:00am</li>
						</ul>
						<ul>
							<li>Sunday:</li>
							<li>6:30pm - 12:00am</li>
						</ul>
					</div>
				</div>
			</section>

			<div className="container mx-auto">
				<div className="flex justify-center gap-4 mt-10">
					<button className="bg-[#42965f] text-white px-6 py-2 rounded-md hover:bg-[#377f4e] transition duration-300 hover:cursor-pointer">
						RESERVATION
					</button>
					<button className="border border-[#42965f] text-[#42965f] px-6 py-2 rounded-md hover:bg-[#f4f4f4] transition duration-300 hover:cursor-pointer">
						VIEW MENU
					</button>
				</div>

				<p className="text-sm text-gray-600 mt-5">info.grandma@yahoo.com</p>
				<p className="text-sm text-gray-600 mt-0">+91 9876543210</p>
			</div>

			<Footer/>

		</>
	);
}

export default GrandmasKitchen