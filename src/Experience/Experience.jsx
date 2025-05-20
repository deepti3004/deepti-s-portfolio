import ThreeDTextEffect from '../3-D Text/ThreeDTextEffect'
import gdsc from '../Experience/gdsc.png'
import intern1 from '../Experience/CureXpress.png';
import Animatedbg from '../Animated Background/Animatedbg';
export default function Experience(){
    return(
        <>
        <div id="experience" className=" m-8 ">
            <Animatedbg/>
            <div className= "text-center text-teal-50 text-2xl font-bold mt-20" data-aos="fade-right">
                <ThreeDTextEffect title="My Experience"/>
            </div>
            <div className="p-20" data-aos="fade-left">
                <ol class="relative border-s border-gray-200 dark:border-gray-700 ">                  
                    {data.map((d,index)=>(
                        <li className="mb-10 ms-6 shadow-lg hover:shadow-md hover:shadow-blue-700" key={index}>
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img className="rounded-full shadow-lg" src={d.img} alt="Thomas Lean image"/>
                        </span>
                        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div className="items-center justify-between mb-3 sm:flex">
                                <time className="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">{d.year}</time>
                                <div className="text-sm font-normal text-gray-600 lex dark:text-gray-300">{d.company}</div>
                            </div>
                            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            {d.position}
                            </div>
                        </div>
                    </li>
                    ))}
                </ol>
            </div>
        </div>
        </>
    )
}
const data=[
    {
        year:"April-October, 2025",
        company:"CureXpress24 Healthcare Solution Pvt. Ltd.",
        position:"Software Development Intern(Remote)",
        img:intern1
    },
    {
        year:"Nov 2023",
        company:"Google Developer Student Clubs",
        position:"Google Cloud Computing Foundation and Generative AI Workshop",
        img:gdsc
    },
]