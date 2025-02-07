/* eslint-disable react/prop-types */
// src/components/Section.js
import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{ margin: "50px 0", padding: "20px" }} // Đảm bảo có khoảng cách giữa các section
    >
      {children}
    </motion.div>
  );
};

export default Section;
