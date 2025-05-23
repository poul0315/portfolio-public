import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import project from './projects.json'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const projects = project.data

export default function ProjectDetail() {
    const { projectName } = useParams(); // Get project name from URL
    const navigate = useNavigate();

    // Find the project based on the title
    const project = projects.find(proj => proj.title.toLowerCase().replace(/ /g, '-') === projectName);

    if (!project) {
        return <p>Project not found!</p>; // Handle invalid project name
    }

    // Helper function to navigate to the previous or next project
    const navigateToProject = (direction) => {
        const currentIndex = projects.findIndex(proj => proj.id === project.id);
        const nextIndex = (currentIndex + direction + projects.length) % projects.length;
        const nextProject = projects[nextIndex];
        navigate(`/project/${nextProject.title.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <div className="w-full h-full flex items-center justify-center py-[2rem]">
            <div className="flex flex-col gap-y-[3rem] w-[90%] md:w-[65%] text-[2rem] sm:text-[2rem] text-xl">
                <Link 
                    to="/"
                    className="text-xl text-gray-800 font-semibold hover:underline"
                    state={{ fromRefresh: false }}
                >
                    To Main Page
                </Link>

                <div className="flex justify-between text-xl">
                    <button onClick={() => navigateToProject(-1)} className="text-gray-800 hover:underline">Previous Project</button>
                    <button onClick={() => navigateToProject(1)} className="text-gray-800 hover:underline">Next Project</button>
                </div>

                {/* Dynamic text presenter */}
                <div className="flex flex-col items-start gap-y-[2rem]">
                    <h1 className="text-xl font-bold">PROJECT - {project.title}</h1>
                    {project.blocks.map((block, index) => (
                        <div key={index}>
                            {block.type === "text" && <p className="text-lg text-gray-600">{block.content}</p>}
                            {block.type === "image" && (
                                <div className="flex flex-col">
                                    <img src={block.content} alt={block.caption || project.title} className="w-[100%] h-[50%] object-scale-down rounded-lg border-[0.5rem]" />
                                    {block.caption && <p className="text-sm text-gray-500 mt-2">{block.caption}</p>}
                                </div>
                            )}
                            {block.type === "code" && (
                                <div className="flex flex-col">
                                    <div className="w-fulls h-[100%] overflow-x-auto text-xs md:text-sm rounded-lg bg-gray-900 p-4">
                                        <SyntaxHighlighter
                                            language="yaml"
                                            style={vs2015}
                                            customStyle={{
                                                backgroundColor: 'transparent',
                                                whiteSpace: 'pre-wrap',
                                                overflowWrap: 'break-word',  // Handle long lines
                                                display: 'block',
                                            }}
                                            wrapLongLines={true} // This forces long lines to wrap within the block
                                        >
                                            {block.content}
                                        </SyntaxHighlighter>
                                    </div>
                                    {block.caption && <p className="text-sm text-gray-500 mt-2">{block.caption}</p>}
                                </div>
                            )}
                            {block.type === "list" && <li className="my-[-1rem] text-lg text-gray-600 list-disc">{block.content}</li>}
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-between text-xl">
                    <button onClick={() => navigateToProject(-1)} className="text-gray-800 hover:underline">Previous Project</button>
                    <button onClick={() => navigateToProject(1)} className="text-gray-800 hover:underline">Next Project</button>
                </div>
            </div>
        </div>
    );
}