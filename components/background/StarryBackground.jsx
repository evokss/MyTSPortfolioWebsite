import React, { useMemo } from "react";
import { generateStars } from "./utils";

export default function StarryBackground({ children, starCount = 100 }) {
  // Use useMemo to ensure consistent star generation
  const stars = useMemo(() => generateStars(starCount), [starCount]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-900 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white dark:bg-gray-300 rounded-full opacity-70 animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
}
