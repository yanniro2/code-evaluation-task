"use client";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import data from "@/data/data.json";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default is 4 for desktop

  // Function to update cardsToShow based on screen size
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setCardsToShow(4); // Desktop
    } else if (screenWidth >= 768) {
      setCardsToShow(3); // Tablet
    } else {
      setCardsToShow(1); // Mobile
    }
  };

  // useEffect to run when the component mounts and when the window is resized
  useEffect(() => {
    updateCardsToShow(); // Set the correct number of cards initially
    window.addEventListener("resize", updateCardsToShow); // Update cardsToShow on resize

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + cardsToShow < data.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <main className="w-full h-screen bg-primary relative">
      <div className="box z-50 absolute w-screen h-screen hidden sm:block"></div>
      <div className="container mx-auto flex items-center justify-center h-full flex-col gap-[1rem] p-3">
        <div className="flex items-center justify-center flex-col sm:gap-[3px] gap-[1rem]">
          <div className="bg-[rgba(219,161,77,0.1)] border border-secound rounded-full font-semibold font-poppins text-[#F8F3F0CC] px-8 py-2 text-center inline-block">
            ONZE STOPPERS
          </div>

          <h1 className="font-recoleta text-[#F8F3F0] text-[2.5rem] font-semibold hidden sm:block text-center">
            Ervaringen van Ex-Rokers
          </h1>
          <h1 className="font-recoleta text-[#F8F3F0] text-[1.6rem] font-semibold sm:hidden text-center leading-tight">
            Zij hebben de HoliStop methode gebruikt om te stoppen
          </h1>
        </div>
        <div className="flex flex-row items-center gap-[1rem] w-full justify-center overflow-hidden sm:pt-5">
          {data
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((profile, index) => (
              <Card key={index} {...profile} />
            ))}
        </div>
        <div className="flex gap-[3rem] sm:mt-[2rem] text-[1.5rem] z-[60]">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full p-3 border border-white text-white disabled:text-secound disabled:border-secound bg-[#FFFFFF1A]">
            <GrFormPreviousLink />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsToShow >= data.length}
            className="rounded-full p-3 border border-white text-white disabled:text-secound disabled:border-secound bg-[#FFFFFF1A]">
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </main>
  );
}
