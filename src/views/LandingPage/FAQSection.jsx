import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronDown,
  MessageSquare
} from 'lucide-react';

const faqs = [
  {
    question: "Comment configurer RestroPRO pour mon restaurant ?",
    answer: "La configuration est simple et guidée. Créez votre compte, ajoutez votre menu et vos tables, personnalisez les paramètres selon vos besoins. Notre équipe peut vous accompagner dans ce processus."
  },
  {
    question: "Sur quels appareils puis-je utiliser RestroPRO ?",
    answer: "RestroPRO est accessible sur tous les appareils modernes : ordinateurs, tablettes, smartphones. Notre application PWA s'adapte automatiquement à la taille de votre écran."
  },
  {
    question: "Comment fonctionne le support client ?",
    answer: "Notre équipe support est disponible 24/7 par chat, email et téléphone. Nous garantissons une réponse sous 2 heures maximum."
  },
  {
    question: "Les mises à jour sont-elles gratuites ?",
    answer: "Oui, toutes les mises à jour sont automatiques et gratuites. Nous déployons régulièrement de nouvelles fonctionnalités et améliorations."
  },
  {
    question: "Proposez-vous une formation pour mon équipe ?",
    answer: "Oui, nous proposons des sessions de formation gratuites pour vous et votre équipe, en ligne ou sur site selon vos besoins."
  },
  {
    question: "Puis-je tester RestroPRO avant de m'engager ?",
    answer: "Absolument ! Nous offrons une période d'essai gratuite de 14 jours avec toutes les fonctionnalités, sans engagement et sans carte bancaire."
  }
];

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Questions fréquentes
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Tout ce que vous devez savoir sur RestroPRO
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left p-6 rounded-2xl border border-restro-green/20 bg-white hover:border-restro-green/40 transition-all duration-300 ${
                  openQuestion === index ? 'shadow-lg ring-2 ring-restro-green/20' : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium text-lg ${
                    openQuestion === index ? 'text-restro-green' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-restro-green transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'mt-4 max-h-96' : 'max-h-0'
                }`}>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse que vous cherchez ?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-restro-green-dark border-2 border-restro-green/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
          >
            <MessageSquare className="w-5 h-5" />
            Contactez-nous
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
