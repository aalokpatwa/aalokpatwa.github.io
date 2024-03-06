import React from "react";

export default function ProjectBar(props) {
    return (
        <div class="mx-2 rounded-xl border border-zinc-400 mt-8">
            <div class="justify-center text-center my-4">
                <p class="text-xl font-medium py-4 mx-8">
                    <a href={props.link} class="hover:text-blue-600 hover:underline">
                        {props.title}
                    </a>
                </p>
                {
                    props.skills.map((skill) => (
                        <div class="inline-block rounded border border-black bg-emerald-200 m-2">
                            <p class="mx-3 font-light">
                                {skill}
                            </p>
                        </div>
                            
                    ))
                }
            </div>
            <div class="mx-8">
                <p class="pb-4 font-light text-lg">
                    {props.children}
                </p>
            </div>
        </div>        
    );
}