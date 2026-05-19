// src/components/SectionHeader.tsx
import { motion } from 'framer-motion';

interface Props {
  number: string;
  title: string;
}

// Ensure "default" is here!
export default function SectionHeader({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs">
        {number}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-brand-dark mt-2 leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}