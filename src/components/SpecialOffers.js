import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/home.scss";


function SpecialOffers({ offers }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const offersSlideShow = offers.slice(0, 3);
    const numberOfPictures = offersSlideShow.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === numberOfPictures - 1 ? 0 : currentSlide  + 1);
      };
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? numberOfPictures - 1 : currentSlide  - 1);
    };
    
    if (!Array.isArray(offersSlideShow) || numberOfPictures <= 0) {
        return null;
    }
    
    return (
        <div className="special-offers">
          <section className="image-slider">
            <button className="slider-arrows" aria-label="previous slide" onClick={prevSlide}>
              <FontAwesomeIcon icon={faAngleLeft} style={{color: "#ffffff",}}/>
            </button>
            {offersSlideShow.map((offer, index) => {
                return <div
                className={index === currentSlide ? 'slide active' : 'slide'}
                key={index}
              >
                {index === currentSlide && (
                  <Link to={`/vinyls/${offer.title}`} >
                    <img 
                    src={offer.coverSmall} 
                    srcSet={`${offer.coverSmall} 320w, ${offer.coverMediumHome} 480w`}
                    sizes={`(max-width: 640px) 320px, (min-width: 640px) 480px`}
                    alt={offer.title} 
                    className='image' 
                    />
                  </Link>
                )}
              </div>
            })}
            <button className="slider-arrows" aria-label="next slide" onClick={nextSlide}>
              <FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff",}}/>
            </button>
          </section>
          <div className="offer-info">
            <h1>{currentSlide === 0 ? "XTC - Life Begins At The Hop"
            : currentSlide === 1 ? "Klark Kent - Don't Care" 
            : "Jah Wurzel - Wuthering Heights"}
            </h1>
            <p>{currentSlide === 0 ? "Vinyl edition of cult classic new wave track you won't be able to find anywhere else"
            : currentSlide === 1 ? "Steward's Copeland most known hit, charting in UK Top 50 in 1978" 
            : "Exclusive cover of Kate Bush's hit, rare find to come by"}
            </p>
            <h4>Limited Stock</h4>
          </div>
        </div>
    )
}

export default SpecialOffers;