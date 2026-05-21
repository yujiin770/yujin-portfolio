// src/sections/About.tsx
import { motion } from 'framer-motion';
import { Layout, AppWindow, Palette } from 'lucide-react';

// REMOVE the .tsx at the end of these lines
import SectionHeader from '../components/SectionHeader';
import StatItem from '../components/StatItem';
import ServiceCard from '../components/ServiceCard';

const SERVICES = [
  {
    title: 'Front-End Development',
    desc: 'Intuitive and responsive user interfaces built with modern frameworks and pixel-perfect precision.',
    icon: <Layout size={28} />,
  },
  {
    title: 'Application Development',
    desc: 'Custom VB.NET desktop programs and automated systems designed for seamless performance.',
    icon: <AppWindow size={28} />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean, user-centric interfaces focusing on visual storytelling and exceptional accessibility.',
    icon: <Palette size={28} />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-brand-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-6 xl:col-span-7">
            <SectionHeader
              number="01 // Story"
              title="A developer fueled by curiosity and three years of craft."
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium"
            >
              <p>
                As a freelance developer and a third-year BSIT student, I bridge the gap between
                <span className="text-brand-dark font-bold"> academic theory</span> and
                <span className="text-brand-dark font-bold underline decoration-brand-primary decoration-4 underline-offset-4"> hands-on experience</span>.
              </p>
              <p>
                I believe that technology should be practical and human-centered. Whether it’s building a robust
                database system or a sleek web interface, my goal is always to create solutions that solve real-world problems
                with elegance.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-10">
                <StatItem label="Projects Done" value="10+" />
                <StatItem label="Exp. Years" value="3+" />
                <StatItem label="Success Rate" value="100%" />
              </div>

              <div className="pt-8">
                <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-brand-dark/10">
                  Check My CV
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={i}
                index={i}
                title={service.title}
                description={service.desc}
                icon={service.icon}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About; 