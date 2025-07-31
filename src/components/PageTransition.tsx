import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -50,
      scale: 1.05
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: [0.4, 0.0, 0.2, 1] as const,
    duration: 0.6
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
