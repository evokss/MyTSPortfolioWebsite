// Seeded random number generator
export const mulberry32 = (a) => {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// Utility function to generate consistent stars
export const generateStars = (count, seed = 42) => {
  const random = mulberry32(seed);

  return Array.from({ length: count }, (_, index) => {
    const size = Math.floor(random() * 2) + 1; // 1-2px
    const left = Math.floor(random() * 100);
    const top = Math.floor(random() * 100);
    const animationDelay = Math.floor(random() * 5);

    return {
      id: index,
      size,
      left,
      top,
      animationDelay,
    };
  });
};
