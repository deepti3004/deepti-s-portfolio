import React, { useState } from "react";
import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";
import ron from '../Gallery/ronin.png';
import sen from '../Gallery/sensei.png';
import thir from '../Gallery/365 days.png';
import c from '../Gallery/50day 2025.png';
import twoh from '../Gallery/200day.png';
import hundred from '../Gallery/100day.png';
import fifty from '../Gallery/50day.png'
import './gallery.css'
import { CSSTransition } from 'react-transition-group';
import Animatedbg from "../Animated Background/Animatedbg";
export default function Gallery() {
  const data = [
    { img: ron, text: "Ronin in Basics of Java" },
    { img: sen, text: "Sensei in Basics of Java" },
    { img: thir, text: "Ronin in Basics of Java" },
    { img: c, text: "50 day in 2025 LeetCode" },
    { img: twoh, text: "Two hundred" },
    { img: hundred, text: "hundred" },
    {img:fifty,text:"fifty"},
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <>
    <Animatedbg/>
    <div className="mt-14">
      <div className="pb-12" data-aos="fade-right">
        <ThreeDTextEffect title="Achievements"/>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 p-10 bottom-3" data-aos="fade-left">
        {data.map((item, index) => (
          <div key={index} className="relative" onClick={() => openModal(index)}>
            <img
              className="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer border border-red-50 shadow-2xl hover:shadow-md hover:ease-in duration-300 hover:shadow-blue-700"
              src={item.img}
              alt={item.text}
            />
          </div>
        ))}
      </div>
      <CSSTransition in={showModal} classNames="modal" timeout={300} unmountOnExit>
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-[600px] max-h-[500px]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0 right-0 m-4 h-10 w-10 bg-opacity-55 text-white text-xl p-1 bg-slate-600 rounded-full" onClick={closeModal}>
              &times;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 left-0 m-4 text-white text-2xl" onClick={prevImage}>
              &#10094;
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-0 m-4 text-white text-2xl" onClick={nextImage}>
              &#10095;
            </button>
            <img
              className="max-h-full max-w-full rounded-lg"
              src={data[currentIndex].img}
              alt={data[currentIndex].text}
            />
          </div>
        </div>
      </CSSTransition>
    </div>
    </>
  );
}

