import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/logo.svg";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Tarifs", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function LNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="RestroPRO" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Nav Links */}
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-restro-green rounded-full transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-restro-green/60 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <Link
                to="/login"
                className="text-gray-700 hover:text-restro-green font-medium transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/register"
                className="bg-restro-green hover:bg-restro-green-dark text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-restro-green/20 active:scale-95"
              >
                Commencez gratuitement
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}>
        <div className="absolute inset-x-0 top-full bg-white border-b border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-restro-green hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-gray-700 hover:text-restro-green font-medium px-4 py-2.5 rounded-xl border border-gray-200 hover:border-restro-green/20 transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center bg-restro-green hover:bg-restro-green-dark text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-restro-green/20"
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
