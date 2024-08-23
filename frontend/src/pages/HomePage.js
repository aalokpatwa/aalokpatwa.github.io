import React from "react";
import Footer from "../components/Footer"
import ProjectBar from "../components/ProjectBar"

export default function HomePage() {
    return (
        <body class="min-h-screen bg-white font-assistant w-11/12 sm:w-10/12 mx-auto">
            <div className="">
                <div class="pt-12 flex items-center">
                    <img src="/Headshot.png" class="h-40 w-40 rounded-full" alt="Aalok Patwa"/>
                </div>
                
                <div class="flex pt-6 mb-4 items-center justify-between">
                    <h2 class="text-3xl text-black w-fit font-medium border-b-2 border-zinc-400">
                        Aalok Patwa
                    </h2>
                    <div className="flex items-center ml-auto md:space-x-4">
                        <a href="https://www.linkedin.com/in/aalok-patwa" target="_blank" className="text-blue-600 font-medium hover:underline">
                            <img src="linkedin.webp" alt="LinkedIn" className="h-10 w-10 inline-block mr-2"/>
                        </a>
                        <a href="https://github.com/aalokpatwa" target="_blank" className="text-blue-600 font-medium hover:underline">
                            <img src="github.png" alt="Github" className="h-8 w-8 inline-block mr-2"/>
                        </a>
                        <a href="https://medium.com/@aalokpatwa" target="_blank" className="text-blue-600 font-medium hover:underline">
                            <img src="medium.png" alt="Medium" className="h-8 inline-block mr-2"/>
                        </a>
                        
                    </div>
                </div>
    
                <div class="rounded-lg">
                <p className="font-normal text-md mb-4">
                    Hi! I'm a student at the University of Pennsylvania, pursuing a dual degree in Computer Science from the Engineering school and Business from Wharton.
                </p>
                <p className="font-normal text-md mb-4">
                    I'm a builder at heart. I'm most passionate about the potential for AI and big data systems to amplify human effort and create prosperity.  
                </p>
                <p className="font-normal text-md mb-4">
                    Most recently, I was a Product Management Intern at Databricks, building the <a href="https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments" className="text-blue-600 font-medium hover:underline">Databricks Assistant</a>, a code-generation LLM to boost developers' productivity within Databricks.
                    Previously, I was a machine learning researcher at Stanford's <a href="https://rubinlab.stanford.edu/" className="text-blue-600 font-medium hover:underline">Rubin Lab</a>, where I first-authored in <a href="/https://www.nature.com/articles/s42003-021-02361-1" className="text-blue-600 font-medium hover:underline">Nature</a> and became a <a href="https://www.societyforscience.org/regeneron-sts/2021-scholars/" className="text-blue-600 font-medium hover:underline">Regeneron STS Scholar</a>.
                    In Summer 2023, I interned at AWS, where I used NLP algorithms with serverless compute to automate the ticket resolution flow for <a href="https://aws.amazon.com/fargate/" className="text-blue-600 font-medium hover:underline">AWS Fargate</a>.                        
                </p>
                
                <p className="font-normal text-md mb-2">
                    On campus, I am a Teaching Assistant for CIS 5190, our graduate machine learning course, and sit on the board of <a href="https://mlrpenn.vercel.app/" className="text-blue-600 font-medium hover:underline">Machine Learning Research @ Penn</a>. I also do ML consulting for companies like Fox through <a href="https://analytics.wharton.upenn.edu/get-involved/students/student-analytics-fellows/" className="text-blue-600 font-medium hover:underline">Wharton Analytics Fellows</a>. Finally, I'm a Venture Fellow for <a href="https://pear.vc/" className="text-blue-600 font-medium hover:underline">Pear VC</a>. 
                </p>
                </div>
                
            </div>
            <div class="mt-4">
                <div class="">
                    <h2 class="mt-8 pb-2 w-fit font-medium text-3xl text-black border-b-2 border-zinc-400">
                        Projects
                    </h2>
                </div>
            <ProjectBar 
                link={"https://github.com/aalokpatwa/rag-adaptation-paper/blob/main/Paper.pdf"} 
                title={"Improving RAG for Multi-hop Question Answering using Guided Retrieval and Adaptation"}
                skills={["PyTorch", "Graph Neural Networks", "DLRM", "AWS"]}>
                <div>
                    <p class="my-1">
                        Built new LLM-guided sequential retrieval techniques, yielding 10% improvement in generation performance.
                    </p>
                    <p class="my-1">
                        Created a generalizable method of adapting OpenAI embeddins using a single matrix, improving retrieval hit rate by 5%.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://github.com/aalokpatwa/recommenders"} 
                title={"Graph Neural Networks and Deep Learning Approaches for Recommendation Systems"}
                skills={["PyTorch", "Graph Neural Networks", "DLRM", "AWS"]}>
                <div>
                    <p class="my-1">
                        Implemented LightGCN, an extensible graph neural network architecture for collaborative filtering, and DLRM, a deep content-based architecture by Meta, from scratch in PyTorch.
                    </p>
                    <p class="my-1">
                        Trained on the MovieLens-1M dataset using AWS, and evaluated both architectures on recommendation quality, latency, and scalability.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://github.com/aalokpatwa/rasp-mibi"} 
                title={"RASP-MIBI: Computational Pipeline to Predict Recurrence and Survival of Triple-negative Breast Cancer Patients"}
                skills={["Machine Learning", "Statistics", "Biomedical Imaging"]}>
                <div>
                    <p class="my-1">
                    First-authored a <a href="https://www.nature.com/articles/s42003-021-02361-1" className="text-blue-600 font-medium hover:underline">paper</a> in <i>Nature Communications Biology</i> for building a pipeline for early detection of triple-negative breast cancer, the most aggressive breast-cancer subtype.
                    </p>
                    <p class="my-1">
                    Devised an algorithm to approximate cell-to-cell protein interactions and use features downstream in machine learning models.
                    </p>
                    <p class="my-1">
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://cambrianml.org"} 
                title={"Cambrian: Copilot for AI Research"}
                skills={["LLMs", "Web Development", "Next.js", "Postgres"]}>
                <div>
                    <p class="my-1">
                        Designed and implemented a hub for discovering, understanding, and discussing AI research using LLM-based search and QA.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://www.youtube.com/watch?v=W7f18NMAy3g"} 
                title={"Computationally Efficient, Accurate and Real-Time Detection of Colon Polyps Using Deep Neural Networks"}
                skills={["Deep Learning", "CNNs", "TensorFlow", "Segmentation", "Medical Imaging"]}>
                <div>
                    <p class="my-1">
                    Modified a UNet encoder-decoder model in high school to segment colorectal cancer colyps from colonoscopy video at 17 FPS.
                    </p>
                    <p class="my-1">
                    Presented at the TensorFlow World Conference. Check out the <a href="https://github.com/aalokpatwa/polyp_detection" className="text-blue-600 font-medium hover:underline">code!</a>
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"http://www.pennsched.com"} 
                title={"PennSched: Seamless Course Scheduling"} 
                skills={["Python", "Algorithms", "Web Development"]}>
                <div>
                    <p class="my-1">
                    Built Penn's first automatic course scheduling app, which can build and rank students' possible schedules in a matter of seconds.
                    </p>
                    <p class="my-1">
                    Reached 1,000 users in the first week of launch.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://docs.google.com/document/d/1Ir7APyUH82HtkU088IIXcCKYERjnpfaO95exGUM9_lY/edit?usp=sharing"} 
                title={"The Empire Crawls Back: Distributed Search Engine"}
                skills={["Web Crawling", "Distributed Storage", "PageRank", "Java", "Cloud Computing"]}>
                <div>
                    <p class="my-1">
                    Created an online search engine that serves queries on 200K crawled web pages in 900 ms on average.
                    </p>
                    <p class="my-1">
                    Implemented a fault-tolerant web crawler, distributed storage system, our own version of Spark, PageRank, and an intelligent frontend, complete with search suggestions and caching.
                    </p>
                </div>
            </ProjectBar>
            </div>
            <div class="pb-8">
                <div class="">
                    <h2 class="mt-8 pb-2 w-fit font-medium text-3xl text-black border-b-2 border-zinc-400">
                        Blogs
                    </h2>
                </div>
                <ProjectBar 
                link={"https://medium.com/@aalokpatwa/optimizing-llm-inference-managing-the-kv-cache-34d961ead936"} 
                title={"Optimizing LLM Inference: Managing the KV Cache"} 
                skills={["Python", "Algorithms", "Web Development"]}>
                <div>
                    <p class="my-1">
                    A primer on how the KV cache speeds up LLM inference, and how to manage its memory usage.
                    </p>
                </div>
                </ProjectBar>
                <ProjectBar 
                link={"https://medium.com/@aalokpatwa/llm-decoding-balancing-quality-and-latency-23632cc0277e"} 
                title={"LLM Decoding: Balancing Quality and Latency"} 
                skills={["Python", "Algorithms", "Web Development"]}>
                <div>
                    <p class="my-1">
                    Deep dive into LLM decoding techniques that produce fast, creative responses, from nucleus sampling to speculative decoding.
                    </p>
                </div>
                </ProjectBar>
            </div>
            
            
        </body>
        
    );
}
