import React from "react";

export default function Footer() {

  return (
      <div>
        <nav class="flex justify-center py-4 font-bold">
          <a href="https://www.github.com/aalokpatwa" class={`mx-16 sm:mx-32 font-light text-2xl text-blue-600 hover:text-gray-600`}>Github</a>
          <a href="https://www.linkedin.com/in/aalok-patwa" class={`mx-16 sm:mx-32 font-light text-2xl text-blue-600 hover:text-gray-600`}>Linkedin</a>
        </nav>
      </div>

  );

}