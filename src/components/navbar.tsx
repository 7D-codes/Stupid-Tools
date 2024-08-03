"use client";
import { motion } from "framer-motion";
import { PlusIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";

const FloatingNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="fixed top-4 transform -translate-x-1/2 z-50 w-3/4 sm:w-1/2"
    >
      <motion.div className="bg-white bg-opacity-70 backdrop-blur-md rounded-full shadow-sm flex items-center justify-between p-2 px-4 border border-gray-200 relative overflow-hidden">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-4 z-10"
        >
          <a href="/">
            <span className="font-semibold text-black text-lg">
              Stupid Tools
            </span>
          </a>
        </motion.div>
        <div className="flex items-center space-x-4 z-10">
          <motion.a
            whileHover={{ scale: 1.3, rotate: -15 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://x.com/7D_codes"
            className="text-gray-600 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={20} />
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="mailto:miuatoro.exe?subject=Stupid%20Tool%20Idea&body=so%20I%20have%20this%20idea...">
              <Button
                className="bg-primary text-white rounded-full hover:bg-secondary hover:text-primary"
                title="Submit Your Idea"
                // onClick={}
              >
                <span className="hidden sm:inline px-2">Submit Your Idea</span>
                <PlusIcon size={20} className="sm:hidden" />
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNavbar;
