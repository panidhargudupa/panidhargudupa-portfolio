import { motion } from "framer-motion";

const BackgroundFX = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Base noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.4]" />

      {/* Primary floating orb - top left */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-16 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(198, 80%, 55%, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary orb - top right */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-24 h-[450px] w-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(220, 60%, 50%, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Accent orb - mid section */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
          opacity: [0.6, 1, 0.7, 0.6],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[15%] h-[380px] w-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(196, 70%, 50%, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Deep accent - bottom right */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[10%] h-[420px] w-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(200, 75%, 50%, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Bottom gradient fade */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[25%] h-[350px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(210, 60%, 45%, 0.04) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Vertical gradient lines — subtle section separators */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background/60 to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
};

export default BackgroundFX;
