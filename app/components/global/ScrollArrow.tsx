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
        <span className="text-[1.6rem]">⬆</span>
      </a>
    </div>
  );
};
