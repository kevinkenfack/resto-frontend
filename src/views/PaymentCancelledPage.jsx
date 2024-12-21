import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, XCircle, Home } from 'lucide-react';
import Logo from "../assets/logo.svg";

export default function PaymentCancelledPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-restro-green/5 to-restro-green-dark/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
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
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-12 h-12 text-red-500" />
              </div>
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paiement annulé
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-md mb-12">
              Le paiement a été annulé ou a échoué. Vous pouvez réessayer à tout moment depuis votre profil.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={() => navigate("/dashboard/profile")}
                className="inline-flex items-center gap-2 bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour au profil
              </button>

              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-restro-green-dark border-2 border-restro-green/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
              >
                <Home className="w-5 h-5" />
                Page d'accueil
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-50">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-2 rounded-full bg-gradient-to-r from-red-500/20 to-restro-green-dark/20"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
