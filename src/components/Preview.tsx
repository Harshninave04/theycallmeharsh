'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';

import Floating from './fancy/parallax-floating';
import { FloatingElement } from './fancy/parallax-floating';


const Preview = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('img', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  return (
    <div
      className="hidden md:block flex w-full h-full justify-center items-center bg-black overflow-hidden"
      ref={scope}>
      <motion.div
        className="text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}>
        {/* <p className="text-5xl md:text-7xl z-50 text-white font-calendas italic">.</p>
        <p className="text-xs z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 w-20 cursor-pointer">
          
        </p> */}
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://plus.unsplash.com/premium_photo-1674498702907-a73a546797e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww'
            }
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[42%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://plus.unsplash.com/premium_photo-1673758910965-511a8d669eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[20%] left-[63%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://plus.unsplash.com/premium_photo-1679440415217-3149da2aa3cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-28 h-28 md:w-36 md:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://images.unsplash.com/photo-1531353217282-64e6ab85d240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={
              'https://images.unsplash.com/photo-1620005835848-6567e7542867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZlbWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
            }
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Preview;
