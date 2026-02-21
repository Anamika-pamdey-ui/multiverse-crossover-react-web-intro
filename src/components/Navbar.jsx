import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest cursor-pointer">
          G<b>A</b>MING
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-yellow-300 transition duration-300">
            Home
          </a>
          <a href="#story" className="hover:text-yellow-300 transition duration-300">
            Story
          </a>
          <a href="#projects" className="hover:text-yellow-300 transition duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition duration-300">
          Play Now
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl cursor-pointer">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center gap-6 py-6 uppercase tracking-wide text-sm">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#story" onClick={() => setIsOpen(false)}>Story</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold">
            Play Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;