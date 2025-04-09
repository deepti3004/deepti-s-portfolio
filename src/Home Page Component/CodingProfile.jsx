import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";

function Allprofile() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className='space-y-4 '>
          <div className='pt-36 mb-28' data-aos="fade-right">
            <ThreeDTextEffect title="Coding Profiles"/>
          </div>
        </div>
        <div className='mt-10 pb-9 max-w-screen-lg mx-auto ' data-aos="fade-in"  >
          <Slider {...settings}>
            {data.map((d, index) => (
                <div key={index} style={{border:'1px solid var(--main-heading)'}} className="w-full shadow-lg hover:shadow-full hover:shadow-blue-700 max-w-xs  p-6 bg-opacity-20 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <img className="w-7 h-7 rounded-md" src={d.img} alt={d.heading} />
                  <h5 style={{color: 'var(--font)'}} className="pt-4 mb-2 text-xl font-semibold tracking-tight text-white dark:text-white">{d.heading}</h5>
                  <a href={d.link} className="inline-flex font-medium items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                  </a>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    heading: "LeetCode",
    img: "data:image/png;base64,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",
    link: "https://leetcode.com/u/ds3708659/"
  },
  {
    heading: "GeekForGeeks",
    img: "data:image/png;base64,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",
    link: "https://www.geeksforgeeks.org/user/ds370jje2/"
  },
  {
    heading: "CodeChef",
    img: "data:image/png;base64,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",
    link: "https://www.codechef.com/users/ds3708659"
  },
];

export default Allprofile;


