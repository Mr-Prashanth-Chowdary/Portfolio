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
      className="absolute top-0 left-0 px-4 w-full h-screen bg-black text-white z-1 flex justify-center flex-col"
    >
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
      <div className="absolute bottom-4 text-nano opacity-50">CREATED BY PRASHANTH CHOWDARY</div>
    </motion.div>
  );
}
