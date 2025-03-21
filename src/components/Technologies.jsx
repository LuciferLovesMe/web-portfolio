import {
  DiAndroid,
  DiDotnet,
  DiLaravel,
  DiMysql,
  DiNodejs,
  DiPostgresql,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiMysql className="text-7xl" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiLaravel className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiExpress className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiNodejs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <SiTypescript className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiDotnet className="text-7xl" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiAndroid className="text-7xl text-green-300" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <DiPostgresql className="text-7xl text-blue-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
