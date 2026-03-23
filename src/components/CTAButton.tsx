"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({
  text = "QUERO O TUTOR DFN",
  href = "#precos",
  className,
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{
        background: "#FFFFFF",
        color: "#FF4500",
        boxShadow:
          "0 0 30px rgba(255,255,255,0.6), 0 12px 32px rgba(255,255,255,0.3)",
      }}
      whileTap={{
        scale: 0.97,
        boxShadow:
          "0 0 20px rgba(255,255,255,0.4), 0 4px 16px rgba(255,255,255,0.2)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "cta-shimmer inline-block rounded-full py-3.5 px-8 sm:py-4 sm:px-12 font-bold text-white cursor-pointer uppercase",
        "shadow-[0_8px_24px_rgba(0,180,70,0.4)]",
        className
      )}
      style={{
        background: "linear-gradient(180deg, #00C853, #00B046, #009A3E)",
        fontSize: "16px",
        letterSpacing: "0.05em",
        fontFamily: "var(--font-sans)",
      }}
    >
      {text}
    </motion.a>
  );
}
