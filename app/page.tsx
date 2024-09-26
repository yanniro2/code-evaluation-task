"use client";
import { useState } from "react";
import Card from "../components/Card";
import data from "@/data/data.json";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4; // Number of cards to show at a time

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
      <div className="box z-50 absolute w-screen h-screen"></div>
      <div className="container mx-auto flex items-center justify-center h-full flex-col">
        <div className="flex items-center justify-center flex-col gap-[3px]">
          <div className="bg-[rgba(219,161,77,0.1)] border border-secound rounded-full font-semibold font-poppins text-[#F8F3F0CC] px-8 py-2 text-center inline-block">
            ONZE STOPPERS
          </div>

          <h1 className="font-recoleta text-[#F8F3F0] text-[2.5rem] font-semibold">
            Ervaringen van Ex-Rokers
          </h1>
        </div>
        <div className="flex flex-row items-center gap-[1rem] w-full justify-center overflow-hidden pt-5">
          {data
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((profile, index) => (
              <Card key={index} {...profile} />
            ))}
        </div>
        <div className="flex gap-[3rem] mt-[2rem] text-[1.5rem] z-[60]">
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
