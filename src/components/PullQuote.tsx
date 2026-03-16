"use client";

import { motion } from "framer-motion";

interface PullQuoteProps {
  children: string;
  centered?: boolean;
  large?: boolean;
}

export default function PullQuote({
  children,
  centered = false,
  large = false,
}: PullQuoteProps) {
  if (centered) {
    return (
      <motion.blockquote
        className="pull-quote my-12 md:my-16 py-8 px-6 md:px-10 bg-pull-bg rounded-lg text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <p
          className={`font-serif italic text-text ${large ? "text-xl md:text-2xl lg:text-[28px]" : "text-lg md:text-xl lg:text-2xl"} leading-relaxed`}
        >
          {children}
        </p>
      </motion.blockquote>
    );
  }

  return (
    <motion.blockquote
      className="pull-quote my-10 md:my-12 pl-6 md:pl-8 border-l-4 border-primary bg-pull-bg py-6 pr-6 md:pr-8 rounded-r-lg"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-serif italic text-text text-lg md:text-xl leading-relaxed">
        {children}
      </p>
    </motion.blockquote>
  );
}
