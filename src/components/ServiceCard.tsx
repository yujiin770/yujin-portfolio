// src/components/ServiceCard.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

// Ensure "default" is here!
export default function ServiceCard({ title, description, icon, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 relative overflow-hidden cursor-default"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="mb-6 inline-flex p-4 bg-brand-bg rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-500 shadow-sm">
         {icon}
      </div>
      
      <h4 className="text-xl font-black text-brand-dark mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
        {description}
      </p>
      
      <div className="flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        Discover Process <ArrowRight size={14} strokeWidth={3} />
      </div>
    </motion.div>
  );
}