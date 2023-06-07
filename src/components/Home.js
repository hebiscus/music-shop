 import SpecialOffers from "./SpecialOffers";
 import xtc from "../resources/product-pictures/XTC.png";
 import klark from "../resources/product-pictures/Klark Kent.png";
 import jah from "../resources/product-pictures/jah wurzel.png";
 import backgroundVideo from "../resources/drumsHD.mp4"

 function Home() {
    return (
        <>
            <video id="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <SpecialOffers pictures={VinylPictures} />
            <div className="additional-info">
            </div>
        </>
    )
 };

 export default Home;

 const VinylPictures = [
    xtc, klark, jah
 ];