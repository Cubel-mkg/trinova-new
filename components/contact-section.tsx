"use client"

import { useState } from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Cancela el envío normal del formulario

    const formData = new FormData(e.currentTarget);

    await fetch("https://formspree.io/f/mrbknlgv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setMessageSent(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 3000); // Espera 2 segundos antes de redirigir
  };

  return (
    <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-16 rounded-3xl shadow-2xl animate-slide-in-right hover-scale border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <input
            name="name"
            required
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-[#215977] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            name="email"
            required
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-200 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#215977] focus:outline-none"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            name="phone"
            required
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-200 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#215977] focus:outline-none"
          />
        </div>

        {/* Proyecto de interés */}
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
            Seleccioná proyecto de interés
          </label>
          <select
            name="project"
            required
            id="project"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 text-gray-700 focus:ring-[#215977] focus:outline-none"
          >
            <option value="">Elegí una opción</option>
            <option value="Aizpurua / Villa Urquiza">Aizpurua / Villa Urquiza</option>
            <option value="Nicasio / Caballito">Nicasio / Caballito</option>
          </select>
        </div>

        {/* Checklist de ambientes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ambientes de interés (podés elegir más de uno)
          </label>
          <div className="space-y-2 pl-1">
            <label className="flex text-gray-700 items-center">
              <input type="checkbox" name="ambientes" value="1 ambiente" className="mr-2 " />
              1 ambiente
            </label>
            <label className="flex text-gray-700 items-center">
              <input type="checkbox" name="ambientes" value="2 ambientes" className="mr-2 " />
              2 ambientes
            </label>
            <label className="flex text-gray-700 items-center">
              <input type="checkbox" name="ambientes" value="3 ambientes" className="mr-2 " />
              3 ambientes
            </label>
            <label className="flex text-gray-700 items-center">
              <input type="checkbox" name="ambientes" value="4 ambientes" className="mr-2 " />
              4 ambientes
            </label>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            required
            id="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-[#215977] focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-[#215977] hover:bg-[#1a4a63] py-4 text-base text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Enviar mensaje
        </button>
      </form>

      {/* Mensaje de éxito */}
      {messageSent && (
        <p className="text-center mt-6 text-green-600 text-base font-semibold transition-opacity duration-500">
          ¡Gracias por tu mensaje! Te responderemos pronto.
        </p>
      )}
    </div>
  );
};

export default ContactSection;