import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, StarHalf } from 'lucide-react';

const testimonials = [
  {
    name: "Thomas Martin",
    role: "Propriétaire",
    business: "Le Bistrot Parisien",
    image: "https://via.placeholder.com/150/f3f4f6/666666?text=TM",
    businessImage: "https://via.placeholder.com/400x300/f3f4f6/666666?text=Restaurant+1",
    quote: "RestroPRO a révolutionné la gestion de mon restaurant. La prise de commandes est plus rapide, et le suivi des stocks est devenu un jeu d'enfant.",
    rating: 5
  },
  {
    name: "Sophie Dubois",
    role: "Directrice",
    business: "Café des Arts",
    image: "https://via.placeholder.com/150/f3f4f6/666666?text=SD",
    businessImage: "https://via.placeholder.com/400x300/f3f4f6/666666?text=Restaurant+2",
    quote: "L'interface est intuitive et nos serveurs l'ont adoptée immédiatement. Le support client est également excellent.",
    rating: 4.5
  },
  {
    name: "Marc Lambert",
    role: "Chef & Propriétaire",
    business: "La Table Gourmande",
    image: "https://via.placeholder.com/150/f3f4f6/666666?text=ML",
    businessImage: "https://via.placeholder.com/400x300/f3f4f6/666666?text=Restaurant+3",
    quote: "Depuis que nous utilisons RestroPRO, notre chiffre d'affaires a augmenté de 25%. Les analyses nous permettent d'optimiser notre carte.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Ce que nos utilisateurs disent
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez pourquoi les restaurateurs font confiance à RestroPRO
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Restaurant Image */}
              <div className="relative rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-restro-green/5 to-restro-green-dark/5 group-hover:opacity-0 transition-opacity" />
                <img 
                  src={testimonial.businessImage}
                  alt={testimonial.business}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} - {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/register" 
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-restro-green-dark border-2 border-restro-green/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
          >
            Rejoignez nos clients satisfaits
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
