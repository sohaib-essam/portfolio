import { motion } from "framer-motion";
import { FaNodeJs, FaPhp, FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <FaNodeJs className="text-7xl text-[#5FA04E]" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <FaSass className="text-7xl text-[#c69]" />
        </motion.div>
        <motion.div
          variants={iconVariant(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <GrMysql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariant(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <FaPhp className="text-7xl text-[#777BB3]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
