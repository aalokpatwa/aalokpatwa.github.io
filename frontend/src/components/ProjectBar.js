import React from "react";

export default function ProjectBar(props) {
    return (
        <div class="mx-auto shadow-md rounded-xl w-9/12 bg-white mt-8">
            <div class="justify-center text-center mx-auto w-9/12 my-4">
                <p class="text-xl font-medium py-4">
                    <a href={props.link} class="hover:text-blue-400">
                        {props.title}
                    </a>
                </p>
                {
                    props.skills.map((skill) => (
                        <div class="inline-block rounded w-auto border-solid bg-emerald-200 mx-2">
                            <p class="mx-3 font-light">
                                {skill}
                            </p>
                        </div>
                            
                    ))
                }
            </div>
            <div class="mx-8">
                <p class="pb-4 font-light">
                    {props.children}
                </p>
            </div>
        </div>        
    );
}