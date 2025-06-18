"use client";

export const ScrollArrow = () => {
  function handleScroll() {
    const scrollButton = document.getElementById("scrollButton");
    if (window.scrollY > window.innerHeight) {
      scrollButton?.classList.remove("scroll__button__hidden");
    } else {
      scrollButton?.classList.add("scroll__button__hidden");
    }
  }

  // Add event listener for scroll
  typeof window !== "undefined" &&
    window.addEventListener("scroll", handleScroll);

  return (
    <div
      id="scrollButton"
      className="scroll__button__hidden w-[4.5rem] aspect-square rounded-full bg-theme_peach-900 shadow-lg fixed top-[40%] left-[2rem] z-50 mix-blend-difference"
    >
      <a href="#top" className="w-full h-full flex justify-center items-center">
        <span className="text-[1.6rem] text-theme_black-900">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99973 14.7912V3.62123L13.8797 8.50123C14.2697 8.89123 14.9097 8.89123 15.2997 8.50123C15.6897 8.11123 15.6897 7.48123 15.2997 7.09123L8.70973 0.501226C8.52289 0.313973 8.26924 0.20874 8.00473 0.20874C7.74021 0.20874 7.48656 0.313973 7.29973 0.501226L0.699727 7.08123C0.309727 7.47123 0.309727 8.10123 0.699727 8.49123C1.08973 8.88123 1.71973 8.88123 2.10973 8.49123L6.99973 3.62123V14.7912C6.99973 15.3412 7.44973 15.7912 7.99973 15.7912C8.54973 15.7912 8.99973 15.3412 8.99973 14.7912Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};
