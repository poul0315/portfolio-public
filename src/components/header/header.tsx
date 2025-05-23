import React, { useState } from 'react';
import { motion } from "motion/react"

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = 0; // Adjust this to match your sticky header height
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle state
    };

    return (
        <>
            {/* About Me */}
            <motion.div 
                className="flex w-1/2 text-white justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection("welcome")}
            >
                {/* White circule around my initial - need to add hover effect later */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                    <p className="font-bold text-black">PN</p>
                </div>
            </motion.div>


            {/* Hamburger Menu for Mobile */}
            <div className="group flex justify-center w-1/2 2xl:hidden">
                {/* Hamburger Button */}
                <button
                    className="group h-20 w-20 text-white text-3xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    <div className="grid justify-items-center gap-1.5">
                        <span
                            className={`h-1 w-8 bg-white rounded-full transition-transform duration-300 ${
                                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                            }`}
                        ></span>
                        <span
                            className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                                isMenuOpen ? "scale-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`h-1 w-8 bg-white rounded-full transition-transform duration-300 ${
                                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                            }`}
                        ></span>
                    </div>
                </button>
            </div>


            {/* Projects, Experiences, Blogs */}
            <div className="hidden 2xl:flex w-1/2 h-[100%] text-white justify-center space-x-[4rem] font-bold">
                {/* Experience */}
                <motion.div 
                    className="group w-[15%] h-full flex items-center justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection("experience")}
                >
                    {/* White Box */}
                    <div
                        className="absolute w-[120%] h-[200%] bg-transparent group-hover:bg-white 
                        group-hover:rotate-12 group-hover:scale-110 
                        duration-100"
                    ></div>
                    {/* Text */}
                    <p className="z-10 group-hover:text-black">
                        EXPERIENCES
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="bg-dotted bg-white p-1 rotate-12 scale-110"></div>
                
                {/* Project */}
                <motion.div 
                    className="group w-[15%] h-full flex items-center justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection("project")}
                >
                    {/* White Box */}
                    <div
                        className="absolute w-[120%] h-[200%] bg-transparent group-hover:bg-white 
                        group-hover:rotate-12 group-hover:scale-110 
                        duration-100"
                    ></div>
                    {/* Text */}
                    <p className="z-10 group-hover:text-black">
                        PROJECTS
                    </p>
                </motion.div>   
                
                {/* Divider */}
                <div className="bg-dotted bg-white p-1 rotate-12 scale-110"></div>          
                
                {/* BLOGS */}
                <div className="group w-[15%] h-full flex items-center justify-center relative">
                    {/* White Box */}
                    <div
                        className="absolute w-[120%] h-[200%] bg-transparent group-hover:bg-white 
                        group-hover:rotate-12 group-hover:scale-110 
                        duration-100"
                    ></div>
                    {/* Text */}
                    <p className="z-10 group-hover:text-black">
                        BLOGS
                    </p>
                </div>          
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-full bg-black text-white flex flex-col items-center gap-y-4 py-4 z-50 2xl:hidden">
                    <motion.div 
                        className="flex justify-center w-full hover:text-gray-400 hover:bg-white hover:text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToSection("experience")}
                    >
                        EXPERIENCES
                    </motion.div>
                    <motion.div 
                        className="flex justify-center w-full hover:text-gray-400 hover:bg-white hover:text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToSection("project")}
                    >
                        PROJECTS
                    </motion.div>
                    <motion.div 
                        className="flex justify-center w-full hover:text-gray-400 hover:bg-white hover:text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToSection("blog")}
                    >
                        BLOGS
                    </motion.div>
                </div>
            )}      
        </>
    )
}