import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface MiniNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export default function MiniNav({ isOpen, onClose, navItems }: MiniNavProps) {
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  } as const;

  const linkVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.1,
        ease: "easeInOut",
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 w-full h-screen bg-black text-white z-50 flex flex-col p-8"
    >
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold">PC<span className="text-xs ml-2 font-normal opacity-70">007</span></h1>
        <button
          onClick={onClose}
          className="text-sm font-medium hover:text-white/70 transition-colors"
        >
          [ CLOSE ]
        </button>
      </div>

      <nav className="flex flex-col gap-6">
        {navItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            variants={linkVariants}
            initial="initial"
            animate={isOpen ? "enter" : "initial"}
            custom={i}
            onClick={onClose}
            className="text-4xl font-bold hover:text-white/70 transition-colors uppercase"
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-white/10 flex justify-between text-xs opacity-50 uppercase tracking-widest">
        <span>Portfolio 2026</span>
        <span>Built with React + Vite</span>
      </div>
    </motion.div>
  );
}
