import heroImg from "@/assets/hero-sushi.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Plato de sushi variado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Sushi & Cocina Japonesa</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
          El Arte del <span className="text-primary italic">Sushi</span> Auténtico
        </h1>
        <p className="text-foreground/60 text-lg md:text-xl mb-10 font-light leading-relaxed">
          Ingredientes frescos, tradición japonesa y un toque contemporáneo en cada bocado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#carta"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-sm tracking-widest uppercase text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ver Carta
          </a>
          <a
            href="#contacto"
            className="border border-foreground/30 text-foreground px-8 py-3 rounded-sm tracking-widest uppercase text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
