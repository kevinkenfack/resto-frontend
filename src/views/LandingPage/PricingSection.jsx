import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Check,
  ShoppingCart,
  Users,
  BarChart2,
  Bell,
  Smartphone,
  Clock,
  Crown
} from 'lucide-react';

const features = [
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "Gestion des commandes illimitées",
    description: "Prenez autant de commandes que vous le souhaitez"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Multi-utilisateurs",
    description: "Accès pour tout votre personnel"
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Analyses détaillées",
    description: "Suivez vos performances en temps réel"
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Notifications en temps réel",
    description: "Restez informé de toutes les activités"
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Application PWA",
    description: "Accessible sur tous les appareils"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Support 24/7",
    description: "Une équipe à votre écoute"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Un tarif unique, tout inclus
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Accédez à toutes les fonctionnalités sans restriction
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Background Gradient Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-restro-green/30 to-restro-green-dark/30 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Price Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-restro-green/10 mb-4">
                  <Crown className="w-10 h-10 text-restro-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Premium</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-restro-green">29.99€</span>
                  <span className="text-gray-500">/mois</span>
                </div>
                <p className="text-gray-600 mt-2">Facturation mensuelle, sans engagement</p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-restro-green/10 flex items-center justify-center text-restro-green">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link 
                  to="/register" 
                  className="inline-flex items-center gap-2 bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20 w-full justify-center"
                >
                  Commencer maintenant
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  Essai gratuit de 14 jours, sans carte bancaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
