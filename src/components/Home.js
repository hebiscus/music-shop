 import ImageSlider from "./ImageSlider";
 import xtc from "../resources/product-pictures/XTC.png";
 import klark from "../resources/product-pictures/Klark Kent.png";
 import jah from "../resources/product-pictures/jah wurzel.png";

 function Home() {
    return (
        <>
            <div className="special-offers">
                <ImageSlider pictures={VinylPictures} />
            </div>
            <div className="additional-info">

            </div>
        </>
    )
 };

 export default Home;

 const VinylPictures = [
    xtc, klark, jah
 ];