import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight  } from "react-icons/bi";
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: "MukJa", image: "/assets/project1.png", description: "MukJa is a recipe sharing platform" },
    { id: 2, title: "RPI5 Kubernetes Cluster", image: "/assets/project2.png", description: "RPI5 local network Kubernetes cluster" },
    { id: 3, title: "Text to Emoji Converter", image: "/assets/project3.png", description: "A simple web app that translates text to emoji" },
];

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(1);

    // Move to the previous card
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
  
    // Move to the next card
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center justify-center w-[100%] sm:w-[90%] md:w-[65%] text-[2rem] sm:text-[2rem]">
            
            {/* Title Animation */}
            <div className="flex justify-start w-[80%] md:w-[100%] inline-block">  
            {"PROJECT".split("").map((letter, index) => (
            <div
                key={index}
                className="overflow-hidden inline-block" // Ensures the letter is confined within its box
            >
            <motion.span
                className="flex justify-start text-6xl md:text-7xl"
                initial={{ translateY: "90%" }}
                whileInView={{ translateY: "0%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                {letter}
            </motion.span>
            </div>
            ))}
            </div>

            {/* A line between title and About Me section */}
            <motion.hr
                className="w-[80%] lg:w-full mb-[2rem] my-2 lg:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent dark:via-neutral-400"   
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            />

            {/* Left Arrow */}
            <button onClick={prevSlide} className="absolute left-2 mt-[5rem] md:mt-[10rem] md:left-[16rem] rounded-full z-10 bg-white hover:bg-black hover:text-white">
                <BiChevronLeft />
            </button>

            {/* Carousel Wrapper */}
            <div className="relative w-full overflow-hidden">
                <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex justify-center items-center">
                {projects.map((project, index) => {
                    // Calculate position of the cards
                    const offset = index - currentIndex;

                    return (
                    <motion.div
                        key={project.id}
                            className="absolute w-[85%] sm:w-[75%] md:w-[60%] h-auto bg-white rounded-lg shadow-lg p-6 flex flex-col text-center transition-all duration-500"
                            style={{
                            left: "50%",
                            transform: `translateX(-50%) translateX(${offset * 40}%) scale(${Math.abs(offset) === 0 ? 1 : 0.85})`,
                            opacity: Math.abs(offset) > 1 ? 0 : 1, // Hide extra slides
                            zIndex: projects.length - Math.abs(offset),
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg border-[0.5rem] mb-4"
                        />
                        <div className="flex justify-between items-center">
                            <h2 className="flex justify-start text-xl font-bold">{project.title}</h2>
                            <Link to={`/project/${project.title.toLowerCase().replace(/ /g, '-')}`}>
                                <p className="text-sm text-gray-600 hover:underline decoration-[0.1rem]">See Details</p>
                            </Link>
                        </div> 
                        <p className="overflow-hidden flex justify-start text-lg text-gray-600 text-nowrap">{project.description}</p>
                    </motion.div>
                    );
                })}
                </div>
            </div>

            {/* Right Arrow */}
            <button onClick={nextSlide} className="absolute right-2 mt-[5rem] md:mt-[10rem] md:right-[16rem] rounded-full z-10 bg-white hover:bg-black hover:text-white">
                <BiChevronRight />
            </button>
        </div>
    )
}