const calendarOne = new URL("../assets/images/calendar-1.jpg", import.meta.url);
const calendarTwo = new URL("../assets/images/calendar-2.jpg", import.meta.url);
const calendarThree = new URL(
  "../assets/images/calendar-3.jpg",
  import.meta.url
);
const businessCardsOne = new URL(
  "../assets/images/business-cards-1.jpg",
  import.meta.url
);
const businessCardsTwo = new URL(
  "../assets/images/business-cards-2.jpg",
  import.meta.url
);
const businessCardsThree = new URL(
  "../assets/images/business-cards-3.jpg",
  import.meta.url
);
const brochureOne = new URL(
  "../assets/images/broschure-1.jpg",
  import.meta.url
);
const flyerOne = new URL("../assets/images/flyer-1.jpg", import.meta.url);
const flyerTwo = new URL("../assets/images/flyer-2.jpg", import.meta.url);

const images = [
  calendarOne,
  calendarTwo,
  calendarThree,
  businessCardsOne,
  businessCardsTwo,
  businessCardsThree,
  brochureOne,
  flyerOne,
  flyerTwo,
];

const handleNext = () => {};

const CarouselComponent = () => {
  return (
    <div className="carousel mt-12 relative">
      <div>
        <img className="w-full h-[400px] object-cover" src={images[3]} />
        <div className="absolute top-1/2 left-8 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-8 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
