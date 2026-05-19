// src/components/StatItem.tsx
interface Props {
  label: string;
  value: string;
}

// Ensure "default" is here!
export default function StatItem({ label, value }: Props) {
  return (
    <div className="border-l-2 border-brand-primary/20 pl-6 py-2">
      <div className="text-3xl md:text-4xl font-black text-brand-dark leading-none">
        {value}
      </div>
      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}