import React from "react";

export default function ProjectBar(props) {
    return (
        <div class="mt-4">
            <div class="justify-center">
                <p class="w-fit text-xl font-medium border-b border-zinc-400">
                    <a href={props.link} className="text-blue-600 hover:text-blue-500">
                        {props.title}
                    </a>
                    
                </p>
                {/* {
                    props.skills.map((skill) => (
                        <div class="inline-block rounded border border-black bg-emerald-200 m-2">
                            <p class="mx-3 font-light">
                                {skill}
                            </p>
                        </div>
                            
                    ))
                } */}
            </div>
            <div class="">
                <p class="pb-2 font-light text-md">
                    {props.children}
                </p>
            </div>
        </div>        
    );
}