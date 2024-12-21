import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldOff, ArrowLeft, LogOut } from 'lucide-react';
import Logo from "../assets/logo.svg";

export default function NoAccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-restro-green/5 to-restro-green-dark/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-restro-green-dark/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <img src={Logo} alt="RestroPRO" className="h-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                <ShieldOff className="w-12 h-12 text-orange-500" />
              </div>
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accès non autorisé
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-md mb-12">
              Vous n'avez pas accès à cette zone. Veuillez vous reconnecter pour vérifier vos autorisations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Retour
              </button>

              <button 
                onClick={() => navigate("/login")}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
              >
                <LogOut className="w-5 h-5" />
                Se reconnecter
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-50">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-2 rounded-full bg-gradient-to-r from-orange-500/20 to-restro-green-dark/20"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
