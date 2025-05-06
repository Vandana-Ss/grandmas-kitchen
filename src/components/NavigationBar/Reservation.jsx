function Reservation(){
    return(
        <section>
            <h2 className="text-[#42965f] underline decoration-[3px] underline-offset-[18px] text-[1.5em] pt-10">RESERVATIONS</h2>

            <form className="flex flex-col mt-10">
                <label className="text-left p-1 font-light">Number Of People <span className="text-gray-400 italic">- Required</span></label>
                <input type="number" placeholder="Number of People" required className="border-[1px] p-3 border-gray-300 outline-none font-light"></input>

                <label className="text-left p-1 font-light">Date <span className="text-gray-400 italic">- Required</span></label>
                <input type="date" required className="border-[1px]  p-3 border-gray-300 outline-none font-light"></input>

                <label className="text-left p-1 font-light">Time <span className="text-gray-400 italic">- Optional</span></label>
                <input type="time" className="border-[1px] p-3 border-gray-300 outline-none font-light"></input>
            </form>

            <button className="bg-black text-white p-1 w-[15%] rounded-md mt-10 mb-20 cursor-pointer hover:bg-gray-700">Find Table</button>
        </section>
    )
}

export default Reservation