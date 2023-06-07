 import SpecialOffers from "./SpecialOffers";
 import xtc from "../resources/product-pictures/XTC.png";
 import klark from "../resources/product-pictures/Klark Kent.png";
 import jah from "../resources/product-pictures/jah wurzel.png";
 import backgroundVideo from "../resources/drumsHD.mp4"
 import githubLogo from "../resources/logos/github-mark-white.svg";
 import linkedinLogo from "../resources/logos/In-White-72.png";

 function Home() {
    return (
        <>
            <video id="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <SpecialOffers pictures={VinylPictures} />
            <div className="additional-info">
                <p>For all the music lovers since 1974
                    Isn't quite what you're looking for?
                    Check us out on other platforms:
                </p>
                <a href="https://github.com/hebiscus">
                    <img src={githubLogo} alt="Github Logo"></img>
                    Github
                </a>
                <a href="https://www.linkedin.com/in/katarzyna-gasiorek/">
                    <img src={linkedinLogo} alt="Linkedin Logo"></img>
                    Linkedin
                </a>
            </div>
        </>
    )
 };

 export default Home;

 const VinylPictures = [
    xtc, klark, jah
 ];