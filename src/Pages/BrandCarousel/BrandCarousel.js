import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../assets/covers/c1.jpg'
import c2 from '../../assets/covers/c2.jpg'
import c3 from '../../assets/covers/c3.jpg'
import './BrandCarousel.css'
function BrandCarousel() {
  return (
    <Carousel className='container paddign-css'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Learning is Our Passion</h3>
          <p>“Tell me and I forget, teach me and I may remember, involve me and I learn.” ...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Learning is makes us more knowledgeable</h3>
          <p>In learning you will teach, and in teaching you will learn.” ...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Learning learn us how to be humble</h3>
          <p>
          “Learning never exhausts the mind.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel;