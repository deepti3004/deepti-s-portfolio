import rwc from '../Projects/rwc.png'
import dd from '../Projects/dd.png'
import ds from '../Projects/ds.png'
import pg from '../Projects/pg.png'
import sc from '../Projects/sc.png'
import sps from '../Projects/sps.png'
import ttt from '../Projects/ttt.png'
import w from '../Projects/wa.png'
import ThreeDTextEffect from '../3-D Text/ThreeDTextEffect';
import Animatedbg from '../Animated Background/Animatedbg';
import { useState } from 'react';
export default function Project() {
    const [items, setItems] = useState(data);
    const filterItem = (cate) => {
      const updatedItems = data.filter((currentItem) => {
        return currentItem.category === cate;
      });
      setItems(updatedItems);
    };
    return (
      <>
        <Animatedbg/>
        <div className="container my-12 mx-auto md:px-3 content-center">
          <section className="mb-12 text-center">
            <div className="mb-16 pb-2 mt-12 " data-aos="fade-right">
              <ThreeDTextEffect title="Project" />
            </div>
              <div  style={{backgroundColor: 'var(--bg-color)'}} className='shadow-lg hover:shadow-full hover:shadow-blue-700 mb-20 h-14 bg-slate-900 py-2 border border-white sm:w-1/2 w-full m-auto rounded-xl' data-aos="fade-left"> 
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => setItems(data)} >All
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('HTML/CSS')}>HTML/CSS
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('JS')}>JS
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('React')}>React
              </button>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-8 ml-24 " data-aos="fade-left">
              {items.map((d,index) => (
                <div key={index} className="mb-6 lg:mb-0 w-3/4 ">
                  <div style={{backgroundColor: 'var(--bg-clri)',color:'var(--font)'}} className="  hover:shadow-full hover:shadow-blue-700 mb-16 relative block rounded-lg text-gray-300 bg-slate-900 bg-opacity-20text-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex justify-center">
                      <div className="relative mx-2 -mt-2  h-[150px] overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" data-te-ripple-init data-te-ripple-color="light">
                        <img src={d.img} className="w-full" />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="mb-4 text-md font-bold">{d.title}</h5>
                      <p className="mb-8 text-sm">
                        {d.disc}
                      </p>
                      <a href={d.git} style={{color: 'var(--font)'}} target='_blank' data-te-ripple-init data-te-ripple-color="light" className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        GITHUB
                      </a>&nbsp;&nbsp;&nbsp;
                      <a href={d.live} style={{color: 'var(--font)'}} target='_blank' data-te-ripple-init data-te-ripple-color="light" className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
  const data = [
    {
      title: "RazorPay-WebClone",
      disc:"A Web Clone of Razorpay Replicating its Payment Gateway Features and UI/UX.",
      img:rwc,
      git:"",
      category:"HTML/CSS",
      live:""
    },
    {
      title:"Dev Detective",
      disc:"Lets you quickly find any GitHub User’s profile, including their Repos, Followers, and Activity. Just enter a username and get detailed insights instantly.",
      img:dd,
      git:"",
      category:"JS",
      live:""
    },
    {
      title: "Portfolio",
      disc: "Showcasing my expertise in Data Structure & Algorithms and Frontend Development through Innovative Projects and Impactful Solutions.",
      img: ds,
      git: "",
      category: "React",
      live:"" 
    },
    {
      title:"Shopping Cart",
      disc:"Replicates a Sleek and Functional Shopping Cart UI with interactive features. Ensures a Seamless User Experience with Smooth Animations.",
      img:sc,
      git:"",
      category:"React",
      live:" "
    },    
    {
      title: "Weather-App",
      disc:"A Simple and Accurate weather app providing Real-Time Forecasts and Updates for any Location.",
      img:w,
      git:"",
      category:"JS",
      live:""
    },
    {
      title:"Rock Paper Scissors",
      disc:"A classic hand game where players simultaneously choose rock, paper, or scissors. The winner is determined by simple rules: rock crushes scissors, scissors cut paper, and paper covers rock.",
      img:sps,
      git:"",
      category:"HTML/CSS",
      live:""
    },
    {
      title:"Tic Tac Toe",
      disc:"A classic two-player strategy game where players take turns marking X or O on a 3×3 grid. The goal is to form a horizontal, vertical, or diagonal line of three identical marks before the opponent.",
      img:ttt,
      git:"",
      category:"JS",
      live:"https://tictactoe-omega-five.vercel.app/"
    },
    {
      title:"Password Generator",
      disc:"Creates strong, random passwords to enhance security by combining letters, numbers, and symbols.",
      img:pg,
      git:"",
      category:"JS",
      live:""
    },
  ];
  