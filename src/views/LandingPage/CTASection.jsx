import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Rocket, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background Gradient Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-restro-green/30 to-restro-green-dark/30 rounded-[2.5rem] blur-xl" />
          
          <div className="relative bg-gradient-to-br from-restro-green to-restro-green-dark rounded-[2rem] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm text-white font-medium">
                  Essai gratuit pendant 14 jours
                </span>
              </div>

              {/* Main Content */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
                Prêt à révolutionner la gestion de votre restaurant ?
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Rejoignez des milliers de restaurateurs qui font confiance à RestroPRO pour développer leur activité.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/register" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-restro-green-dark px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-black/20"
                >
                  <Rocket className="w-5 h-5" />
                  Commencer maintenant
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 group"
                >
                  Contactez-nous
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 