import Footer from "../Footer";

function Events() {
    return (
        <>
            <section
                className="flex gap-0 rounded-xl p-10 bg-cover bg-center relative h-150 w-[95%] container mx-auto "
                style={{
                    backgroundImage: "url('/aboutus-images/community.jpg')",
                }}
            >
            </section>

            <section className="container mt-15 w-[50%] mx-auto">
                <h1 className=" text-[1.5em] font-playfair pb-10">
                    PRIVATE DINING & EVENTS VISHAKHAPATNAM
                </h1>

                <p className="mb-7">With a variety of unique event options, Grandma's Kitchen Recipes is available
                    for large party bookings and full restaurant buyouts. From intimate seated private dining
                    room experiences, cocktails at your private bar, and receptions throughout our multiple
                    spaces, our venue can accommodate groups ranging in size from 16 to 150 guests.
                </p>

                <p className="text-[#42965f]">Options for your Event:</p>

                <p className="mb-7">
                    The 160 sq. ft private dining room can seat 16-20 guests, is the perfect snug for an
                    intimate & cosy brunch or dinner for those extra special celebrations. Our family style
                    sharing menus are available to pre-order accompanied by a varied selection of cocktail/wine & champagne
                    packages to create the perfect event for the moments that really count.
                </p>

                <p className="mb-7">
                    Our basement buyout option is perfect for larger scale events such as product launches, PR events, Christmas dinners,
                    or special events such as birthdays, baby showers or rehearsal dinners. Comfortably seating 60 guests (or 70 standing)
                    with your own private bar, the space is well equipped and can be set up in multitude of ways to suit any seating or standing event.
                </p>

                <p className="mb-7">
                    Full buyout is available hosting up to 150-200 guests throughout the whole venue making the space perfect for those truly
                    larger than life get-togethers such as wedding ceremonies or receptions. A gorgeous open plan upstairs area seating
                    up to 90 guests with floor to ceiling windows and a large event space featuring its own private bar, a grand venue for a
                    grand celebration. Make the most of the venue with an intimate sit-down dinner upstairs, followed by a dazzling after party in the basement bar.
                </p>

                <p className="mb-7">
                    Please contact us below for all of your event enquiries.
                </p>


                {/*BUTTONS SECTION FOR RESERVATION AND BROCUHER*/}
                <div className="flex justify-center gap-15 pb-20 pt-5">
                        <button className="bg-[#42965f] text-white p-2 rounded-md h-10 mt-2 cursor-pointer hover:bg-[#377f4e] transition duration-300">DOWNLOAD BROCHURE</button>
                        <button className="bg-[#42965f] text-white p-2 rounded-md h-10 mt-2 cursor-pointer hover:bg-[#377f4e] transition duration-300">ENQUIRE NOW</button>
                </div>


                
            </section>

            <Footer />
        </>
    )
}

export default Events