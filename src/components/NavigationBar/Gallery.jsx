function Gallery(){
    return(
        <>
            <section
                className="flex gap-0 mx-10 rounded-xl p-10 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/aboutus-images/community.jpg')",
                }}
            >
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/beach.jpg" className="w-[80%] h-auto" alt="Beach" />
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/kids.jpg" className="w-[80%] h-auto" alt="Kids" />
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src="/aboutus-images/human-kindness.jpg" className="w-[80%] h-auto" alt="Kindness" />
                </div>
            </section>
            <div>
                <h1>OUR GALLERY</h1>
            </div>
        </>
    )
}

export default Gallery