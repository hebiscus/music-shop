import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function SpecialOffers({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const numberOfPictures = pictures.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === numberOfPictures - 1 ? 0 : currentSlide  + 1);
      };
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide  === 0 ? numberOfPictures - 1 : currentSlide  - 1);
    };
    
    if (!Array.isArray(pictures) || numberOfPictures <= 0) {
        return null;
    }
    
    return (
        <div className="special-offers">
          <section className="image-slider">
              <div>
                  <FontAwesomeIcon icon={faAngleLeft} style={{color: "#ffffff",}} onClick={prevSlide} />
                  {pictures.map((currentImage, index) => {
                      return <div
                      className={index === currentSlide ? 'slide active' : 'slide'}
                      key={index}
                    >
                      {index === currentSlide && (
                        <img src={currentImage} alt='travel' className='image' />
                      )}
                    </div>
                  })}
                  <FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff",}} onClick={nextSlide} />
              </div>
              <div className="slider-dots">

              </div>
          </section>
          <div className="offer-info">
            <h1>{currentSlide === 0 ? "XTC - Life Begins At The Hop"
            : currentSlide === 1 ? "Klark Kent - Don't Care" 
            : "Jah Wurzel - Wuthering Heights"}
            </h1>
            <p>{currentSlide === 0 ? "vinyl edition of cult classic new wave track you won't be able to find anywhere else"
            : currentSlide === 1 ? "lost gem" 
            : "unbelievable..."}
            </p>
            <h4>Limited Stock</h4>
          </div>
        </div>
    )
}

export default SpecialOffers;