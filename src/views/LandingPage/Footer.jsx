import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle2,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import Logo from "../../assets/logo.svg";

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Comment ça marche", href: "#how-it-works" },
  { name: "Tarifs", href: "#pricing" },
  { name: "FAQ", href: "#faq" }
];

const legalLinks = [
  { name: "Conditions générales", href: "/terms" },
  { name: "Politique de confidentialité", href: "/privacy" },
  { name: "Mentions légales", href: "/terms#legal" },
  { name: "Politique de cookies", href: "/privacy#cookies" }
];

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/restropro" },
  { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/restropro" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/restropro" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/restropro" }
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, text: "contact@restropro.com" },
  { icon: <Phone className="w-5 h-5" />, text: "+33 1 23 45 67 89" },
  { icon: <MapPin className="w-5 h-5" />, text: "Paris, France" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Effet de lumière */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Lumière verte principale */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-restro-green/20 rounded-full blur-[100px] transform -translate-y-1/2 translate-x-1/2" />
        
        {/* Lumière verte foncée */}
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-restro-green-dark/20 rounded-full blur-[100px] transform translate-y-1/2 -translate-x-1/2" />
        
        {/* Lumière centrale */}
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-restro-green-light/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Overlay plus léger */}
        <div className="absolute inset-0 bg-gray-900/40" />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Logo en blanc */}
            <img src={Logo} alt="RestroPRO Logo" className="h-12 brightness-0 invert" />
            <p className="text-sm text-gray-400">
              RestroPRO - Simplifiez la gestion de votre restaurant. Une solution complète pour optimiser vos opérations quotidiennes.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Informations légales</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Status */}
          <div>
            <h3 className="text-white font-semibold mb-6">Suivez-nous</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm text-gray-400">
                Tous les services sont opérationnels
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} RestroPRO. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Développé avec ❤️ par</span>
              <a 
                href="https://uiflow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-restro-green hover:text-restro-green-dark font-medium"
              >
                Kevin Kenfack
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

