// import React from 'react'

// function Skillset() {
//   return (
//     <div>
//       <div className='flex'>
//         <p>Technical Skill</p>
//         {data.map(e)=>{
//             <div><img src=''>{img}</img></div>
//         }}
//       </div>
//     </div>
//   )
// }
// const data=[
//     {
//         img:""
//     },
//     {
//         img:""
//     },
//     {
//         img:""
//     }
//     ]
// export default Skillset
import React from 'react';

const data = [
  { img: "image1.png" },
  { img: "image2.png" },
  { img: "image3.png" }
];

function Skillset() {
  return (
    <div>
      <div className="flex">
        <p>Technical Skill</p>
        {data.map((e, index) => (
          <div key={index}>
            <img src={e.img} alt="Skill" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillset;

