import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function ImageSlider({ pictures }) {
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
        <>
        <section className="home-slider">
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
        </>
    )
}

export default ImageSlider;