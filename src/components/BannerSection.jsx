import cake from "../assets/BlackForestTrifle.jpg";
import bakery from "../assets/bakery-home.jpg";
function BannerSection(){
    return(
        <section>
            
                <div className="w-full">
                    <img src={bakery} className="h-150 w-[95%] container mx-auto rounded-xl"></img>
                </div>
                
        </section>
    );
}

export default BannerSection;