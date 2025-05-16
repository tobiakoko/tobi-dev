import React from "react";
import { useState } from "react";

/**
 * Tooltip - A component to display additional information on hover
 * @param {Object} props
 * @param {string | React.ReactNode} props.children - The text or element to display
 * @param {string | React.ReactNode} props.content - The tooltip content to show on hover
 * @param {string} [props.className] - Optional additional classes for the trigger element
 * @param {string} [props.position="top"] - Position of tooltip: "top", "bottom", "left", "right"
 */

interface TooltipProps {
    children: string | React.ReactNode;
    content: string | React.ReactNode;
    className? : string;
    position: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({ 
    children, 
    content,
    className = "",
    position = "top" 
  }: TooltipProps ) {
    const [isVisible, setIsVisible] = useState(false);
    
    // Determine positioning classes based on the position prop
    const positionClasses = {
      "top": "bottom-full left-1/2 -translate-x-1/2 mb-1",
      "bottom": "top-full left-1/2 -translate-x-1/2 mt-1",
      "left": "right-full top-1/2 -translate-y-1/2 mr-1",
      "right": "left-full top-1/2 -translate-y-1/2 ml-1"
    };
  
    return (
      <span className="relative inline-block">
        <span 
          className={`inline-block tip ${className}`}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
        >
          {children}
        </span>
        
        {isVisible && (
          <div className={`absolute inline-block z-50 py-3 px-2 bg-[rgb(245, 245, 253)] [box-shadow:inset_0_0_12px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] bg-white font-light font-futura text-sm rounded-lg shadow-md w-144 md:max-w-2xl lg:max-w-3xl
            ${positionClasses[position] || positionClasses.top}`}>
            {content}
          </div>
        )}
      </span>
    );
  }