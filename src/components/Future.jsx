import React from 'react';

export default function Future() {
  return (
   <div className='items-center  border-2 rounded-3xl border-[#fff] justify-center flex'>
   <div className='relative   border-2 rounded-3xl border-[#fff] w-[1200px]'>
      <div className='z-10 bg-[#000]  items-center justify-center flex fixed  inset-0'>
        <video preload='true' className='w-[1100px]' src='https://stream.mux.com/5Z96bm4UuI008ewcRCmxP9h3O701HZ77xB/high.mp4#t=0.01' autoPlay disableremoteplayback loop muted></video>
      </div>
      <img src='truc.jpg' className=' absolute top-[600px] left-0 z-20'/>
     <img src='drone.png' className='absolute top-[1000px]  z-10'/>
     <img src='woman.jpg' className='absolute top-[3000px] left-0 z-30'/>
       {/*  <img src='walk.jpg' className='absolute top-[2000px] left-0 z-30'/> */}
    </div></div>
  );
}
