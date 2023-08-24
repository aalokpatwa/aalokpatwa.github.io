import React from "react";
import Footer from "../components/Footer"
import ProjectBar from "../components/ProjectBar"

export default function HomePage() {
    return (
        <body class="min-h-screen bg-slate-100">
            <div class="my-8">
                <div class="text-center justify-center">
                    <h2 class="mt-8 sm:mt-16 mb-8 font-light font-bold text-4xl text-black font-sans font-bold">
                        Aalok Patwa
                    </h2>
                </div>
                <div class="mx-auto shadow-md rounded-xl w-9/12 bg-white">
                    <div class="mx-8 pt-8">
                        <p class="pb-8 font-light">
                            I'm pursuing a dual-degree in Computer Science and Business at the University of Pennsylvania. I have an academic and professional background in machine learning, statistics, algorithms, and systems, as well as finance, management, and marketing.
                            <br/>
                            <br/>
                            I'm really passionate about AI. I worked with Stanford's Rubin Lab on computer vision for medical imaging and Penn's GRASP Lab on AutoML frameworks. 
                            <br/>
                            <br/>
                            In Summer 2023, I'm working at <a href="https://aws.amazon.com/"><u>Amazon Web Services</u></a> building automated ticket resolution systems.
                            <br/>
                            <br/>
                            On campus, I TA CIS 5190, the graduate machine learning course,
                            do data science consulting for companies like Fox with <a href="https://analytics.wharton.upenn.edu/get-involved/students/student-analytics-fellows/"><u>Wharton Analytics Fellows</u></a>, 
                            and research technology trends through <a href="https://collegiate.vc/penn"><u>Penn Undergraduate Capital Partners</u></a>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="my-8">
                <div class="justify-center text-center">
                    <h2 class="mx-32 mt-16 mb-8 font-light font-bold text-4xl text-black">
                        Projects
                    </h2>
                </div>
                <ProjectBar 
                link={"https://cambrianml.org"} 
                title={"Cambrian: Copilot for AI Research"}
                skills={["LLMs", "Web Development", "Next.js", "Postgres"]}>
                <div>
                    <p class="my-2">
                        Designed and implemented the central hub for discovering, understanding, and discussing AI research.
                    </p>
                    <p class="my-2">
                        Cambrian provides users with AI-powered search, an AI assistant to answer quesions about papers, and the ability to send papers to friends.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://www.nature.com/articles/s42003-021-02361-1"} 
                title={"RASP-MIBI: Computational Pipeline to Predict Recurrence and Survival of Triple-negative Breast Cancer Patients"}
                skills={["Machine Learning", "Statistics", "Biomedical Imaging"]}>
                <div>
                    <p class="my-2">
                    First-authored a paper in <i>Nature Communications Biology</i> for building a pipeline for early detection of triple-negative breast cancer, the most aggressive breast-cancer subtype.
                    </p>
                    <p class="my-2">
                    Devised an algorithm to approximate cell-to-cell protein interactions and use features downstream in machine learning models.
                    </p>
                    <p class="my-2">
                    <a href="https://www.societyforscience.org/regeneron-sts/2021-scholars/"><u>Regeneron STS Scholar</u></a>, Regeneron ISEF Finalist, Synopsys Grand Prize Winner. Check out the <a href="https://github.com/aalokpatwa/rasp-mibi/"><u>code!</u></a>
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://github.com/aalokpatwa/ViT-CNN/blob/main/Writeup.pdf"} 
                title={"ViT-CNN: Comparing Performance of Vision Transformers and CNNs on Fine-grained Classification"}
                skills={["Deep Learning", "Computer Vision", "PyTorch", "Transformers"]}>
                <div>
                    <p class="my-2">
                    Trained vision transformers and CNNs to predict the popularity of photos of shelter pets.
                    </p>
                    <p class="my-2">
                    Processed the dataset, ran training scripts, tuned models as necessary, and analyzed relative strengths and weaknesses.
                    </p>
                    <p class="my-2">
                    Done for CIS 5190: Applied Machine Learning.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://www.youtube.com/watch?v=W7f18NMAy3g"} 
                title={"Computationally Efficient, Accurate and Real-Time Detection of Colon Polyps Using Deep Neural Networks"}
                skills={["Deep Learning", "CNNs", "TensorFlow", "Segmentation", "Medical Imaging"]}>
                <div>
                    <p class="my-2">
                    Modified a UNet encoder-decoder model in high school to segment colorectal cancer colyps in real-time from colonoscopy video.
                    </p>
                    <p class="my-2">
                    Iterated on model architecture, used elastic deformations for data augmentation, and optimized model size to achieve 17 FPS.
                    </p>
                    <p class="my-2">
                    Presented at the TensorFlow World Conference. Check out the <a href="https://github.com/aalokpatwa/polyp_detection"><u>code!</u></a>
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://www.google.com"} 
                title={"The Empire Crawls Back: Distributed Search Engine"}
                skills={["Web Crawling", "Distributed Storage", "PageRank", "Java", "Cloud Computing"]}>
                <div>
                    <p class="my-2">
                    Created an online search engine that serves queries on 200K crawled web pages in 900 ms on average.
                    </p>
                    <p class="my-2">
                    Implemented a fault-tolerant web crawler, distributed storage system, our own version of Spark, PageRank, and an intelligent frontend, complete with search suggestions and caching.
                    </p>
                    <p class="my-2">
                    Done for CIS 5550: Internet & Web Systems. I can't post the link as per course policies, so I've linked to Google instead. Ours was nearly as good ;)
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"http://www.pennsched.com"} 
                title={"PennSched: Seamless Course Scheduling"} 
                skills={["Python", "Algorithms", "Web Development"]}>
                <div>
                    <p class="my-2">
                    Built Penn's first automatic course scheduling app, which can build and rank students' possible schedules in a matter of seconds.
                    </p>
                    <p class="my-2">
                    Developed the scheduling and ranking algorithm, created optimizations to improve runtime, and built the web app using the Streamlit framework.
                    </p>
                    <p class="my-2">
                    Reached 1,000 users in the first week of launch.
                    </p>
                </div>
            </ProjectBar>
            <ProjectBar 
                link={"https://github.com/aalokpatwa/findmypet"} 
                title={"FindMyPet: Using AI to Reunite Lost Pets with their Owners"} 
                skills={["Deep Learning", "CNNs", "TensorFlow"]}>
                <div>
                    <p class="my-2">
                    Built a model to match images of stray pets to images of lost pets submitted by owners as my first-ever machine learning project.
                    </p>
                    <p class="my-2">
                    Built the dataset myself using screenshots of dogs in YouTube videos, trained the model, and fell in love with AI.
                    </p>
                </div>
            </ProjectBar>
            </div>
            
            
            <Footer />
        </body>
        
    );
}
