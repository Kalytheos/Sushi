import { UtensilsCrossed, Leaf, Clock } from "lucide-react";

const features = [
  { icon: UtensilsCrossed, title: "Maestros Susheros", desc: "Nuestros chefs con más de 15 años de experiencia." },
  { icon: Leaf, title: "Ingredientes Frescos", desc: "Pescado importado y productos orgánicos locales." },
  { icon: Clock, title: "Abierto Cada Día", desc: "Lun–Dom: 12:00 – 23:00h para tu disfrute." },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-3 font-body">Sobre Nosotros</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Tradición & Pasión</h2>
        <p className="text-foreground/60 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          En Sakura fusionamos la disciplina de la cocina japonesa tradicional con la frescura de los
          mejores ingredientes. Cada pieza es una obra de arte comestible.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
