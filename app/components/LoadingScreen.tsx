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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1, y: "-100%" }}  // Start from above the viewport
      animate={{ opacity: 1, y: 0 }}        // Animate to center
      exit={{ opacity: 1, y: "-100%" }}     // Exit back to above
      transition={{ 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          exit: { delay: 0.5 }
        }}
        className="w-64 h-64 md:w-96 md:h-96 relative"
      >
        {/* Video element for the animation */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
    }, 2500);
    
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

