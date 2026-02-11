import { useEffect, useRef, useState } from 'react';
import { 
  Check, 
  ShoppingCart, 
  Star, 
  Zap, 
  Monitor, 
  Volume2, 
  Settings,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  ArrowLeft
} from 'lucide-react';

interface ProductPageProps {
  onNavigate: (page: string) => void;
}

// Product Gallery Component
function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { src: '/images/epson_ls12000_hero.jpg', alt: 'Epson LS12000 Front View' },
    { src: '/images/epson_ls12000_detail.jpg', alt: 'Epson LS12000 Lens Detail' },
    { src: '/images/epson_ls12000_lifestyle.jpg', alt: 'Epson LS12000 in Home Theater' },
    { src: '/images/featured_projector_product.jpg', alt: 'Epson LS12000 Side View' },
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="card-premium overflow-hidden aspect-video relative">
        <img 
          src={images[activeImage].src} 
          alt={images[activeImage].alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
              activeImage === index 
                ? 'border-tappav-accent opacity-100' 
                : 'border-transparent opacity-60 hover:opacity-80'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// Spec Row Component
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec-row">
      <span className="text-tappav-text-muted">{label}</span>
      <span className="text-tappav-text font-medium">{value}</span>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="card-premium-sm bg-tappav-bg-secondary p-6 card-hover-lift">
      <div className="w-12 h-12 rounded-full bg-tappav-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-tappav-accent" />
      </div>
      <h3 className="font-heading font-bold text-lg text-tappav-text mb-2">{title}</h3>
      <p className="text-tappav-text-muted text-sm">{description}</p>
    </div>
  );
}

