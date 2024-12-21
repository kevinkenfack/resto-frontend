import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from "../../assets/logo.svg";
import Footer from '../LandingPage/Footer';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2>1. Collecte des données</h2>
          <p>
            Nous collectons les informations suivantes...
          </p>

          <h2>2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées pour...
          </p>

          <h2>3. Protection des données</h2>
          <p>
            Nous mettons en œuvre les mesures suivantes pour protéger vos données...
          </p>

          {/* Ajoutez d'autres sections selon vos besoins */}
        </div>
      </main>

      <Footer />
    </div>
  );
} 