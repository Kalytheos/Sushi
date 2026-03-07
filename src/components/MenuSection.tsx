import nigiriImg from "@/assets/nigiri.jpg";
import makiImg from "@/assets/maki.jpg";
import sashimiImg from "@/assets/sashimi.jpg";

const dishes = [
  {
    name: "Nigiri Especial",
    desc: "Salmón, atún y langostino sobre arroz de sushi perfectamente sazonado.",
    price: "$18",
    img: nigiriImg,
  },
  {
    name: "Maki Roll Sakura",
    desc: "Roll signature con tempura de camarón, aguacate y salsa de anguila.",
    price: "$22",
    img: makiImg,
  },
  {
    name: "Sashimi Premium",
    desc: "Selección del chef con los cortes más frescos del día.",
    price: "$28",
    img: sashimiImg,
  },
];

const MenuSection = () => {
  return (
    <section id="carta" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-3 font-body">Nuestra Carta</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Platos Destacados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold">{dish.name}</h3>
                  <span className="text-primary font-display text-lg">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
