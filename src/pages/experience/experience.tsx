import React from "react";
import { motion } from "framer-motion"

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center w-[80%] sm:w-[90%] md:w-[65%] text-[2rem] sm:text-[2rem]">

            {/* Title Animation */}
            <div className="flex justify-start w-full inline-block">  
            {"EXPERIENCE".split("").map((letter, index) => (
            <div
                key={index}
                className="overflow-hidden inline-block" // Ensures the letter is confined within its box
            >
                <motion.span
                    className="block text-5xl md:text-7xl"
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
            
            {/* a line between title and About Me section */}
            <motion.hr 
                className="w-full mb-[4rem] my-2 lg:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent dark:via-neutral-400" 
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            />
            
            {/* experience container */}
            <div className="flex flex-col gap-y-[8rem]">
                {/* 1st experience */}
                <motion.div 
                    className="flex flex-col w-full gap-y-[2rem]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 className="font-semibold text-5xl">Terrestrious</h1>
                    <div className="flex flex-col justify-between xl:flex-row gap-x-[5rem] gap-y-[3rem] text-[1.1rem] text-nowrap">
                        <div className="flex flex-col text-[1.1rem] xl:w-auto h-auto">
                            <p>Gamifying Carbon Neutral</p>
                            <p>04/2024 - Present</p>
                        </div>
                        <div className="flex flex-row gap-x-[2rem] xl:w-auto">
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2">
                                <p>Position</p>
                                <p>Industry</p>
                                <p>Location</p>
                                <p>About</p>
                            </div>
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2 items-start xl:items-end">
                                <p>Software Engineer</p>
                                <p>Web/Game Dev</p>
                                <p>Tacoma</p>
                                <a href="https://www.terrestrious.com" target="_blank" rel="noopener noreferrer">www.terrestrious.com</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[1.5rem] xl:w-auto text-wrap">
                            <p>
                                As a lead developer, I built both web and mobile applications for
                                a gamified social platform, utilizing React, React Native, Node.js, and MySQL. 
                                I integrated authentication flows within the Expo framework and set up a scalable 
                                infrastructure using Kubernetes and Docker, deploying the server for optimized performance.
                            </p>
                            <p>
                                I also set up a CI/CD pipeline with GitHub Actions for automated testing and deployment. 
                                Additionally, I collaborated on prototyping 20+ frontend pages in Figma, integrating custom 
                                components to enhance user experience.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 2nd experience */}
                <motion.div 
                    className="flex flex-col w-full gap-y-[2rem]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >                    
                    <h1 className="font-semibold text-5xl">Layrd</h1>
                    <div className="flex flex-col justify-between xl:flex-row gap-x-[5rem] gap-y-[3rem] text-[1.1rem] text-nowrap">
                        <div className="flex flex-col text-[1.1rem] xl:w-auto h-auto">
                            <p>A Research Social Platform</p>
                            <p>04/2023 - 03/2024</p>
                        </div>
                        <div className="flex flex-row gap-x-[2rem] xl:w-auto">
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2">
                                <p>Position</p>
                                <p>Industry</p>
                                <p>Location</p>
                                <p>About</p>
                            </div>
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2 items-start xl:items-end">
                                <p>Software Developer</p>
                                <p>Blockchain/Web</p>
                                <p>Seattle</p>
                                <a href="https://www.layrd.xyz" target="_blank" rel="noopener noreferrer">www.layrd.xyz</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[1.5rem] xl:w-auto text-wrap">
                            <p>
                                As a full-stack developer, I built a social web application to connect users with research partners, 
                                using React, Flask, and MySQL. I deployed the platform on Vercel and AWS EC2 for public access.
                            </p>
                            <p>
                                I collaborated with a UX/UI design master’s student to integrate mobile-friendly components, 
                                improving usability and achieving an 80% user satisfaction rate. I also implemented Azure Blob 
                                Storage for scalable resume and profile picture storage and supported an automated email service using the Mailchimp API.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 3rd experience */}
                <motion.div 
                    className="flex flex-col w-full gap-y-[2rem]"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 className="flex font-semibold text-5xl">Paccar</h1>
                    <div className="flex flex-col justify-between xl:flex-row gap-x-[5rem] gap-y-[3rem] text-[1.1rem] text-nowrap">
                        <div className="flex flex-col text-[1.1rem] xl:w-auto h-auto">
                            <p>Heavy Duty Transportation</p>
                            <p>11/2022 - Present</p>
                        </div>
                        <div className="flex flex-row gap-x-[2rem] xl:w-auto">
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2">
                                <p>Position</p>
                                <p>Industry</p>
                                <p>Location</p>
                                <p>About</p>
                            </div>
                            <div className="flex flex-col gap-y-[1.2rem] w-1/2 items-start xl:items-end">
                                <p>Electrical Engineer</p>
                                <p>Automotive</p>
                                <p>Kirkland</p>
                                <a href="https://www.paccar.com" target="_blank" rel="noopener noreferrer">www.paccar.com</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[1.5rem] xl:w-auto text-wrap">
                            <p>
                                As an electrical systems engineer, I defined requirements and designed system architectures for 
                                new vehicle products, collaborating with hardware and test engineers to ensure reliability. 
                                I conducted failure mode analyses to improve detection and performance.
                            </p>
                            <p>
                                I optimized product designs by remodeling engineering documents and redesigning the safety system, 
                                increasing implementation efficiency by 80% while coordinating closely with manufacturers. Additionally, 
                                I saved close to $30 million by preparing documentation for re-implementing recalled components and effectively 
                                communicating with suppliers to ensure timelines were met while conducting all quality validations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}