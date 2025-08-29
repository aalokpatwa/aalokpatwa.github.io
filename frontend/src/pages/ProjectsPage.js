import React from "react";

export default function ProjectsPage() {
    
    const projectCategories = {
        "Machine Learning": [
            {
                id: -1,
                title: "FinReason: LLM Agents for Financial Workflows via Synthetic Data and RL",
                link: "https://github.com/aalokpatwa/finance-rl/blob/main/Report.pdf",
                description: [
                    "Built FinReason, a synthetic dataset of 3k examples for financial reasoning, and trained Qwen-2.5-0.5B on it. Compared GRPO, SFT, and distillation, finding distillation most effective with a +7% accuracy gain on an external FinQA benchmark. Developed financial LLM agents to automate financial document auditing and Excel model creation."
                ],
                skills: ["PyTorch", "RLHF", "Agents"],
                thumbnail: "/Figure1.drawio.png"
            },
            {
                id: 0,
                title: "DPO vs. DPOP: Post-Training Pipelines in Pure PyTorch",
                link: "https://aalokpatwa.substack.com/p/dpo",
                description: [
                    "Implemented DPO, DPOP, and SFT pipelines from scratch in PyTorch and benchmarked them on GPT-2 Small. Used an LLM grader to measure win rates against alignment goals, showing that DPOP stabilized training and outperformed vanilla DPO. Released the code as a transparent reference for fine-tuning and RLHF approaches."
                ],
                skills: ["PyTorch", "RLHF", "LLMs"],
                thumbnail: "/DPO_2.png"
            },
            {
                id: 1,
                title: "Guided RAG for Multi-Hop Question Answering",
                link: "https://github.com/aalokpatwa/rag-adaptation-paper/blob/main/Paper.pdf",
                description: [
                    "Proposed LLM-guided sequential retrieval methods that improved multi-hop QA accuracy by 10% over baseline RAG. Introduced a lightweight embedding adaptation matrix that raised retrieval hit rates by 5% without retraining."
                ],
                skills: ["PyTorch", "RAG", "LLMs"],
                thumbnail: "/rag.png"
            },
            {
                id: 2,
                title: "Graph Neural Networks and Deep Models for Recommendations",
                link: "https://github.com/aalokpatwa/recommenders",
                description: [
                    "Implemented LightGCN and DLRM architectures in PyTorch and trained on MovieLens-1M using AWS. Compared collaborative filtering and content-based approaches across accuracy, latency, and scalability."
                ],
                skills: ["PyTorch", "GNNs", "Recommendation Systems"],
                thumbnail: "/DLRM.png"
            },
            {
                id: 3,
                title: "RASP-MIBI: Predicting Recurrence in Triple-Negative Breast Cancer",
                link: "https://github.com/aalokpatwa/rasp-mibi",
                description: [
                    "First-authored a Nature Communications Biology paper introducing RASP-MIBI, a pipeline for recurrence prediction in triple-negative breast cancer. Designed an algorithm to approximate cell-to-cell protein interactions for downstream ML models, improving predictive performance over clinical baselines. Work has been cited 46 times."
                ],
                skills: ["Machine Learning", "Biomedical Imaging", "Algorithms"],
                thumbnail: "/mibi.png"
            },
            {
                id: 5,
                title: "Real-Time Colon Polyp Detection with CNNs",
                link: "https://www.youtube.com/watch?v=W7f18NMAy3g",
                description: [
                    "Built a modified UNet-based model for real-time segmentation of colorectal polyps from colonoscopy videos. Achieved 17 FPS inference speed, enabling live clinical feedback, and presented the work at the TensorFlow World Conference."
                ],
                skills: ["TensorFlow", "CNNs", "Medical Imaging"],
                thumbnail: "/polyp.png"
            }
        ],
        "Applications": [
            {
                id: 4,
                title: "Cambrian: Copilot for AI Research Discovery",
                link: "https://cambrianml.org",
                description: [
                    "Developed Cambrian, a platform with semantic search and LLM-based Q&A over 250,000 AI research papers. Designed to help researchers rapidly navigate and understand technical literature."
                ],
                skills: ["LLMs", "Web Development", "Search"],
                thumbnail: "/cambrian.png"
            },
            {
                id: 6,
                title: "PennSched: Automatic Course Scheduling",
                link: "http://www.pennsched.com",
                description: [
                    "Created PennSched, the university’s first automatic course scheduler, generating and ranking valid student schedules in seconds. Reached over 1,000 users in the first week of launch."
                ],
                skills: ["Python", "Algorithms", "Web Development"],
                thumbnail: "/pennsched.png"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-assistant">
            <div className="mx-6 lg:max-w-4xl lg:mx-auto pt-4 md:pt-8">
                
                {Object.entries(projectCategories).map(([category, projects]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-medium text-black">{category}</h2>
                        
                        <div className="grid grid-cols-1 gap-3 pt-6">
                            {projects.map((project) => (
                                <div key={project.id} className="flex flex-col border-b border-gray-200 pb-2 md:pb-3">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                                        <div className="flex items-center gap-2">
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-700 hover:underline text-sm md:text-base inline-flex items-center gap-1"
                                            >
                                                <h3 className="text-lg font-semibold text-green-600 hover:text-green-700">
                                                    {project.title}
                                                </h3>
                                            </a>
                                        </div>
                                        
                                    </div>
                                    
                                    {/* Skills tags */}
                                    <div className="flex flex-wrap gap-1 mb-3 pt-1">
                                        {project.skills.map((skill, index) => (
                                            <span 
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="text-gray-700 text-sm">
                                        {project.description.map((desc, index) => (
                                            <p key={index} className="leading-relaxed">
                                                {desc}
                                            </p>
                                        ))}
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