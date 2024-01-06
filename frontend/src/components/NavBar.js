import React from "react";
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();

  return (
      <div>
        <nav class="flex justify-center py-4 sticky">
          <a href="/" class={`mx-32 mt-16 mb-8 font-medium font-2xl text-white hover:text-gray-600 ${location.pathname == "/" ? "underline" : ""}`}>ABOUT</a>
          <a href="#projects" class={`mx-32 mt-16 mb-8 font-medium font-2xl text-white hover:text-gray-600 ${location.pathname == "/projects" ? "underline" : ""}`}>PROJECTS</a>
          {/* <a href="/hobbies" class={`mx-32 mt-16 mb-8 font-medium font-2xl text-white hover:text-gray-600 ${location.pathname == "/hobbies" ? "underline" : ""}`}>REPO</a> */}
        </nav>
      </div>

  );
}