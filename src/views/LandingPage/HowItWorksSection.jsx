import React from 'react';
import { 
  UserPlus, 
  LayoutGrid, 
  ClipboardList, 
  BarChart2,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Créez votre compte",
    description: "Inscrivez-vous en quelques minutes et accédez à votre espace personnalisé.",
    image: "https://via.placeholder.com/800x600/f3f4f6/666666?text=Create+Account"
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Configurez votre restaurant",
    description: "Ajoutez votre menu, définissez vos tables et personnalisez vos paramètres.",
    image: "https://via.placeholder.com/800x600/f3f4f6/666666?text=Restaurant+Setup"
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Gérez vos opérations",
    description: "Prenez les commandes, gérez les réservations et suivez les livraisons en temps réel.",
    image: "https://via.placeholder.com/800x600/f3f4f6/666666?text=Manage+Operations"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Optimisez votre activité",
    description: "Analysez vos données et prenez des décisions éclairées pour développer votre business.",
    image: "https://via.placeholder.com/800x600/f3f4f6/666666?text=Optimize+Business"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Comment ça marche
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Démarrez avec RestroPRO en quelques étapes simples
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (only for first 3 items on desktop) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-24 -right-8 w-16">
                  <ArrowRight className="w-6 h-6 text-restro-green/30 group-hover:text-restro-green transition-colors" />
                </div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-restro-green/10 flex items-center justify-center text-restro-green font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-restro-green/10 flex items-center justify-center text-restro-green">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden group-hover:transform group-hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-restro-green/5 to-restro-green-dark/5 group-hover:opacity-0 transition-opacity" />
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
