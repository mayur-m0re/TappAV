import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Hero Section
function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="section-pinned relative flex items-center justify-center">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero_projected_light.jpg`}
          alt="Cinematic projection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tappav-bg/60 via-transparent to-tappav-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Headline */}
        <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="headline-1 text-tappav-text mb-2">
            THE NEXT ERA
          </h1>
          <h1 className="headline-1 text-tappav-text">
            OF SIGHT AND SOUND
          </h1>
        </div>

        {/* Microcopy */}
        <p className={`mt-8 text-tappav-text-muted text-lg max-w-xl mx-auto transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Premium projectors, monitors, and pro audio—curated for creators and cinephiles.
        </p>

        {/* CTA */}
        <div className={`mt-6 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={() => onNavigate('product')}
            className="link-underline text-tappav-text font-medium inline-flex items-center gap-2"
          >
            Explore the lineup
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Cards */}
      <div className="absolute bottom-[8vh] left-0 right-0 px-[7vw]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-[3vw]">
          {/* Home Theater Card */}
          <div
            className={`flex-1 card-premium relative overflow-hidden group cursor-pointer transition-all duration-700 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18vh]'}`}
            style={{ height: 'clamp(160px, 26vh, 280px)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/hero_card_home_theater.jpg`}
              alt="Home Theater"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tappav-bg/90 via-tappav-bg/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="micro-label text-tappav-accent mb-2 block">CATEGORY</span>
              <h3 className="headline-3 text-tappav-text">HOME THEATER</h3>
            </div>
          </div>

          {/* Pro Audio Card */}
          <div
            className={`flex-1 card-premium relative overflow-hidden group cursor-pointer transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18vh]'}`}
            style={{ height: 'clamp(160px, 26vh, 280px)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/hero_card_pro_audio.jpg`}
              alt="Pro Audio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tappav-bg/90 via-tappav-bg/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="micro-label text-tappav-accent mb-2 block">CATEGORY</span>
              <h3 className="headline-3 text-tappav-text">PRO AUDIO</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Product Section
function FeaturedSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned relative flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/featured_showroom.jpg`}
          alt="Projector showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tappav-bg/70" />
      </div>

      {/* Product Card */}
      <div
        className={`relative z-10 w-[80vw] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[20vh] scale-95'}`}
      >
        <div className="card-premium relative overflow-hidden" style={{ height: 'clamp(300px, 48vh, 500px)' }}>
          <img
            src={`${import.meta.env.BASE_URL}images/featured_projector_product.jpg`}
            alt="4K Laser Projector"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tappav-bg/95 via-tappav-bg/60 to-transparent" />

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className={`micro-label text-tappav-accent mb-3 block transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              FEATURED PRODUCT
            </span>
            <h2 className={`headline-2 text-tappav-text mb-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              4K LASER PROJECTOR
            </h2>
            <p className={`text-tappav-text-muted mb-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              HDR10+ · 3,000 lm · 120 Hz
            </p>
            <div className={`flex items-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-2xl font-bold text-tappav-text">$2,499</span>
              <button
                onClick={() => onNavigate('product')}
                className="btn-accent inline-flex items-center gap-2"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Microcopy */}
        <p className={`text-center text-tappav-text-muted text-sm mt-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Free shipping. 30-day returns.
        </p>
      </div>
    </section>
  );
}

// Product Grid Section
function ProductGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    { name: '4K Laser Projector', spec: 'HDR10+ · 3,000 lm', price: '$2,499', image: `${import.meta.env.BASE_URL}images/grid_projector_thumb.jpg` },
    { name: 'Wireless Headphones', spec: 'ANC · 40 hr battery', price: '$349', image: `${import.meta.env.BASE_URL}images/grid_headphones_thumb.jpg` },
    { name: 'Studio Monitor 32"', spec: '4K · 99% Adobe RGB', price: '$1,199', image: `${import.meta.env.BASE_URL}images/grid_monitor_thumb.jpg` },
    { name: 'Pro Soundbar', spec: 'Dolby Atmos · HDMI eARC', price: '$599', image: `${import.meta.env.BASE_URL}images/grid_soundbar_thumb.jpg` },
    { name: 'Smart Streaming Box', spec: 'Wi-Fi 6 · Voice remote', price: '$129', image: `${import.meta.env.BASE_URL}images/grid_streamer_thumb.jpg` },
    { name: 'Ceiling Mount Kit', spec: 'Universal · Tool-free', price: '$89', image: `${import.meta.env.BASE_URL}images/grid_mount_thumb.jpg` },
  ];

  return (
    <section ref={sectionRef} className="section-flowing py-24 px-[6vw] bg-tappav-bg">
      {/* Header */}
      <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="headline-2 text-tappav-text mb-4">SHOP THE LINEUP</h2>
        <p className="text-tappav-text-muted text-lg max-w-xl">
          Projectors, monitors, and pro audio—built for performance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`card-premium-sm bg-tappav-bg-secondary card-hover-lift cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden img-hover-zoom">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-tappav-text mb-1">{product.name}</h3>
              <p className="text-tappav-text-muted text-sm mb-4">{product.spec}</p>
              <div className="flex items-center justify-between">
                <span className="text-tappav-accent font-bold">{product.price}</span>
                <button className="link-underline text-tappav-text text-sm font-medium">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Feature Highlight Section
function FeatureSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned relative flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/feature_color_control_room.jpg`}
          alt="Color control room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tappav-bg/60" />
      </div>

      {/* Feature Card */}
      <div
        className={`relative z-10 w-[88vw] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20vw]'}`}
      >
        <div className="card-premium relative overflow-hidden" style={{ height: 'clamp(320px, 52vh, 540px)' }}>
          <img
            src={`${import.meta.env.BASE_URL}images/feature_color_display.jpg`}
            alt="Cinema-grade color display"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tappav-bg/95 via-tappav-bg/50 to-transparent" />

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
            <h2 className={`headline-2 text-tappav-text mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              CINEMA-GRADE COLOR
            </h2>
            <p className={`text-tappav-text-muted text-lg mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              A wide color gamut, calibrated gamma, and laser stability—so every frame feels intentional.
            </p>
            <button
              onClick={() => onNavigate('product')}
              className={`link-underline text-tappav-text font-medium inline-flex items-center gap-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              See the tech
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Category Showcase Section
function CategorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned relative flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-tappav-bg">
        <div className="absolute inset-0 opacity-30">
          <img
            src={`${import.meta.env.BASE_URL}images/closing_abstract_texture.jpg`}
            alt="Abstract texture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Category Cards */}
      <div className="relative z-10 w-full px-[7vw]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[3vw]">
          {/* Home Theater Card */}
          <div
            className={`flex-1 card-premium relative overflow-hidden group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[20vw]'}`}
            style={{ height: 'clamp(400px, 64vh, 600px)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/category_home_theater_living_room.jpg`}
              alt="Home Theater"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tappav-bg/95 via-tappav-bg/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="micro-label text-tappav-accent mb-2 block">CATEGORY</span>
              <h3 className="headline-3 text-tappav-text mb-2">HOME THEATER</h3>
              <p className="text-tappav-text-muted">Projectors · Screens · Mounts</p>
            </div>
          </div>

          {/* Pro Audio Card */}
          <div
            className={`flex-1 card-premium relative overflow-hidden group cursor-pointer transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20vw]'}`}
            style={{ height: 'clamp(400px, 64vh, 600px)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/category_pro_audio_studio.jpg`}
              alt="Pro Audio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tappav-bg/95 via-tappav-bg/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="micro-label text-tappav-accent mb-2 block">CATEGORY</span>
              <h3 className="headline-3 text-tappav-text mb-2">PRO AUDIO</h3>
              <p className="text-tappav-text-muted">Monitors · Headphones · Soundbars</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button className="link-underline text-tappav-text font-medium inline-flex items-center gap-2">
            Browse all categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Brand Promise Section
function PromiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned relative flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/installation_scene.jpg`}
          alt="Installation scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tappav-bg/70" />
      </div>

      {/* Promise Card */}
      <div
        className={`relative z-10 w-[80vw] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20vh]'}`}
      >
        <div className="card-premium relative overflow-hidden" style={{ height: 'clamp(300px, 48vh, 500px)' }}>
          <img
            src={`${import.meta.env.BASE_URL}images/installation_scene.jpg`}
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tappav-bg/95 via-tappav-bg/60 to-transparent" />

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
            <h2 className={`headline-2 text-tappav-text mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              ENGINEERED FOR THE ROOM
            </h2>
            <p className={`text-tappav-text-muted text-lg mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Quiet operation. Flexible install. Support that answers in minutes.
            </p>
            <button
              className={`link-underline text-tappav-text font-medium inline-flex items-center gap-2 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Read our story
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section ref={sectionRef} className="section-flowing py-24 px-[6vw] bg-tappav-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
        <img
          src={`${import.meta.env.BASE_URL}images/newsletter_accent.jpg`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        {/* Header */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="headline-2 text-tappav-text mb-4">STAY IN THE LOOP</h2>
          <p className="text-tappav-text-muted text-lg">
            Get drops, calibration tips, and exclusive offers.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 px-6 py-4 bg-tappav-bg-secondary border border-tappav-text-muted/20 rounded-full text-tappav-text placeholder:text-tappav-text-muted focus:outline-none focus:border-tappav-accent transition-colors"
            required
          />
          <button type="submit" className="btn-accent">
            Subscribe
          </button>
        </form>

        {/* Contact */}
        <div className={`flex flex-wrap gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="mailto:support@tappav.com" className="text-tappav-text-muted hover:text-tappav-text transition-colors">
            support@tappav.com
          </a>
          <a href="tel:1-800-TAPPAV-1" className="text-tappav-text-muted hover:text-tappav-text transition-colors">
            1-800-TAPPAV-1
          </a>
          <span className="text-tappav-accent cursor-pointer hover:underline">
            Live chat
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-tappav-text-muted text-sm">
          © TappAV. All rights reserved.
        </p>
      </div>
    </section>
  );
}

// Main HomePage Component
function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="bg-tappav-bg">
      <HeroSection onNavigate={onNavigate} />
      <FeaturedSection onNavigate={onNavigate} />
      <ProductGridSection />
      <FeatureSection onNavigate={onNavigate} />
      <CategorySection />
      <PromiseSection />
      <NewsletterSection />
    </main>
  );
}

export default HomePage;
