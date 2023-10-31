import { useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.trendingMovies.then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
      />
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-fit mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
