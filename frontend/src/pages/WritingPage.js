import React from "react";

export default function WritingPage() {
    const blogs = [
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
    ];

    return (
        <div className="min-h-screen bg-white font-assistant">
            <div className="w-11/12 sm:w-10/12 mx-auto pt-8">
                <h1 className="text-4xl font-medium text-black mb-8">Writing</h1>
                
                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="border-b border-gray-200 pb-6">
                            <h2 className="text-xl font-semibold text-black mb-2">
                                <a 
                                    href={blog.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                                >
                                    {blog.title}
                                </a>
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {blog.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 