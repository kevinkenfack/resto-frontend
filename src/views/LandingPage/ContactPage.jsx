import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  HelpCircle,
  AlertCircle,
  Settings,
  CreditCard
} from 'lucide-react';
import Logo from "../../assets/logo.svg";
import Footer from './Footer';

const subjects = [
  {
    id: 'general',
    icon: <MessageSquare className="w-5 h-5" />,
    label: 'Question générale',
    description: 'Renseignements sur nos services'
  },
  {
    id: 'support',
    icon: <HelpCircle className="w-5 h-5" />,
    label: 'Support technique',
    description: 'Aide avec l\'utilisation de RestroPRO'
  },
  {
    id: 'bug',
    icon: <AlertCircle className="w-5 h-5" />,
    label: 'Signaler un problème',
    description: 'Un bug ou une anomalie'
  },
  {
    id: 'feature',
    icon: <Settings className="w-5 h-5" />,
    label: 'Suggestion',
    description: 'Proposer une nouvelle fonctionnalité'
  },
  {
    id: 'billing',
    icon: <CreditCard className="w-5 h-5" />,
    label: 'Facturation',
    description: 'Questions sur votre abonnement'
  }
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'contact@restropro.com',
    link: 'mailto:contact@restropro.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Téléphone',
    value: '+33 1 23 45 67 89',
    link: 'tel:+33123456789'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Adresse',
    value: '123 Avenue des Restaurants, 75001 Paris',
    link: 'https://maps.google.com'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Horaires',
    value: 'Lun-Ven: 9h-18h',
    description: 'Support 24/7 pour les clients Premium'
  }
];

const ContactPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, subject: selectedSubject });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
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

      <main className="flex-1 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Une question ? Un besoin spécifique ? Notre équipe est là pour vous aider.
            </p>
          </div>

          {/* Contact Form - Sans box et sans ombre */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Subject Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-4">
                Sujet de votre message
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSubject === subject.id
                        ? 'border-restro-green bg-restro-green/5 ring-2 ring-restro-green/20'
                        : 'border-gray-200 hover:border-restro-green/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${
                        selectedSubject === subject.id ? 'text-restro-green' : 'text-gray-400'
                      }`}>
                        {subject.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{subject.label}</div>
                        <div className="text-sm text-gray-500">{subject.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-restro-green/20 focus:border-restro-green transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Envoyer le message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage; 