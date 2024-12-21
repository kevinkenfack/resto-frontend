import React from 'react';
import { 
  ShoppingCart, 
  CalendarCheck, 
  BarChart2, 
  Users, 
  Smartphone,
  Clock,
  Receipt,
  Wallet
} from 'lucide-react';

const features = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Gestion des Commandes",
    description: "Gérez facilement les commandes sur place et en ligne. Interface intuitive pour une prise de commande rapide et précise.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/10"
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Réservations & Tables",
    description: "Système complet de gestion des réservations et des tables. Optimisez l'occupation de votre restaurant.",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-500",
    borderColor: "border-green-500/10"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Analyse & Métriques",
    description: "Suivez vos performances avec des tableaux de bord détaillés. Prenez des décisions basées sur des données réelles.",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/10"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Gestion des Clients",
    description: "Fidélisez votre clientèle avec un système de gestion complet. Historique, préférences et programme de fidélité.",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/10"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Interface Adaptative",
    description: "Application web progressive (PWA) accessible sur tous les appareils. Une expérience fluide sur mobile, tablette et desktop.",
    color: "from-pink-500/10 to-pink-600/10",
    iconColor: "text-pink-500",
    borderColor: "border-pink-500/10"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Service en Temps Réel",
    description: "Synchronisation instantanée entre la salle et la cuisine. Notifications en temps réel pour une meilleure coordination.",
    color: "from-yellow-500/10 to-yellow-600/10",
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-500/10"
  }
];

const FeaturesSection = () => {
  return (
    <section className="pt-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Toutes les fonctionnalités
            </span>
            <br />
            dont vous avez besoin
          </h2>
          <p className="text-gray-600 text-lg">
            Une suite complète d'outils pour optimiser la gestion de votre établissement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Feature Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${feature.color} ${feature.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
