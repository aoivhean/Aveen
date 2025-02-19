import '../css/carousel.css'
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Carousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image3} alt="Image 3" />
            </div>
        </div>
    );
};

export default Carousel;