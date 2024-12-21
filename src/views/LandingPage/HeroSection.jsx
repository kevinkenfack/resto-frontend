import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LayoutDashboard } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="group">
        <div className="bg-gradient-to-br from-restro-green/10 to-restro-green-dark/10 rounded-b-3xl backdrop-blur-sm border border-restro-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-40 pb-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-8 shadow-lg">
                <LayoutDashboard className="w-5 h-5 text-restro-green" />
                <span className="text-sm text-restro-green font-medium">
                  Solution POS Tout-en-Un
                </span>
              </div>
              
              {/* Main Title - Correction de la couleur pour mobile */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-restro-green-dark !leading-tight">
                Simplifiez la gestion de votre restaurant avec RestroPRO !
              </h1>
              
              {/* Description */}
              <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                Un logiciel POS (Point of Sale) tout-en-un qui optimise vos opérations quotidiennes, 
                motive votre équipe, et améliore l'expérience client.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                <Link 
                  to="/register" 
                  className="bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20"
                >
                  Commencez gratuitement
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/demo" 
                  className="bg-white hover:bg-gray-50 text-restro-green-dark border-2 border-restro-green/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group shadow-xl hover:shadow-2xl"
                >
                  Voir une démo
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Main Image avec ombre améliorée */}
              <div className="relative max-w-6xl mx-auto -mb-32">
                {/* Nouvelle approche pour l'ombre */}
                <div className="absolute -inset-4">
                  <div className="w-full h-full bg-gradient-to-r from-restro-green/20 via-restro-green-dark/20 to-restro-green/20 rounded-2xl blur-2xl transform scale-105" />
                </div>
                
                {/* Container pour l'image avec effet de profondeur */}
                <div className="relative bg-white rounded-2xl p-2 shadow-lg">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-restro-green/5 to-transparent" />
                    <img 
                      src="/assets/hero.webp"
                      alt="RestroPRO Interface" 
                      className="w-full relative rounded-xl transform hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
