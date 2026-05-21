import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiReact, SiTypescript, SiTailwindcss, SiVuedotjs,
  SiNodedotjs, SiPhp, SiDotnet,
  SiSupabase, SiGraphql, SiMysql
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import {
  SiGit, SiGithub, SiFirebase, SiVite, SiWebpack, SiJest
} from 'react-icons/si';
import { TbApi, TbLock } from 'react-icons/tb';

const techCategories = [
  {
    category: "Frontend",
    icon: <SiReact className="text-3xl" />,
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "#42B883" },
    ]
  },
  {
    category: "Backend",
    icon: <SiNodedotjs className="text-3xl" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "C++", icon: <TbBrandCpp />, color: "#00599C" },
      { name: "VB.NET", icon: <SiDotnet />, color: "#512BD4" },
    ]
  },
  {
    category: "Database",
    icon: <SiMysql className="text-3xl" />,
    skills: [
      { name: "SSMS", icon: <SiMysql />, color: "#CC2927" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    ]
  }
];

const additionalSkills = [
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#181717" },
  { name: "REST APIs", icon: <TbApi />, color: "#009688" },
  { name: "JWT", icon: <TbLock />, color: "#000000" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
  { name: "Jest", icon: <SiJest />, color: "#C21325" }
];

const TechStack = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...additionalSkills, ...additionalSkills, ...additionalSkills];

  return (
    <section id="tech" ref={sectionRef} className="relative py-32 px-6 bg-gradient-to-br from-brand-bg via-white to-brand-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="bg-brand-primary/10 text-brand-primary px-6 py-3 rounded-full text-sm font-black tracking-wider">
              TECH STACK & SKILLS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-brand-dark mb-4"
          >
            My Tech{' '}
            <span className="text-brand-primary relative inline-block">
              Stacks
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-3 bg-brand-primary/20 -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Tools and technologies I use to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                {/* Category Header */}
                <motion.div
                  className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-brand-primary/20"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-brand-primary"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-black text-brand-dark">{category.category}</h3>
                </motion.div>

                {/* Skills Grid - WITH ICONS */}
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      onHoverStart={() => setHoveredCard(skill.name)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="relative cursor-pointer"
                    >
                      <div
                        className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-50 hover:border-brand-primary/20"
                        style={{
                          boxShadow: hoveredCard === skill.name ? `0 0 20px ${skill.color}20` : 'none'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            animate={{
                              rotate: hoveredCard === skill.name ? [0, 10, -10, 0] : 0,
                              scale: hoveredCard === skill.name ? 1.2 : 1
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="font-bold text-brand-dark text-lg">{skill.name}</span>

                          {/* Hover Glow Effect */}
                          {hoveredCard === skill.name && (
                            <motion.div
                              layoutId="glow"
                              className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent rounded-xl -z-10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - INFINITE SCROLL ON MOBILE ONLY WITH ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t-2 border-brand-primary/20"
        >
          <div className="text-center mb-8">
            <span className="text-brand-primary font-black text-sm uppercase tracking-wider">✨ Always Learning ✨</span>
          </div>

          {/* Mobile: Infinite Scroll Marquee */}
          <div className="block md:hidden overflow-hidden relative">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex whitespace-nowrap gap-4"
            >
              {duplicatedSkills.map((skill, i) => (
                <span
                  key={`${skill.name}-${i}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-sm font-bold text-brand-dark whitespace-nowrap"
                >
                  <span className="text-xl" style={{ color: skill.color }}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Desktop: Normal Flex Wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#E4A101", color: "#1D2B1D" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-sm font-bold text-brand-dark transition-all duration-300 cursor-pointer"
              >
                <span className="text-xl" style={{ color: skill.color }}>{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;