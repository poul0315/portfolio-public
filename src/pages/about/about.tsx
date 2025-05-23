import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animateParagraph, setAnimateParagraph] = useState(false);
    const [animateLine, setAnimateLine] = useState(false);

    useEffect(() => {
        // Trigger animations in sequence with delays
        const titleTimer = setTimeout(() => setAnimateTitle(true), 500);
        const paragraphTimer = setTimeout(() => setAnimateParagraph(true), 1400); // After title animation
        const lineTimer = setTimeout(() => setAnimateLine(true), 1300); // After paragraph animation
    
        return () => {
          clearTimeout(titleTimer);
          clearTimeout(paragraphTimer);
          clearTimeout(lineTimer);
        };
      }, []);

    return (
        <div id="about" className="flex flex-col items-center justify-center space-y-[4rem] w-[80%] sm:w-[90%] md:w-[65%] text-[2rem] sm:text-[2rem]">
            
            {/* Title Animation */}
            <div className="flex justify-start w-full inline-block">  
                {"ABOUT".split("").map((letter, index) => (
                <div
                    key={index}
                    className="overflow-hidden inline-block" // Ensures the letter is confined within its box
                >
                    <motion.span
                        className="block text-6xl md:text-7xl"
                        initial={{ translateY: "90%" }}
                        animate={animateTitle ? { translateY: "0%" } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}   // Triggers when 20% of the letter is visible
                    >
                        {letter}
                    </motion.span>
                </div>
                ))}
            </div>

            <motion.p 
                className="w-full text-[1.5rem]"
                initial={{ y: 100, opacity: 0 }}
                animate={animateParagraph ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                A business-oriented engineer with over 2 years of experience in startups and the automotive industry, specializing in product development and system optimization           
            </motion.p>     
            
            {/* a line between title and About Me section */}
            <motion.hr 
                className="w-full my-2 lg:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent dark:via-neutral-400" 
                initial={{ y: 100, opacity: 0 }}
                animate={animateLine ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            />
            
            <motion.div 
                className="flex flex-col xl:flex-row justify-center gap-y-[4rem] xl:gap-y-[0rem] xl:gap-x-[6rem]"
                initial={{ y: 100, opacity: 0 }}
                animate={animateLine ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col w-[100%] xl:w-[60%] justify-between">
                    <p className="flex font-bold text-gray-900 text-[1.7rem]">
                        Over the years, I have worked on prototype products with a strong focus on developing 
                        key features and building pipelines to accelerate the development process
                    </p>  
                    <div className="hidden xl:block flex flex-col text-gray-900 gap-y-[0.5rem]">
                        <motion.p 
                            className="text-[1.5rem] font-semibold space-x-[2rem]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ amount: 0.9 }}
                        >
                            Let's Connect!
                        </motion.p>
                        <motion.div 
                            className="flex flex-row font-sm font-bold text-[1.2rem] gap-x-[2rem]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ amount: 0.8 }}
                        >
                            <a 
                                href="https://www.linkedin.com/in/paul-nam/"    
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex flex-row justify-center items-center before:ease relative h-12 w-32 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32"
                            >
                                <span className="relative z-10 text-sm">
                                    Linkedin
                                </span>
                                <svg className="relative z-10 fill-current text-black group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M 6 3 C 4.3489059 3 3 4.3489059 3 6 L 3 18 C 3 19.651094 4.3489059 21 6 21 L 18 21 C 19.651094 21 21 19.651094 21 18 L 21 6 C 21 4.3489059 19.651094 3 18 3 L 6 3 z M 6 4 L 18 4 C 19.110906 4 20 4.8890941 20 6 L 20 18 C 20 19.110906 19.110906 20 18 20 L 6 20 C 4.8890941 20 4 19.110906 4 18 L 4 6 C 4 4.8890941 4.8890941 4 6 4 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                                </svg>
                            </a>
                            <a href="mailto:poul0315@gmail.com" className="group flex justify-center items-center before:ease relative h-12 w-32 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:shadow-blue-300 hover:before:h-64 hover:before:-translate-y-32">
                                <span className="relative z-10 text-sm">
                                    Email
                                </span>
                                <svg className="ml-[0.2rem] relative z-10 fill-current text-black group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24">
                                    <path d="M3 4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3zm0-1h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm1 3v1.23l8 5.33 8-5.33V6H4zm8 7L3 7.77V18h18V7.77L12 13z"/>
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div> 
                <div className="flex flex-col w-[100%] xl:w-[40%] gap-y-[2rem] text-[1.1rem] text-gray-700">
                    <p>
                        Self-taught software engineer with strong expertise in JavaScript, 
                        TypeScript, Python, and C++. I am passionate about building impactful 
                        and scalable solutions that improve people's lives.
                    </p>
                    <p>
                        I have hands-on experience in prototyping, CI/CD pipeline setup, 
                        and developing customer-facing products. I prioritize building clean, 
                        maintainable codebases that support continuous improvement and scalability.
                    </p>
                    <p>
                        I hold a Bachelor’s degree in Electrical and Electronic Engineering from the University of Washington 
                        and an Associate degree in General Science from Edmonds College in the United States.
                    </p>
                    <p>
                        I am fluent in English and Korean, with experience studying and working in electrical engineering.
                    </p>
                </div>
                <div className="xl:hidden flex flex-col text-gray-900 gap-y-[0.5rem]">
                    <motion.p 
                            className="text-[1.5rem] font-semibold space-x-[2rem]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ amount: 0.9 }}
                        >
                            Let's Connect!
                    </motion.p>
                    <motion.div 
                        className="flex flex-row font-sm font-bold text-[1.2rem] gap-x-[2rem]"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ amount: 0.8 }}
                    >
                        <a 
                            href="https://www.linkedin.com/in/paul-nam/"    
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex flex-row justify-center items-center before:ease relative h-12 w-32 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32"
                        >
                            <span className="relative z-10 text-sm">
                                Linkedin
                            </span>
                            <svg className="relative z-10 fill-current text-black group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                <path d="M 6 3 C 4.3489059 3 3 4.3489059 3 6 L 3 18 C 3 19.651094 4.3489059 21 6 21 L 18 21 C 19.651094 21 21 19.651094 21 18 L 21 6 C 21 4.3489059 19.651094 3 18 3 L 6 3 z M 6 4 L 18 4 C 19.110906 4 20 4.8890941 20 6 L 20 18 C 20 19.110906 19.110906 20 18 20 L 6 20 C 4.8890941 20 4 19.110906 4 18 L 4 6 C 4 4.8890941 4.8890941 4 6 4 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                            </svg>
                        </a>
                        <a href="mailto:poul0315@gmail.com" className="group flex justify-center items-center before:ease relative h-12 w-32 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:shadow-blue-300 hover:before:h-64 hover:before:-translate-y-32">
                            <span className="relative z-10 text-sm">
                                Email
                            </span>
                            <svg className="ml-[0.2rem] relative z-10 fill-current text-black group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24">
                                <path d="M3 4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H3zm0-1h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm1 3v1.23l8 5.33 8-5.33V6H4zm8 7L3 7.77V18h18V7.77L12 13z"/>
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>  
        </div>
    )
}