import React, { useState } from "react";

export default function ProjectsPage() {
    const [expandedProject, setExpandedProject] = useState(null);

    const projectCategories = {
        "Machine Learning Research": [
            {
                id: -1,
                title: "Building LLM Reasoners and Agents for Financial Workflows using Synthetic Data and RL",
                link: "https://github.com/aalokpatwa/finance-rl/blob/main/Report.pdf",
                description: [
                    "Developed a new synthetic data method for generating financial reasoning datasets (FinReason) and released to HuggingFace.",
                    "Trained small LLMs on FinReason using GRPO and SFT.",
                    "Built several LLM tools and agents for common financial workflows using ReAct and tool-calling approaches."
                ],
                skills: ["PyTorch", "GRPO", "LLM Agents"],
                thumbnail: "/Figure1.drawio.png"
            },
            {
                id: 0,
                title: "DPO, DPOP, and SFT Post-training in Pure PyTorch",
                link: "https://aalokpatwa.substack.com/p/dpo",
                description: [
                    "Implemented DPO, DPOP, and SFT post-training pipelines in pure PyTorch, and compared their efficacy on GPT-2.",
                    "Identified optimization issues with DPO's objective function and rectified with DPOP."
                ],
                skills: ["PyTorch", "LLMs", "Post-training"],
                thumbnail: "/DPO_2.png"
            },
            {
                id: 1,
                title: "Improving RAG for Multi-hop Question Answering using Guided Retrieval and Adaptation",
                link: "https://github.com/aalokpatwa/rag-adaptation-paper/blob/main/Paper.pdf",
                description: [
                    "Built new LLM-guided sequential retrieval techniques, yielding 10% improvement in generation performance.",
                    "Created a generalizable method of adapting OpenAI embeddings using a single matrix, improving retrieval hit rate by 5%."
                ],
                skills: ["PyTorch", "LLMs", "Evals"],
                thumbnail: "/rag.png"
            },
            {
                id: 2,
                title: "Graph Neural Networks and Deep Learning Approaches for Recommendation Systems",
                link: "https://github.com/aalokpatwa/recommenders",
                description: [
                    "Implemented LightGCN, an extensible graph neural network architecture for collaborative filtering, and DLRM, a deep content-based architecture by Meta, from scratch in PyTorch.",
                    "Trained on the MovieLens-1M dataset using AWS, and evaluated both architectures on recommendation quality, latency, and scalability."
                ],
                skills: ["PyTorch", "Graph Neural Networks", "Recommendation Systems"],
                thumbnail: "/DLRM.png"
            },
            {
                id: 3,
                title: "RASP-MIBI: Computational Pipeline to Predict Recurrence and Survival of Triple-negative Breast Cancer Patients",
                link: "https://github.com/aalokpatwa/rasp-mibi",
                description: [
                    "First-authored a paper in Nature Communications Biology for building a pipeline for early detection of triple-negative breast cancer, the most aggressive breast-cancer subtype.",
                    "Devised an algorithm to approximate cell-to-cell protein interactions and use features downstream in machine learning models."
                ],
                skills: ["Machine Learning", "Algorithms", "Biomedical Imaging"],
                thumbnail: "/mibi.png"
            },
            {
                id: 5,
                title: "Computationally Efficient, Accurate and Real-Time Detection of Colon Polyps Using Deep Neural Networks",
                link: "https://www.youtube.com/watch?v=W7f18NMAy3g",
                description: [
                    "Modified a UNet encoder-decoder model in high school to segment colorectal cancer polyps from colonoscopy video at 17 FPS.",
                    "Presented at the TensorFlow World Conference. Check out the code!"
                ],
                skills: ["TensorFlow", "CNNs"],
                thumbnail: "/polyp.png"
            }
        ],
        "Applications": [
            {
                id: 4,
                title: "Cambrian: Copilot for AI Research",
                link: "https://cambrianml.org",
                description: [
                    "Designed and implemented a hub for discovering, understanding, and discussing AI research using LLM-based search and QA."
                ],
                skills: ["LLMs", "Web Development", "Next.js", "Postgres"],
                thumbnail: "/cambrian.png"
            },
            {
                id: 6,
                title: "PennSched: Seamless Course Scheduling",
                link: "http://www.pennsched.com",
                description: [
                    "Built Penn's first automatic course scheduling app, which can build and rank students' possible schedules in a matter of seconds.",
                    "Reached 1,000 users in the first week of launch."
                ],
                skills: ["Python", "Algorithms", "Web Development"],
                thumbnail: "/pennsched.png"
            }
        ]
    };

    const toggleExpanded = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div className="min-h-screen bg-white font-assistant">
            <div className="mx-6 sm:max-w-2xl md:max-w-7xl sm:mx-auto mx-auto pt-8">
                
                {Object.entries(projectCategories).map(([category, projects]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-medium text-black mb-6">{category}</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 pt-6">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md flex flex-col">
                                    {/* Thumbnail (not clickable) */}
                                    <div className="block">
                                        <img 
                                            src={project.thumbnail} 
                                            alt={project.title}
                                            className="w-full h-36 object-cover opacity-60"
                                        />
                                    </div>
                                    
                                    {/* Project title and description */}
                                    <div className="p-4 flex flex-col flex-1">
                                                                        <h3 className="text-xl font-semibold text-black mb-2">
                                            {project.title}
                                        </h3>
                                        
                                        
                                        
                                        {/* Skills tags */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.skills.map((skill, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Icons at bottom */}
                                        <div className="flex items-center space-x-4 mt-auto">
                                            <button
                                                onClick={() => toggleExpanded(project.id)}
                                                className="text-gray-600 hover:text-gray-800 transition-colors"
                                            >
                                                {expandedProject === project.id ? (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-700 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>

                                            </a>
                                        </div>
                                        {/* Collapsible description */}
                                        {expandedProject === project.id && (
                                            <div className="space-y-2 text-gray-700 text-sm mt-2">
                                                {project.description.map((desc, index) => (
                                                    <p key={index} className="leading-relaxed">
                                                        {desc}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 