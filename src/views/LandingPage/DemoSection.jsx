import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const mockups = [
  {
    title: "Interface POS",
    description: "Prenez les commandes rapidement et efficacement",
    image: "https://via.placeholder.com/1200x800/f3f4f6/666666?text=POS+Interface"
  },
  {
    title: "Gestion des Tables",
    description: "Visualisez l'état de vos tables en temps réel",
    image: "https://via.placeholder.com/1200x800/f3f4f6/666666?text=Table+Management"
  },
  {
    title: "Dashboard Analytics",
    description: "Suivez vos performances en un coup d'œil",
    image: "https://via.placeholder.com/1200x800/f3f4f6/666666?text=Analytics+Dashboard"
  },
  {
    title: "Gestion des Commandes",
    description: "Gérez facilement les commandes et les livraisons",
    image: "https://via.placeholder.com/1200x800/f3f4f6/666666?text=Order+Management"
  }
];

const DemoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockups.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-restro-green-dark via-restro-green to-restro-green-dark bg-clip-text text-transparent">
              Découvrez RestroPRO en action
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Une interface intuitive pour une gestion efficace
          </p>
        </div>

        {/* Demo Video */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl border border-restro-green/10">
          <div className="aspect-w-16 aspect-h-9">
            {/* Remplacer par la vraie vidéo plus tard */}
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <Play className="w-16 h-16 text-restro-green opacity-50" />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-restro-green/10">
            <div className="absolute inset-0 bg-gradient-to-r from-restro-green/5 to-restro-green-dark/5" />
            <img 
              src={mockups[currentSlide].image}
              alt={mockups[currentSlide].title}
              className="w-full h-auto"
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                {mockups[currentSlide].title}
              </h3>
              <p className="text-white/80">
                {mockups[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <button 
              onClick={prevSlide}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Play/Pause */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {mockups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-restro-green w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/register" 
            className="inline-flex items-center gap-2 bg-restro-green hover:bg-restro-green-dark text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-restro-green/20"
          >
            Essayez gratuitement dès aujourd'hui
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
