 import SpecialOffers from "./SpecialOffers";
 import backgroundVideo from "../resources/drumsHD.mp4"
 import githubLogo from "../resources/logos/github-mark-white.svg";
 import linkedinLogo from "../resources/logos/In-White-72.png";
 import { vinylData } from "./productsData";

 function Home() {
    return (
        <>
            <video id="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <img id="background-photo" src="backgroundPhones.png" alt="background"></img>
            <SpecialOffers offers={vinylData} />
            <div className="additional-info">
                <div>
                    <p>For all the music lovers since 1974</p>
                    <p>Isn't quite what you're looking for?</p>
                    <p>Check us out on other platforms:</p>
                </div>
                <div>
                    <a href="https://github.com/hebiscus">
                        <img src={githubLogo} alt="Github Logo"></img>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/katarzyna-gasiorek/">
                        <img src={linkedinLogo} alt="Linkedin Logo"></img>
                        Linkedin
                    </a>
                </div>
            </div>
        </>
    )
 };

 export default Home;
