import footer from "../assets/footer-img.png";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";

function Footer(){
    return(
        <footer
				style={{
					backgroundImage: `url(${footer})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					minHeight: '300px',
				}}
				className="container mx-auto pt-3 mt-3"
			>
				<div className="flex justify-center gap-3 mt-5">
					<div className="bg-[#a7d6f0] border-1 border-[#51afe1] rounded-full w-10 h-10 flex items-center justify-center">
						<img src={instagram} alt="Instagram Logo" className="w-6 h-6" />
					</div>

					<div className="bg-[#a7d6f0] border-1 border-[#51afe1] rounded-full w-10 h-10 flex items-center justify-center">
						<img src={twitter} alt="Instagram Logo" className="w-6 h-6" />
					</div>

					<div className="bg-[#a7d6f0] border-1 border-[#51afe1] rounded-full w-10 h-10 flex items-center justify-center">
						<img src={facebook} alt="Instagram Logo" className="w-6 h-6" />
					</div>
				</div>

				<div className="flex flex-col justify-center items-center mt-3">
					<p className="bg-[#a7d6f0] inline-block pl-3 pr-3 w-fit h-5 mt-4 text-xs">L-58, SCHEME 54, VISAKHAPATNAM </p>
					<p className="bg-[#a7d6f0] inline-block pl-3 pr-3 w-fit h-5 mt-4 text-xs">DONATE FOR SOCIAL SERVICE</p>
				</div>

				<div className="flex flex-col justify-center items-center mt-4">
					<p className="bg-[#a7d6f0] inline-block pl-3 pr-3 mb-3 text-sm font-extralight">
						Join our social service groups and make a difference! Register with your email to become part of a community.
					</p>
					<button className="bg-[#42965f] text-white px-6 py-2 rounded-md h-10 mt-2 cursor-pointer hover:bg-[#377f4e] transition duration-300">
						Sign Up
					</button>
				</div>

			</footer>
    );
}

export default Footer