  import React from 'react';
  import {motion} from 'framer-motion'
  import Vision from './Vision';
  export default function Future() {
    return (
      
      <motion.div   className=' w-[1000px] top-20 mx-auto'> 
          <div className="rounded-[90px]  w-[1000px] absolute  top-20     items-center justify-center flex">
        <div>
            <motion.div whileInView={{ scale: 1.1 }} transition={{ duration: 2 }} initial={{ scale:2 }} className='w-[900px]   sticky top-20 pt-10'>
            <div className="relative">
          <video
            preload='true'
            className='rounded-[90px] w-full'
            src='https://stream.mux.com/5Z96bm4UuI008ewcRCmxP9h3O701HZ77xB/high.mp4#t=0.01'
            autoPlay
            disableRemotePlayback
            loop
            muted
          ></video>
                {/* Text overlay */}
                <div className='absolute items-center flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            
          <p className=" poppins-regular  text-white text-[70px]  text-center">
            The future is for riders
                  </p>
                  <div>
                  <motion.div whileHover={{scale:1.1}} initial={{scale:0.9}} className=' rounded-xl p-[10px] border-2 border-[#2ae9ae] border-gradient-to-r from-violet-500 to-fuchsia-500' onClick={() => { document.getElementById('second').scrollIntoView({ behavior: 'smooth' }); }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="w-6 h-6 ">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </motion.div>

                  </div>
                </div>
              </div>
            </motion.div>
           
            <motion.div whileInView={{scale:1.1}} transition={{duration:1}} initial={{scale:0.9}} className='w-[900px]  sticky top-20 h-full pt-10' id='second'> <img src='truc.jpg' className='w-[900px] h-full   rounded-[90px] sticky top-20' alt='Background Image' /></motion.div> 
            <motion.div whileInView={{scale:1.1}} transition={{duration:1}} initial={{scale:0.9}} className='w-[900px]  sticky top-20 pt-10'><img src='drone.png' className='sticky top-20 rounded-[90px]   left-0 w-[900px] h-full' alt='Drone' /></motion.div> 
            <motion.div whileInView={{scale:1.1}} transition={{duration:1}} initial={{scale:0.9}} className='w-[900px]  sticky top-20 pt-10'><img src='woman.jpg' className='sticky top-20 rounded-[90px] h-full  w-[900px] left-0 z-30' alt='Woman' /></motion.div> 
            <motion.div whileInView={{scale:1.1}} exit={{scale:0.5}} transition={{duration:1}} initial={{scale:0.9}} className='w-[900px]  sticky top-20 pt-10'> <img src='walk.jpg' className='sticky top-20 rounded-[90px] h-full    w-[900px] left-0 z-30' alt='Walk' /></motion.div> 
          
          </div>
        </div>
    </motion.div>
    );
  }

