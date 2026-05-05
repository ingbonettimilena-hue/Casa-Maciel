import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Menu, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    entrantes: [
      { name: 'Hummus Casero', description: 'Con aceite de oliva virgen extra y pan pita', price: '€8' },
      { name: 'Ensalada Griega', description: 'Tomate, pepino, aceitunas Kalamata, queso feta', price: '€10' },
      { name: 'Mezze Platter', description: 'Selección de dips mediterráneos', price: '€15' },
      { name: 'Pulpo a la Gallega', description: 'Con pimentón y aceite de oliva', price: '€18' },
    ],
    principales: [
      { name: 'Paella Valenciana', description: 'Arroz con mariscos frescos y azafrán', price: '€22' },
      { name: 'Moussaka', description: 'Berenjenas, carne picada y bechamel', price: '€16' },
      { name: 'Lubina al Horno', description: 'Con limón, hierbas y verduras asadas', price: '€24' },
      { name: 'Cordero Asado', description: 'Con romero y patatas al horno', price: '€26' },
    ],
    postres: [
      { name: 'Baklava', description: 'Hojaldre con nueces y miel', price: '€7' },
      { name: 'Tiramisú', description: 'Clásico italiano con café y mascarpone', price: '€8' },
      { name: 'Pannacotta', description: 'Con coulis de frutos rojos', price: '€7' },
    ],
  };

  return (
    <div className="size-full overflow-y-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl text-amber-700">CASA MACIEL</div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-amber-700 transition-colors">Inicio</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-700 transition-colors">Menú</a>
              <a href="#galeria" className="text-gray-700 hover:text-amber-700 transition-colors">Galería</a>
              <a href="#contacto" className="text-gray-700 hover:text-amber-700 transition-colors">Contacto</a>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#inicio" className="block text-gray-700 hover:text-amber-700">Inicio</a>
              <a href="#menu" className="block text-gray-700 hover:text-amber-700">Menú</a>
              <a href="#galeria" className="block text-gray-700 hover:text-amber-700">Galería</a>
              <a href="#contacto" className="block text-gray-700 hover:text-amber-700">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3NzcyOTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-6">CASA MACIEL</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Auténtica cocina mediterránea con el sabor de la tradición
          </p>
          <a
            href="#menu"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Ver Menú
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-800">Nuestra Historia</h2>
          <p className="text-lg text-gray-600 mb-4">
            En Casa Maciel, celebramos los sabores auténticos del mar Mediterráneo.
            Cada plato es una historia de tradición, pasión y los mejores ingredientes frescos.
          </p>
          <p className="text-lg text-gray-600">
            Desde la costa española hasta las islas griegas, nuestro menú es un viaje
            culinario que honra las recetas tradicionales con un toque contemporáneo.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-gray-800">Nuestro Menú</h2>

          <div className="space-y-16">
            {/* Entrantes */}
            <div>
              <h3 className="text-3xl mb-8 text-amber-700 text-center">Entrantes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.entrantes.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl text-gray-800">{item.name}</h4>
                      <span className="text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Principales */}
            <div>
              <h3 className="text-3xl mb-8 text-amber-700 text-center">Platos Principales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.principales.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl text-gray-800">{item.name}</h4>
                      <span className="text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Postres */}
            <div>
              <h3 className="text-3xl mb-8 text-amber-700 text-center">Postres</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems.postres.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl text-gray-800">{item.name}</h4>
                      <span className="text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-gray-800">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653611540493-b3a896319fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwxfHx8fDE3Nzc3Mjk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mediterranean food"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwxfHx8fDE3Nzc3Mjk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mediterranean dish"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwxfHx8fDE3Nzc3Mjk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh salad"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680405531955-8b4981bb1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwxfHx8fDE3Nzc3Mjk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gourmet dish"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748540459503-19efc015143b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZWRpdGVycmFuZWFuJTIwZm9vZHxlbnwxfHx8fDE3Nzc3Mjk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food spread"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771681208497-c066baf0c97d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3NzcyOTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-amber-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Visítanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Información</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>Calle del Mar 123</p>
                    <p>08003 Barcelona, España</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p>+34 933 123 456</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <p>reservas@casamaciel.es</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>Lunes - Viernes: 12:00 - 23:00</p>
                    <p>Sábados - Domingos: 11:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-6">Reservar Mesa</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Número de personas"
                  min="1"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-amber-700 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Reservar Ahora
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Casa Maciel</p>
          <p className="text-gray-400">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
