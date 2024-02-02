import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaQuoteRight } from "react-icons/fa";
import { list } from "./data";

import Slider from "react-slick";

function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          return (
            <article key={person.id}>
              <img className="person-img" src={person.image} />
              <h5 className="name">{person.name} </h5>
              <p className="title">{person.title} </p>
              <p className="text">{person.quote} </p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}

export default SlickCarousel;
