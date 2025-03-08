import '../css/carousel.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Carousel = () => {
    const images = [image1, image2, image3, image1, image2, image3];

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Carousel image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;