import React from "react";

export default function HomePage() {
    return (
        <div className="bg-white font-assistant flex flex-col">
            <div className="mx-6 sm:max-w-2xl md:max-w-7xl sm:mx-auto md:pt-12 flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row pb-4">
                    {/* Mobile: Photo below centered name */}
                    <div className="md:hidden flex flex-col items-center mb-6 mt-4">
                        <h1 className="text-3xl md:text-5xl font-normal text-black mb-6 text-center">
                            Aalok Patwa
                        </h1>
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            <img 
                                src="/Headshot.png" 
                                className="w-full h-full object-cover" 
                                alt="Aalok Patwa"
                            />
                        </div>
                    </div>
                    
                    {/* Mobile: Bio content */}
                    <div className="md:hidden space-y-4 text-gray-800">
                        <p className="text-md leading-relaxed">
                            I work on the <span className="font-semibold">Search team at OpenAI</span>, where I work to make models more factual by grounding them in <span className="font-semibold">up-to-date knowledge</span>.
                        </p>
                        <p className="text-md leading-relaxed">
                            More broadly, I am interested in building <span className="font-semibold">AI models and systems that unlock value and feel magical in the real world</span>.
                        </p>
                        <p className="text-md leading-relaxed">
                            Previously, I interned at <span className="font-semibold">Databricks</span>, where I worked on the <a href="https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments" className="text-green-600 font-medium hover:underline">Databricks Assistant</a>, an LLM copilot for data science. I also conducted research at Penn's <span className="font-semibold">TrustML Group</span> with Professor Osbert Bastani on <span className="font-semibold">user-level personalization with reinforcement learning</span>.
                        </p>
                        <p className="text-md leading-relaxed">
                            Earlier, I was a machine learning researcher at Stanford's <a href="https://rubinlab.stanford.edu/" className="text-green-600 font-medium hover:underline">Rubin Lab</a>, where I <span className="font-semibold">first-authored a paper in Nature</span> and became a <a href="https://www.societyforscience.org/regeneron-sts/2021-scholars/" className="text-green-600 font-medium hover:underline">Regeneron STS Scholar</a>. I graduated from the University of Pennsylvania in 2025 with a joint MSE/BS in Computer Science and a BS in Business from Wharton, and helped lead <span className="font-semibold">Machine Learning Research @ Penn</span>.
                        </p>
                    </div>
                    
                    {/* Desktop: Left side with bio */}
                    <div className="hidden md:block md:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-normal text-black mb-4">
                            Aalok Patwa
                        </h1>
                        
                        <div className="space-y-4 text-gray-800 mt-8">
                            <p className="text-lg leading-relaxed">
                                I work on the <span className="font-semibold">Search team at OpenAI</span>, where I work to make models more factual by grounding them in <span className="font-semibold">up-to-date knowledge</span>.
                            </p>
                            <p className="text-lg leading-relaxed">
                                More broadly, I am interested in building <span className="font-semibold">AI models and systems that unlock value and feel magical in the real world</span>.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Previously, I interned at <span className="font-semibold">Databricks</span>, where I worked on the <a href="https://www.databricks.com/blog/announcing-general-availability-databricks-assistant-and-ai-generated-comments" className="text-green-600 font-medium hover:underline">Databricks Assistant</a>, an LLM copilot for data science. I also conducted research at Penn's <span className="font-semibold">TrustML Group</span> with Professor Osbert Bastani on <span className="font-semibold">user-level personalization with reinforcement learning</span>.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Earlier, I was a machine learning researcher at Stanford's <a href="https://rubinlab.stanford.edu/" className="text-green-600 font-medium hover:underline">Rubin Lab</a>, where I <span className="font-semibold">first-authored a paper in Nature</span> and became a <a href="https://www.societyforscience.org/regeneron-sts/2021-scholars/" className="text-green-600 font-medium hover:underline">Regeneron STS Scholar</a>. I graduated from the University of Pennsylvania in 2025 with a joint MSE/BS in Computer Science and a BS in Business from Wharton, and helped lead <span className="font-semibold">Machine Learning Research @ Penn</span>.
                            </p>
                        </div>
                    </div>
                     
                     {/* Desktop: Right side with photo */}
                     <div className="hidden md:flex md:w-1/3 items-center justify-center md:justify-end mx-6">
                         <div className="w-80 h-80 rounded-full overflow-hidden mb-6">
                             <img 
                                 src="/Headshot.png" 
                                 className="w-full h-full object-cover" 
                                 alt="Aalok Patwa"
                             />
                         </div>
                     </div>
                 </div>
                 
                 {/* Social media links at bottom */}
                 <div className="mt-auto pt-8 pb-4 border-t border-gray-200">
                     <div className="flex justify-center space-x-8">
                         <a href="https://www.linkedin.com/in/aalok-patwa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                             LinkedIn
                         </a>
                         <a href="https://github.com/aalokpatwa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                             Github
                         </a>
                         <a href="https://x.com/apatwa7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                             X
                         </a>
                         <a href="https://medium.com/@aalokpatwa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                             Substack
                         </a>
                     </div>
                 </div>
             </div>
         </div>
    );
}
