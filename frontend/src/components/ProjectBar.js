import React from "react";

export default function ProjectBar(props) {
    return (
        <div class="mx-auto shadow-xl rounded-xl w-9/12 bg-stone-200 ease-in transform hover:scale-105 transition duration-75 mt-8">
            <div class="justify-center text-center mx-auto w-9/12 my-4">
                <p class="text-xl font-medium py-4">
                    <a href={props.link}>
                        <u>
                            {props.title}
                        </u>
                    </a>
                </p>
                {
                    props.skills.map((skill) => (
                        <div class="inline-block shadow-xl rounded w-auto bg-pink-200 mx-2">
                            <p class="mx-3">
                                {skill}
                            </p>
                        </div>
                            
                    ))
                }
            </div>
            <div class="mx-8">
                <p class="pb-4 font-normal">
                    {props.children}
                </p>
            </div>
        </div>        
    );
}