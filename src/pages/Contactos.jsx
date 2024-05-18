import React from "react";

const Contactos = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contacto
        </h2>
        <p className="mb-8 lg:mb-16 font-bold text-center text-black sm:text-xl">
          Mandanos un mensaje si necesitas realizar una consulta.
        </p>
        <form action="#" className="space-y-8">
        <div>
            <label
              className="block mb-2 text-sm font-medium text-black"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              id="name"
              placeholder="Ingresa tu nombre"
              required
              type="text"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-black "
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              id="email"
              placeholder="Ingrese su correo"
              required
              type="email"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-black"
              htmlFor="subject"
            >
              Motivo de consulta
            </label>
            <input
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              id="subject"
              placeholder="Motivo de consulta"
              required
              type="text"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              className="block mb-2 text-sm font-medium text-black"
              htmlFor="message"
            >
              Escribe tu mensaje
            </label>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              id="message"
              placeholder="Mensaje..."
              rows="6"
            />
          </div>
          <button
            className="py-3 px-5 text-sm font-bold text-center text-black rounded-lg bg-[#FB2E86] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactos;
