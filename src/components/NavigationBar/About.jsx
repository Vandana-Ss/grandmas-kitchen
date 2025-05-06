import Footer from "../Footer";
import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <section
                className="flex gap-0 rounded-xl p-10 bg-cover bg-center relative h-150 w-[95%] container mx-auto "
                style={{
                    backgroundImage: "url('/aboutus-images/community.jpg')",
                }}
            >
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/beach.jpg" className="w-[80%] h-auto" alt="Beach" />
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/kids.jpg" className="w-[95%] h-auto" alt="Kids" />
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/human-kindness.jpg" className="w-[80%] h-auto" alt="Kindness" />
                </div>
            </section>

            <section className="container mt-15 w-[60%] mx-auto">
                <h1 className=" text-[1.5em] font-playfair mb-0">
                    WELCOME TO GRANDMA'S KITCHEN RECIPES
                </h1>
                <h3 className="pb-10 italic font-light">– Taste the Love, Share the Warmth</h3>

                <p className="mb-7">Based in Visakhapatnam, Grandam’s Kitchen Recipes is more than just a food space
                    — it’s a heartfelt journey through traditional Indian cooking, inspired by the timeless
                    flavors and love that only a grandmother can bring.
                </p>

                <p className="mb-7">
                    Our platform is built on the belief that the best food isn’t just delicious
                    — it tells a story. Every recipe we share is rooted in family traditions,
                    slow-cooked with care, and made easy for today’s busy cooks. From comforting curries
                    and festive sweets to everyday meals with a nostalgic twist, our step-by-step guides
                    help you recreate that warm, homely magic in your own kitchen.
                </p>

                <p className="mb-7">
                    But our mission goes beyond food.
                </p>

                <p>
                    At Grandam’s, we’re proud to give back to the community. A portion of everything we earn goes toward
                    feeding the hungry, supporting local women’s shelters, and empowering underprivileged families with
                    basic cooking education and grocery support. Through food, we’re not just filling stomachs
                    — we’re creating bonds, restoring dignity, and spreading kindness one plate at a time.
                </p>

                <p className="mb-7">
                    Join us in reviving tradition, uplifting lives, and sharing meals that are made with love — and meant to be shared.
                </p>

                <p className="mb-7">
                    Because in Grandam’s Kitchen, everyone deserves a seat at the table.
                </p>

                <div className="mt-25">
                    <h1 className="text-[1.5em] font-playfair mb-0">
                        RESERVATIONS
                    </h1>

                    <h3 className="p-8 font-light">We recommend you book a table via Resy to avoid disappointment. We are open for walk-ins too subject to availability.</h3>
                </div>

                <div className="">
                    <h1 className="text-[1.5em] font-playfair mb-0">
                        PRESS ENQUIRIES
                    </h1>

                    <h3 className="p-8 font-light">For Press & Marketing enquiries please email <span className="bg-[#a7d6f0] cursor-pointer">enquiries@grandmakr.co.in</span></h3>
                </div>

                <div className="">
                    <h1 className="text-[1.5em] font-playfair mb-0">
                        PRIVATE DINING & EVENTS
                    </h1>

                    <h3 className="p-8 pb-0 font-light">To learn more about our new events space and what we can offer, please visit our dedicated</h3>
                    <Link to="/events" className="mt-0 font-light text-[#42965f] underline decoration-[#42965f] decoration-1px">Private Dining & Events page</Link>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default About;
