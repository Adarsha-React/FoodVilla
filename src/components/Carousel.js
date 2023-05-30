import { CAROUSEL_DETAIL_CDN, CAROUSEL_IMG_CDN } from "../constants";

const Carousel = ({ carousel }) => {
  console.log(carousel);

  const endString =
    "&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING";
  const CDN_LINK = CAROUSEL_DETAIL_CDN + carousel[0]?.data?.link + endString;

  return (
    <div className="w-full h-52 bg-slate-900 flex justify-center">
      {carousel.map((carouselElement) => (
        <div>
          <img
            src={CAROUSEL_IMG_CDN + carouselElement?.data?.creativeId}
            alt="CarouselImg"
            className="w-44 h-44 m-3 mt-4 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
