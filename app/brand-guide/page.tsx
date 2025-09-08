import Image from "next/image"

export default function BrandGuidePage() {
  const colorPalette = [
    { name: "Primary Blue", hex: "#062b66", rgb: "6, 43, 102", class: "bg-[#062b66]" },
    { name: "Complementary Blue", hex: "#215977", rgb: "33, 89, 119", class: "bg-[#215977]" },
    { name: "Copper", hex: "#B87333", rgb: "184, 115, 51", class: "bg-copper" },
    { name: "Light Gray", hex: "#F5F5F5", rgb: "245, 245, 245", class: "bg-lightgray" },
    { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", class: "bg-white" },
    { name: "Black", hex: "#000000", rgb: "0, 0, 0", class: "bg-black" },
  ]

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <h1 className="text-4xl font-light mb-12">Manual de Marca Trinova</h1>

      {/* Logo Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Logotipo</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/images/trinova-logo.png" alt="Trinova Logo" width={400} height={110} className="mb-8" />
            <p className="text-gray-600 mb-4">
              El logotipo de Trinova presenta un diseño moderno y profesional con tipografía sans-serif limpia sobre un
              fondo azul corporativo. La forma geométrica angular del fondo simboliza dinamismo e innovación.
            </p>
            <p className="text-gray-600">
              El diseño minimalista y elegante refleja la personalidad de la marca: moderna, sofisticada y confiable,
              perfecta para el sector inmobiliario de alta calidad.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-white border flex items-center justify-center">
              <Image src="/images/trinova-logo.png" alt="Trinova Logo - Color" width={200} height={55} />
            </div>
            <div className="p-8 bg-gray-100 flex items-center justify-center">
              <Image src="/images/trinova-logo.png" alt="Trinova Logo - Light Background" width={200} height={55} />
            </div>
            <div className="p-8 bg-[#062b66] flex items-center justify-center">
              <Image
                src="/images/trinova-logo.png"
                alt="Trinova Logo - Dark Background"
                width={200}
                height={55}
                className="brightness-0 invert"
              />
            </div>
            <div className="p-8 bg-black flex items-center justify-center">
              <Image
                src="/images/trinova-logo.png"
                alt="Trinova Logo - Black Background"
                width={200}
                height={55}
                className="brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Paleta de Colores</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {colorPalette.map((color) => (
            <div key={color.name} className="border overflow-hidden">
              <div className={`h-32 ${color.class}`}></div>
              <div className="p-4">
                <h3 className="font-medium text-sm">{color.name}</h3>
                <p className="text-xs text-gray-600">HEX: {color.hex}</p>
                <p className="text-xs text-gray-600">RGB: {color.rgb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-light mb-4">Uso de Colores</h3>
          <p className="text-gray-600 mb-4">
            <strong>Primary Blue (#062b66):</strong> Color principal que transmite confianza, profesionalismo y
            estabilidad. Utilizado para fondos de secciones importantes, botones principales y elementos de navegación.
            Es el color dominante del logotipo.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Complementary Blue (#215977):</strong> Color secundario de acento que complementa el azul principal.
            Utilizado para destacar elementos importantes, enlaces hover y detalles visuales.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Copper (Cobre):</strong> Color de acento que representa calidez y elegancia. Utilizado
            selectivamente para elementos especiales y diferenciación de marca.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Light Gray, White, Black:</strong> Colores neutros que proporcionan balance y legibilidad. El blanco
            y el gris claro se utilizan como fondos principales, mientras que el negro se reserva para textos y
            detalles.
          </p>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Tipografía</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-light mb-4">Familia Principal: Inter</h3>
            <p className="text-gray-600 mb-6">
              Inter es una tipografía sans-serif moderna y versátil que ofrece excelente legibilidad en todos los
              tamaños. Su diseño limpio y contemporáneo se alinea perfectamente con la identidad de Trinova.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Light</p>
                <p className="font-light text-2xl">Inter Light</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Regular</p>
                <p className="font-normal text-2xl">Inter Regular</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Medium</p>
                <p className="font-medium text-2xl">Inter Medium</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Bold</p>
                <p className="font-bold text-2xl">Inter Bold</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4">Uso Tipográfico</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Títulos Principales</p>
                <p className="text-4xl font-light">Diseñamos espacios</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Subtítulos</p>
                <p className="text-2xl font-light">Nuestros Proyectos</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Cuerpo de Texto</p>
                <p className="text-base">
                  Desarrollamos proyectos inmobiliarios en zonas estratégicas de Buenos Aires, priorizando el diseño y
                  la experiencia de vida de los futuros residentes.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Destacados</p>
                <p className="text-base font-medium">Innovación. Calidad. Confianza.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Uso Correcto del Logo</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-light mb-4">Usos Correctos</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-white border flex items-center justify-center">
                <Image src="/images/trinova-logo.png" alt="Correct Usage - White Background" width={150} height={42} />
              </div>
              <div className="p-6 bg-[#062b66] flex items-center justify-center">
                <Image
                  src="/images/trinova-logo.png"
                  alt="Correct Usage - Dark Background"
                  width={150}
                  height={42}
                  className="brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-600">
              El logotipo debe utilizarse siempre en su versión original sobre fondos claros, o invertido (blanco) sobre
              fondos oscuros. Debe mantenerse un área de protección alrededor del logo equivalente a la altura de la
              letra "T" del logotipo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4">Usos Incorrectos</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-red-100 border border-red-200 flex items-center justify-center relative">
                <Image
                  src="/images/trinova-logo.png"
                  alt="Incorrect Usage - Distorted"
                  width={120}
                  height={60}
                  className="opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-red-400 transform rotate-45"></div>
                </div>
              </div>
              <div className="p-6 bg-red-100 border border-red-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500"></div>
                <Image
                  src="/images/trinova-logo.png"
                  alt="Incorrect Usage - Background"
                  width={150}
                  height={42}
                  className="opacity-50 relative z-10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-red-400 transform rotate-45"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              No distorsionar, rotar, cambiar los colores o aplicar efectos al logotipo. No utilizar el logotipo sobre
              fondos que comprometan su legibilidad o sobre imágenes muy cargadas visualmente.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section>
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Aplicaciones de Marca</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Business Card Mockup"
              width={400}
              height={400}
              className="mb-4"
            />
            <h3 className="text-lg font-medium">Tarjetas de Presentación</h3>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Letterhead Mockup"
              width={400}
              height={400}
              className="mb-4"
            />
            <h3 className="text-lg font-medium">Papelería Corporativa</h3>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Signage Mockup"
              width={400}
              height={400}
              className="mb-4"
            />
            <h3 className="text-lg font-medium">Señalética</h3>
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="mt-16">
        <h2 className="text-2xl font-light mb-6 pb-2 border-b">Subdesarrollos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Aizpurúa 2326 Project"
              width={500}
              height={300}
              className="mb-6"
            />
            <h3 className="text-xl font-medium mb-4">Proyecto Aizpurúa 2326</h3>
            <p className="text-gray-600">
              El subdesarrollo mantiene la esencia minimalista y elegante de la marca madre, utilizando la misma paleta
              cromática pero con un diseño específico que representa la ubicación en Villa Urquiza.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Nicasio Oroño Project"
              width={500}
              height={300}
              className="mb-6"
            />
            <h3 className="text-xl font-medium mb-4">Proyecto Nicasio Oroño</h3>
            <p className="text-gray-600">
              Este subdesarrollo sigue los lineamientos de la marca madre pero incorpora elementos visuales que
              representan la esencia del barrio de Caballito, manteniendo la coherencia visual con Trinova.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
