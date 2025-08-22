import { Truck, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageCarousel } from './ImageCarousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useEffect, useState } from 'react';

export function Hero({ onQuotationClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const heroSlides = [
    {
      id: 'VIP MOBILE TOILETS',
      image: '/images/t1.jpg',
      images: ['/images/t1.jpg', '/images/t4.jpg', '/images/t6.webp'],
      title: 'VIP Mobile Toilets',
      subtitle: 'Complete Event Solutions',
      description: 'Premium VIP mobile toilets with luxury amenities. Clean, hygienic, and comfortable facilities for your special events.',
      ctaText: 'Hire now'
    },
    {
      id: 'TENTS',
      image: '/images/s5.webp',
      images: ['/images/s5.webp', '/images/t4.jpg'],
      title: 'TENTS',
      subtitle: 'Perfect Hospitality Solutions',
      description: 'High-quality tents and marquees for all weather protection. Perfect for weddings, parties, and corporate events.',
      ctaText: 'Hire now'
    },
    {
      id: 'MOBILE FACILITIES',
      image: '/images/t6.webp',
      images: ['/images/t6.webp', '/images/t1.jpg'],
      title: 'Mobile Facilities',
      subtitle: 'Professional Event Services',
      description: 'Complete mobile facility solutions including generators, lighting, and power. Everything you need for successful events.',
      ctaText: 'Hire now'
    },
    {
      id: 'SLAUGHTERING SERVICES',
      image: '/images/sla.jpg',
      images: ['/images/sla.jpg', '/images/t4.jpg'],
      title: 'Slaughtering Services',
      subtitle: 'Professional & Hygienic',
      description: 'Professional mobile slaughtering services that bring expert meat processing to your location. Fully compliant with health standards.',
      ctaText: 'Hire now'
    }
  ];

  return (
    <section className="relative pt-16 sm:pt-20">
      {/* Main Hero Carousel with Info Overlay */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
        <ImageCarousel 
          slides={heroSlides}
          onQuotationClick={onQuotationClick}
          autoPlay={true}
          interval={6000}
          showInfo={true}
        />
        
        {/* Logo Overlay with Animation */}
        <div 
          className={`absolute top-4 sm:top-8 md:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <LazyLoadImage
            src="/images/logo.png"
            alt="Eagles Events Logo"
            className="h-24 sm:h-32 md:h-40 lg:h-40 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
            effect="opacity"
            loading="eager"
            height="auto"
            width="auto"
          />
        </div>
      </div>

      {/* Quick Stats Section with Staggered Animations */}
      <div className="bg-white py-8 sm:py-12 lg:py-16 border-t border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div 
              className={`text-center transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center hover:bg-gold-200 transition-colors duration-300 ease-in-out group">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">500+</h3>
              <p className="text-sm sm:text-base text-gray-600">Events Served</p>
            </div>
            <div 
              className={`text-center transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center hover:bg-gold-200 transition-colors duration-300 ease-in-out group">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">10,000+</h3>
              <p className="text-sm sm:text-base text-gray-600">Happy Customers</p>
            </div>
            <div 
              className={`text-center transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-full flex items-center justify-center hover:bg-gold-200 transition-colors duration-300 ease-in-out group">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">5+</h3>
              <p className="text-sm sm:text-base text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Fade-in Animation */}
      <div className="bg-black py-12 sm:py-16 border-t border-gold-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Make Your Event Unforgettable?
          </h2>
          <p 
            className={`text-lg sm:text-xl text-gold-300 mb-6 sm:mb-8 transition-all duration-1000 ease-out delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Get a personalized Quotation for your event needs. Our team is ready to help you create the perfect experience.
          </p>
          <div 
            className={`transition-all duration-1000 ease-out delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button 
              onClick={onQuotationClick}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-black font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Get Your Free Quotation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
