import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-3 font-body">Contacto</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Reserva Tu Mesa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-primary" size={28} />
            <h3 className="font-display font-bold text-lg">Dirección</h3>
            <p className="text-muted-foreground text-sm">Calle Gran Vía 42<br />Madrid, España</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-primary" size={28} />
            <h3 className="font-display font-bold text-lg">Teléfono</h3>
            <p className="text-muted-foreground text-sm">+34 912 345 678</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Mail className="text-primary" size={28} />
            <h3 className="font-display font-bold text-lg">Email</h3>
            <p className="text-muted-foreground text-sm">hola@sakurasushi.es</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
