import React, { useState } from "react";

export default function ProjectsPage() {
    const [expandedProject, setExpandedProject] = useState(null);

    const projectCategories = {
        "Machine Learning Research": [
            {
                id: 1,
                title: "Improving RAG for Multi-hop Question Answering using Guided Retrieval and Adaptation",
                link: "https://github.com/aalokpatwa/rag-adaptation-paper/blob/main/Paper.pdf",
                description: [
                    "Built new LLM-guided sequential retrieval techniques, yielding 10% improvement in generation performance.",
                    "Created a generalizable method of adapting OpenAI embeddings using a single matrix, improving retrieval hit rate by 5%."
                ],
                skills: ["PyTorch", "Graph Neural Networks", "DLRM", "AWS"],
                thumbnail: "/IMG_8199.jpg"
            },
            {
                id: 2,
                title: "Graph Neural Networks and Deep Learning Approaches for Recommendation Systems",
                link: "https://github.com/aalokpatwa/recommenders",
                description: [
                    "Implemented LightGCN, an extensible graph neural network architecture for collaborative filtering, and DLRM, a deep content-based architecture by Meta, from scratch in PyTorch.",
                    "Trained on the MovieLens-1M dataset using AWS, and evaluated both architectures on recommendation quality, latency, and scalability."
                ],
                skills: ["PyTorch", "Graph Neural Networks", "DLRM", "AWS"],
                thumbnail: "/IMG_8199.jpg"
            },
            {
                id: 3,
                title: "RASP-MIBI: Computational Pipeline to Predict Recurrence and Survival of Triple-negative Breast Cancer Patients",
                link: "https://github.com/aalokpatwa/rasp-mibi",
                description: [
                    "First-authored a paper in Nature Communications Biology for building a pipeline for early detection of triple-negative breast cancer, the most aggressive breast-cancer subtype.",
                    "Devised an algorithm to approximate cell-to-cell protein interactions and use features downstream in machine learning models."
                ],
                skills: ["Machine Learning", "Statistics", "Biomedical Imaging"],
                thumbnail: "/IMG_8199.jpg"
            },
            {
                id: 5,
                title: "Computationally Efficient, Accurate and Real-Time Detection of Colon Polyps Using Deep Neural Networks",
                link: "https://www.youtube.com/watch?v=W7f18NMAy3g",
                description: [
                    "Modified a UNet encoder-decoder model in high school to segment colorectal cancer polyps from colonoscopy video at 17 FPS.",
                    "Presented at the TensorFlow World Conference. Check out the code!"
                ],
                skills: ["Deep Learning", "CNNs", "TensorFlow", "Segmentation", "Medical Imaging"],
                thumbnail: "/IMG_8199.jpg"
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
                thumbnail: "/IMG_8199.jpg"
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
                thumbnail: "/IMG_8199.jpg"
            }
        ],
        "Systems": [
            {
                id: 7,
                title: "The Empire Crawls Back: Distributed Search Engine",
                link: "https://docs.google.com/document/d/1Ir7APyUH82HtkU088IIXcCKYERjnpfaO95exGUM9_lY/edit?usp=sharing",
                description: [
                    "Created an online search engine that serves queries on 200K crawled web pages in 900 ms on average.",
                    "Implemented a fault-tolerant web crawler, distributed storage system, our own version of Spark, PageRank, and an intelligent frontend, complete with search suggestions and caching."
                ],
                skills: ["Web Crawling", "Distributed Storage", "PageRank", "Java", "Cloud Computing"],
                thumbnail: "/IMG_8199.jpg"
            }
        ]
    };

    const toggleExpanded = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div className="min-h-screen bg-white font-assistant">
            <div className="w-11/12 sm:w-10/12 mx-auto pt-8">
                <h1 className="text-4xl font-medium text-black mb-8">Projects</h1>
                
                {Object.entries(projectCategories).map(([category, projects]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-medium text-black mb-6">{category}</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {/* Thumbnail (not clickable) */}
                                    <div className="block">
                                        <img 
                                            src={project.thumbnail} 
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    
                                    {/* Project title and description */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-black mb-2 line-clamp-2">
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="hover:underline transition-all"
                                            >
                                                {project.title}
                                            </a>
                                        </h3>
                                        
                                        {/* Collapsible description */}
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => toggleExpanded(project.id)}
                                                className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                                            >
                                                {expandedProject === project.id ? "Show less" : "Read more"}
                                            </button>
                                            
                                            {expandedProject === project.id && (
                                                <div className="space-y-2 text-gray-700 text-sm">
                                                    {project.description.map((desc, index) => (
                                                        <p key={index} className="leading-relaxed">
                                                            {desc}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Skills tags */}
                                        <div className="mt-3 flex flex-wrap gap-1">
                                            {project.skills.map((skill, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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