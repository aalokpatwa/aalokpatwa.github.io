import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex justify-center py-6 bg-white">
      <div className="flex space-x-8">
        <Link
          to="/"
          className={`text-gray-600 hover:text-gray-800 transition-colors duration-200 relative ${
            isActive("/") ? "text-gray-800" : ""
          }`}
        >
          <span className="relative">
            about
            {isActive("/") && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"></span>
            )}
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
        </Link>
        
        <Link
          to="/projects"
          className={`text-gray-600 hover:text-gray-800 transition-colors duration-200 relative ${
            isActive("/projects") ? "text-gray-800" : ""
          }`}
        >
          <span className="relative">
            projects
            {isActive("/projects") && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"></span>
            )}
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
        </Link>
        
        <Link
          to="/writing"
          className={`text-gray-600 hover:text-gray-800 transition-colors duration-200 relative ${
            isActive("/writing") ? "text-gray-800" : ""
          }`}
        >
          <span className="relative">
            writing
            {isActive("/writing") && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"></span>
            )}
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
        </Link>
      </div>
    </nav>
  );
} 