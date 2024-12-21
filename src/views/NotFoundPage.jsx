import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MoveLeft } from 'lucide-react';
import Logo from "../assets/logo.svg";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-restro-green/5 to-restro-green-dark/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-restro-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-restro-green-dark/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/">
            <img src={Logo} alt="RestroPRO" className="h-10" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            {/* 404 Number */}
            <div className="relative">
              <div className="text-[150px] md:text-[200px] font-black text-restro-green/10">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">
                  Page introuvable
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-600 max-w-2xl">
              Désolé, la page que vous recherchez semble avoir disparu ou n'existe pas. 
              Pas de panique ! Vous pouvez retourner à l'accueil ou revenir à la page précédente.
            </p>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20"
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-restro-green-dark border-2 border-restro-green/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
              >
                <MoveLeft className="w-5 h-5" />
                Page précédente
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-50">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-2 rounded-full bg-gradient-to-r from-restro-green/20 to-restro-green-dark/20"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage; 