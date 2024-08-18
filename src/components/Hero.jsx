import heroimg from "../assets/SEProfile.svg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="pb-16 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mb-10 items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pb-7 w-full text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sohaib Essam
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="w-full bg-gradient-to-r from-[#087752] via-slate-500 to-[#21D498] bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Dev
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={heroimg}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
