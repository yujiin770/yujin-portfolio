export default function Navbar() {
  return (
    <nav className="fixed top-4 sm:top-8 left-0 w-full flex justify-center z-[100] px-4">
      <div className="w-full max-w-5xl bg-brand-dark/95 backdrop-blur-md rounded-full px-3 py-2 sm:px-6 flex justify-between items-center shadow-2xl">
        
        {/* Logo - Stays on the left */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark font-black text-sm sm:text-lg">
            Y
          </div>
        </div>
        
        {/* Navigation - Always visible horizontal menu (No burger) */}
        <div className="flex gap-4 sm:gap-10">
          {['Home', 'About', 'Work'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-400 hover:text-brand-primary text-[10px] sm:text-sm font-bold transition-all uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button - Simplified on mobile */}
        <button className="bg-brand-primary text-brand-dark px-3 py-1.5 sm:px-8 sm:py-3 rounded-full text-[10px] sm:text-sm font-black transition-all">
          <span className="hidden sm:inline">Contact Me</span>
          <span className="sm:hidden">Hire</span>
        </button>
      </div>
    </nav>
  );
}