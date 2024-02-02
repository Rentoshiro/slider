import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { shortList, list, longList } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  function prevSlide() {
    setCurrentPerson((prevState) => {
      return (prevState - 1 + people.length) % people.length;
    });
  }

  function nextSlide() {
    setCurrentPerson((prevState) => {
      return (prevState + 1) % people.length;
    });
  }

  useEffect(() => {
    let sliderID = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderID);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        return (
          <article
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            className="slide "
            key={person.id}
          >
            <img className="person-img" src={person.image} />
            <h5 className="name">{person.name} </h5>
            <p className="title">{person.title} </p>
            <p className="text">{person.quote} </p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
