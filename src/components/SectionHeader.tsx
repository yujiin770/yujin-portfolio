// src/components/SectionHeader.tsx
import { motion } from 'framer-motion';

interface Props {
  number: string;  // e.g. "01"
  title: string;   // e.g. "Story" or "About Me"
  subtitle?: string; // Optional context
}

export default function SectionHeader({ number, title, subtitle = "SRC_DATA_LOAD" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-12 relative"
    >
      <div className="flex items-center gap-4 mb-2">
        {/* The Badge Number */}
        <span className="bg-brand-dark text-brand-primary px-3 py-1 rounded-sm font-black text-xs">
          [{number}]
        </span>
        {/* Technical Sub-label */}
        <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px]">
          {subtitle}
        </span>
      </div>

      <div className="flex items-end gap-2">
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-none tracking-tighter uppercase italic">
          {title}<span className="text-brand-primary">_</span>
        </h2>
        {/* Design decoration element */}
        <div className="flex-grow h-[2px] bg-gray-100 mb-2 ml-4 hidden md:block" />
      </div>
    </motion.div>
  );
}