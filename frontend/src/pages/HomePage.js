import React from "react";
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <body class="min-h-screen bg-stone-800">
            <div>
                <div class="mx-auto shadow-xl rounded-xl w-9/12 bg-stone-200">
                    <div class="justify-center text-center mx-auto w-9/12 my-4">
                        <p class="text-xl py-4">
                            Hi, I'm Aalok!
                        </p>
                    </div>
                    <div class="mx-8">
                        <p class="pb-8">
                            I study Computer Science and Business at the University of Pennsylvania.
                            <br/>
                            <br/>
                            I'm really passionate about AI. I worked with Stanford's Rubin Lab on computer vision for medical imaging and Penn's GRASP Lab on AutoML frameworks. 
                            <br/>
                            <br/>
                            I've also become enamored by distributed systems after taking <a href="https://cis5550.seas.upenn.edu/"><u>CIS 5550</u></a> at school, 
                            and now spend a lot of time thinking about the <a href="https://en.wikipedia.org/wiki/CAP_theorem"><u>CAP Theorem</u></a>.
                            <br/>
                            <br/>
                            On campus, I TA CIS 3200, our Intermediate Algorithms course (think dynamic programming, network flow, approximation algorithms), 
                            do data science consulting for companies like Fox with <a href="https://analytics.wharton.upenn.edu/get-involved/students/student-analytics-fellows/"><u>Wharton Analytics Fellows</u></a>, 
                            and research technology trends through <a href="https://collegiate.vc/penn"><u>Penn Undergraduate Capital Partners</u></a>.
                            <br/>
                            <br/>
                            Feel free to check out my Projects to see what I've built.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
        
    );
}
