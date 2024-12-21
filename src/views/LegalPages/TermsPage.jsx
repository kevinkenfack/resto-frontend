import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from "../../assets/logo.svg";
import Footer from '../LandingPage/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="RestroPRO" className="h-10" />
          </Link>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-restro-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
        
        <article className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </p>

          <h2>1. Introduction</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation régissent l'utilisation de RestroPRO, une solution de gestion pour restaurants.
          </p>

          {/* ... reste du contenu ... */}
        </article>
      </main>

      <Footer />
    </div>
  );
} 