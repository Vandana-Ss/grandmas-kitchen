import BannerSection from "../BannerSection";
import Footer from "../Footer";

function Menu() {
	return (
		<>
			<BannerSection />
			<section className="container mt-15 w-[85%] mx-auto">
				<h1 className="underline decoration-[3px] decoration-[#42965f] underline-offset-[10px] text-[1.5em] font-playfair pb-13">
					MENU
				</h1>

				<nav className="flex justify-center">
					<ul className="flex flex-wrap justify-center gap-6 text-xs text-center">
						<a href="#starters"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">STARTERS</li></a>
						<a href="#brunch"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">BRUNCH</li></a>
						<a href="#mains"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">MAIN COURSE</li></a>
						<a href="#sides"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">SIDES</li></a>
						<a href="#desserts"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">DESSERTS</li></a>
						<a href="#drinks"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">DRINKS & MOCKTAILS</li></a>
						<a href="#shakes"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">SMOOTHIES & SHAKES</li></a>
						<a href="#tea"><li className="text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200">TEA & COFFEE</li></a>
					</ul>
				</nav>

				{/* Sections start here */}
				{[
					{
						id: "starters",
						title: "STARTERS",
						items: [
							["Vegetable Spring Rolls", "(cabbage, carrot, spring onions, sweet chili dip)"],
							["Corn Fritters", "(sweet corn, herbs, gram flour)"],
							["Honey Garlic Chicken Wings", "(chicken wings, honey, garlic sauce)"],
							["Paneer Tikka Bites 🌟", "(cottage cheese, yogurt marinade, spices)"],
							["Tomato Basil Bruschetta", "(fresh tomatoes, basil, olive oil, baguette)"],
							["BBQ Mushroom Skewers", "(button mushrooms, BBQ glaze)"]
						]
					},
					{
						id: "brunch",
						title: "BRUNCH",
						items: [
							["Fluffy Buttermilk Pancakes 🌟", "(buttermilk, flour, butter, vanilla)"],
							["Avocado Toast on Sourdough", "(fresh avocado, olive oil, poached egg)"],
							["Masala Omelette with Toast", "(eggs, onion, tomato, green chilies)"],
							["Aloo Paratha with Fresh Yogurt", "(whole wheat, spiced mashed potatoes, curd)"],
							["Banana Walnut French Toast", "(ripe bananas, cinnamon, walnuts)"],
							["Mini Waffles with Berries", "(waffle batter, strawberries, maple syrup)"]
						]
					},
					{
						id: "mains",
						title: "MAINS COURSE",
						items: [
							["Creamy Butter Chicken 🌟", "(chicken, tomato gravy, butter, cream)"],
							["Slow-Cooked Mutton Curry", "(mutton, onions, yogurt, whole spices)"],
							["Vegan Chickpea Spinach Stew", "(chickpeas, spinach, coconut milk)"],
							["Grilled Cottage Cheese Steak", "(paneer, herbs, grilled veggies)"],
							["Old-School Baked Mac and Cheese", "(pasta, cheddar, mozzarella)"],
							["Dal Tadka with Jeera Rice", "(yellow lentils, cumin rice, ghee)"],
							["Grandma’s Veggie Lasagna", "(lasagna sheets, spinach, ricotta, marinara sauce)"]
						]
					},
					{
						id: "sides",
						title: "SIDES",
						items: [
							["Hand-Cut Potato Wedges", "(potatoes, cajun seasoning, herbs)"],
							["Roasted Vegetables", "(zucchini, carrots, bell peppers, thyme butter)"],
							["Fresh Green Salad", "(lettuce, cucumber, lemon vinaigrette)"],
							["Pickled Onions & Homemade Achar", "(red onions, vinegar, mustard seeds)"]
						]
					},
					{
						id: "desserts",
						title: "DESSERTS",
						items: [
							["Classic Black Forest Trifle", "(chocolate sponge, cherries, whipped cream)"],
							["Warm Apple Crumble", "(apples, oats, brown sugar, cinnamon)"],
							["Gajar Halwa (Carrot Pudding) 🌟", "(grated carrots, ghee, milk, dry fruits)"],
							["Gulab Jamun Cheesecake", "(gulab jamun, cream cheese, biscuit base)"],
							["Chocolate Lava Cake", "(dark chocolate, flour, butter)"],
							["Mango Mousse Cups", "(fresh mango pulp, cream, gelatin)"]
						]
					},
					{
						id: "drinks",
						title: "DRINKS & MOCKTAILS",
						items: [
							["Virgin Mojito", "(fresh mint, lime juice, soda)"],
							["Strawberry Basil Lemonade", "(strawberries, basil, lemon)"],
							["Mango Mule", "(mango puree, ginger ale, mint leaves)"],
							["Cucumber Cooler", "(cucumber juice, lime, tonic water)"],
							["Blueberry Mint Fizz", "(blueberries, mint, soda water)"]
						]
					},
					{
						id: "shakes",
						title: "SMOOTHIES & SHAKES",
						items: [
							["Oreo Milkshake", "(oreo cookies, vanilla ice cream, milk)"],
							["Peanut Butter Banana Smoothie", "(peanut butter, banana, almond milk)"],
							["Strawberry Banana Smoothie", "(strawberry, banana, oat milk, maple syrup)"],
							["Matcha magic", "(matcha, thick cream milk) *contains dairy"]
							// Add more if needed
						]
					},
					{
						id: "tea",
						title: "Tea & Coffee",
						items: [
							["Cappuccino / Latte / Americano", "(fresh brewed espresso, steamed milk) *contains dairy"],
							["Masala Chai", "(black tea, spices like cardamom, ginger) *contains dairy"],
							["Green Tea with Honey", "(green tea, honey)"],
							["Iced Caramel Latte", "(cold milk, espresso, caramel sauce) *contains dairy"]
						]
					}
				].map((section) => (
					<div className="container mx-auto pt-15" id={section.id} key={section.id}>
						<h2 className="mb-10 underline decoration-[2px] decoration-[#42965f] underline-offset-[8px]">{section.title}</h2>
						<ul className="container ml-[5px] text-left">
							{section.items.map(([dish, desc], index) => (
								<li key={index} className="mb-2">
									<span className="font-medium">{dish}</span>
									<p className="italic font-light text-xs">{desc}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			<Footer/>
		</>
	);
}

export default Menu;