// Main Product Page Component
function ProductPage({ onNavigate }: ProductPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: '4K PRO-UHD',
      description: 'Native 1080p 3LCD with pixel-shifting technology delivers true 4K resolution (3840×2160).'
    },
    {
      icon: Zap,
      title: 'Laser Light Source',
      description: '2,700 lumens brightness with 20,000-hour lifespan. No lamp replacements needed.'
    },
    {
      icon: Settings,
      title: 'HDR10+ Support',
      description: 'Dynamic tone mapping with HDR10, HDR10+, and HLG compatibility.'
    },
    {
      icon: Volume2,
      title: 'Quiet Operation',
      description: 'Advanced thermal management keeps noise levels as low as 22 dB in Eco mode.'
    },
  ];

  const specifications = [
    { label: 'Resolution', value: '4K UHD (3840 × 2160)' },
    { label: 'Brightness', value: '2,700 ANSI Lumens' },
    { label: 'Contrast Ratio', value: '2,500,000:1 (Dynamic)' },
    { label: 'Light Source', value: 'Laser Diode Array' },
    { label: 'Light Source Life', value: '20,000 hours' },
    { label: 'HDR Support', value: 'HDR10, HDR10+, HLG' },
    { label: 'Refresh Rate', value: 'Up to 120Hz' },
    { label: 'Input Lag', value: '< 20ms (4K/120Hz)' },
    { label: 'Lens', value: '15-element VRX Lens' },
    { label: 'Zoom', value: '2.1x Powered' },
    { label: 'Lens Shift', value: '±96% Vertical, ±47% Horizontal' },
    { label: 'Throw Ratio', value: '1.35 – 2.84:1' },
    { label: 'Projection Size', value: '50″ – 300″' },
    { label: 'Connectivity', value: '2× HDMI 2.1 (48Gbps), eARC' },
    { label: 'Noise Level', value: '22 – 30 dB' },
    { label: 'Weight', value: '12.7 kg (28 lbs)' },
  ];

  const boxContents = [
    'Epson Pro Cinema LS12000 Projector',
    'Power Cable',
    'Remote Control with Batteries',
    'User Manual',
    'Ceiling Mount Hardware',
    '3-Year Limited Warranty',
  ];

  return (
    <main className="bg-tappav-bg min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="px-[6vw] py-4">
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => onNavigate('home')} className="text-tappav-text-muted hover:text-tappav-text transition-colors">
            Home
          </button>
          <ChevronRight className="w-4 h-4 text-tappav-text-muted" />
          <button onClick={() => onNavigate('home')} className="text-tappav-text-muted hover:text-tappav-text transition-colors">
            Projectors
          </button>
          <ChevronRight className="w-4 h-4 text-tappav-text-muted" />
          <span className="text-tappav-text">Epson LS12000</span>
        </div>
      </div>

      {/* Product Hero */}
      <section ref={heroRef} className="px-[6vw] py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <ProductGallery />
          </div>

          {/* Product Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Brand & Rating */}
            <div className="flex items-center gap-4">
              <span className="micro-label text-tappav-accent">EPSON</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-tappav-accent text-tappav-accent" />
                ))}
                <span className="text-tappav-text-muted text-sm ml-2">(47 reviews)</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="headline-2 text-tappav-text mb-2">
                Pro Cinema LS12000
              </h1>
              <p className="text-tappav-text-muted text-lg">
                4K PRO-UHD Laser Projector
              </p>
            </div>

            {/* Key Specs */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-tappav-bg-secondary rounded-full text-tappav-text text-sm">
                2,700 Lumens
              </span>
              <span className="px-4 py-2 bg-tappav-bg-secondary rounded-full text-tappav-text text-sm">
                4K / 120Hz
              </span>
              <span className="px-4 py-2 bg-tappav-bg-secondary rounded-full text-tappav-text text-sm">
                HDR10+
              </span>
              <span className="px-4 py-2 bg-tappav-bg-secondary rounded-full text-tappav-text text-sm">
                Laser
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-tappav-text">$4,999</span>
              <span className="text-tappav-text-muted line-through">$5,499</span>
              <span className="px-3 py-1 bg-tappav-accent/20 rounded-full text-tappav-accent text-sm font-medium">
                Save $500
              </span>
            </div>

            {/* Description */}
            <p className="text-tappav-text-muted leading-relaxed">
              Experience cinema-quality projection at home with the Epson Pro Cinema LS12000. 
              Featuring 4K PRO-UHD resolution, advanced laser light source, and HDR10+ support 
              for breathtaking image quality. The precision VRX lens and motorized adjustments 
              ensure perfect alignment in any room.
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-tappav-bg-secondary rounded-full px-4 py-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-tappav-text hover:text-tappav-accent transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center text-tappav-text font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-tappav-text hover:text-tappav-accent transition-colors"
                >
                  +
                </button>
              </div>
              <button className="btn-accent flex-1 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-tappav-text-muted/10">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-tappav-accent" />
                <span className="text-tappav-text-muted text-xs">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-5 h-5 text-tappav-accent" />
                <span className="text-tappav-text-muted text-xs">3-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-5 h-5 text-tappav-accent" />
                <span className="text-tappav-text-muted text-xs">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[6vw] py-16">
        <div className="text-center mb-12">
          <h2 className="headline-2 text-tappav-text mb-4">KEY FEATURES</h2>
          <p className="text-tappav-text-muted max-w-xl mx-auto">
            Engineered for the ultimate home theater experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section className="px-[6vw] py-16 bg-tappav-bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Specs List */}
          <div>
            <h2 className="headline-3 text-tappav-text mb-8">TECHNICAL SPECIFICATIONS</h2>
            <div className="card-premium-sm bg-tappav-bg-secondary p-6">
              {specifications.map((spec, index) => (
                <div 
                  key={spec.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <SpecRow label={spec.label} value={spec.value} />
                </div>
              ))}
            </div>
          </div>

          {/* Box Contents */}
          <div>
            <h2 className="headline-3 text-tappav-text mb-8">IN THE BOX</h2>
            <div className="card-premium-sm bg-tappav-bg-secondary p-6">
              <ul className="space-y-4">
                {boxContents.map((item, index) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-tappav-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-tappav-accent" />
                    </div>
                    <span className="text-tappav-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="card-premium-sm bg-gradient-to-br from-tappav-accent/20 to-tappav-accent/5 p-6 mt-6 border border-tappav-accent/30">
              <h3 className="font-heading font-bold text-xl text-tappav-text mb-2">
                Need Help Deciding?
              </h3>
              <p className="text-tappav-text-muted mb-4">
                Our AV experts can help you find the perfect projector for your space.
              </p>
              <button className="btn-accent w-full">
                Chat with an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-[6vw] py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="headline-3 text-tappav-text">COMPLETE YOUR SETUP</h2>
          <button 
            onClick={() => onNavigate('home')}
            className="link-underline text-tappav-text text-sm font-medium inline-flex items-center gap-2"
          >
            View All
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Ceiling Mount Kit', price: '$149', image: '/images/grid_mount_thumb.jpg' },
            { name: 'Pro Soundbar', price: '$599', image: '/images/grid_soundbar_thumb.jpg' },
            { name: 'Smart Streaming Box', price: '$129', image: '/images/grid_streamer_thumb.jpg' },
          ].map((product, index) => (
            <div 
              key={product.name}
              className="card-premium-sm bg-tappav-bg-secondary card-hover-lift cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden img-hover-zoom">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-tappav-text mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-tappav-accent font-bold">{product.price}</span>
                  <button className="text-tappav-text-muted hover:text-tappav-text text-sm transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <section className="px-[6vw] py-8 border-t border-tappav-text-muted/10">
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-tappav-text-muted hover:text-tappav-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </section>
    </main>
  );
}

export default ProductPage;
