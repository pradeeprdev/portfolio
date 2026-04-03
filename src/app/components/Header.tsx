"use client";

import React, { useState } from "react";
import { navItems } from "../Data/data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const sideMenuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
        
        {/* CENTER CONTAINER */}
        <div className="w-full max-w-[70rem] bg-black/90 backdrop-blur-md flex justify-between items-center py-3 px-5">
          
          {/* LOGO */}
          <div className="font-extrabold text-2xl cursor-pointer">
            <a href="#Home">Pradeep</a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#ffbd39] transition duration-200"
                >
                  <a href={`/#${item.name}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE BUTTON */}
          <div
            className="flex md:hidden items-center cursor-pointer"
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon />
            <span className="ml-1">Menu</span>
          </div>
        </div>
      </div>

      {/* SPACER (IMPORTANT so content doesn't go under navbar) */}
      <div className="" />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white/10 backdrop-blur-xl text-white shadow-lg flex flex-col p-5 z-50 rounded-l-3xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sideMenuVariants}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* CLOSE */}
              <div
                className="self-end cursor-pointer hover:text-[#ffbd39]"
                onClick={() => setMobileMenu(false)}
              >
                <CloseIcon />
              </div>

              {/* ITEMS */}
              <ul className="mt-10 flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.name}`}
                      className="hover:text-[#ffbd39] transition"
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;