import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import loadingAnimation from "~/assets/loadingAnimation.mp4"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

type LoadWithVideoProps = {
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement | null >;
};

export function Load({ videoSrc, videoRef }: LoadWithVideoProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[color:var(--background)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="flex flex-col items-center"
      >
        {/* Logo/Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-lg bg-[color:var(--badge-bg)] border-2 border-[color:var(--accent)] flex items-center justify-center">
            <span className="text-[color:var(--accent)] font-mono font-bold text-3xl">DA</span>
          </div>
        </motion.div>

        {/* Loading indicator */}
        <div className="flex space-x-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 rounded-full bg-[color:var(--accent)]"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
            className="w-2 h-2 rounded-full bg-[color:var(--accent)]"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 rounded-full bg-[color:var(--accent)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Loading({ 
  OGComponent, 
  videoSrc = loadingAnimation 
}: { 
  OGComponent: React.ComponentType<any>, 
  videoSrc?: string; 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoading(true);

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Load videoSrc={videoSrc} videoRef={videoRef} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full h-full"
          >
            <OGComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

