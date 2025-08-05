// src/components/AIFFLogo.tsx
import React from "react";

const AIFFLogo = () => {
  return (
    <div className="flex items-stretch gap-1 font-poppins uppercase tracking-wider text-white dark:text-white">
      
      {/* Left Side: AI / FF */}
      <div className="text-right leading-none flex flex-col justify-between">
        <span className="text-white text-[1.25rem] sm:text-[1.4rem] md:text-[1.6rem] font-semibold">AI</span>
        <span className="text-white text-[1.25rem] sm:text-[1.4rem] md:text-[1.6rem] font-semibold">FF</span>
      </div>

      {/* Divider Line */}
      <div className="w-px mx-2 bg-white dark:bg-white opacity-40" />

      {/* Right Side: 20 / 25 */}
      <div className="text-left leading-none flex flex-col justify-between">
        <span className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.6rem] font-semibold text-green-500">20</span>
        <span className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.6rem] font-semibold text-yellow-400">25</span>
      </div>
    </div>
  )
}

export default AIFFLogo
