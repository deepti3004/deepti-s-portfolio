import ThreeDTextEffect from '../3-D Text/ThreeDTextEffect';
import me from '../Home Page Component/Header Section/me1.png';
export default function AboutMe() {
  return (
    <>
      <div className="mt-16 mb-32" data-aos="fade-right">
      <ThreeDTextEffect title="About Me"/>
      </div>
      <div  style={{border:'1px solid var(--main-heading)'}} id='aboutme' className="shadow-lg hover:shadow-full hover:shadow-blue-700 flex flex-wrap min-h-[400px] bg-slate-500 m-10 rounded-lg bg-opacity-20 border border-gray-400 p-10" data-aos="fade-in">
        <div className="w-full  text-gray-200 font-medium text-2xl leading-snug">
            <div className="rounded-fullw-[100px] h-[100px] content-center">
                <img src={me} alt="me" height="150px" width="100px" className='rounded-full'></img>
            </div>
            <div className='space-y-200'>
            <h2 style={{ color: 'var(--main-heading)' }}  className="text-xl font-medium tracking-tighter sm:text-xl lg:text-2xl/none">Deepti Singh</h2>
            <p style={{color:'var(--para-clr)'}} className="text-gray-400 mt-2 text-lg">Front-End Developer</p>
            </div>
        </div>
        <div>
            <p style={{color: 'var( --text-color)'}} className='font-thin text-md '>
            I'm Deepti, a Passionate Student Pursuing a Bachelor of Technology (B.Tech) Degree in Information Technology from Dr. AITD Kanpur.<br></br>
            I have a Deep Interest in Exploring the Fascinating World Of Technology and Its Applications.<br></br>
            I am Always Eager to Improve my Expertise in Coding, Algorithms, and Software Development.
            </p>
        </div>      
      </div>
    </>
  )
}
