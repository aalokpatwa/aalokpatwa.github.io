import React from "react";

export default function WritingPage() {
    const blogCategories = {
        "Technical blogs": [
            {
                id: 0,
                title: "DPO, DPOP, and SFT in Pure PyTorch",
                link: "https://aalokpatwa.substack.com/p/dpo",
                description: "Implementation, analysis, and interpretation of experiments comparing DPO, DPOP, and SFT post-training of GPT-2."
            },
            {
                id: 1,
                title: "Optimizing LLM Inference: Managing the KV Cache",
                link: "https://medium.com/@aalokpatwa/optimizing-llm-inference-managing-the-kv-cache-34d961ead936",
                description: "A primer on how the KV cache speeds up LLM inference, and how to manage its memory usage."
            },
            {
                id: 2,
                title: "LLM Decoding: Balancing Quality and Latency",
                link: "https://medium.com/@aalokpatwa/llm-decoding-balancing-quality-and-latency-23632cc0277e",
                description: "Deep dive into LLM decoding techniques that produce fast, creative responses, from nucleus sampling to speculative decoding."
            }
        ],
        "Perspectives": [
            {
                id: 0,
                title: "Pricing AI Agents Strategically",
                link: "https://aalokpatwa.substack.com/p/agent-pricing",
                description: "Understanding different pricing policies for AI agents, and how both vendors and customer can maximize their value."
            },
            {
                id: 1,
                title: "TEFCA and Its Implications for Healthcare",
                link: "https://aalokpatwa.substack.com/p/tefca",
                description: "How recent regulation enables unprecedented health data interoperability and fosters new business opportunities."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-assistant">
            <div className="mx-6 lg:max-w-7xl lg:mx-auto pt-4 md:pt-8">
                {Object.entries(blogCategories).map(([category, blogs]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-medium text-black mb-6">{category}</h2>
                        
                        <div className="space-y-4 md:space-y-4">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="border-b border-gray-200 pb-2 md:pb-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        <a 
                                            href={blog.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                                        >
                                            {blog.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {blog.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 