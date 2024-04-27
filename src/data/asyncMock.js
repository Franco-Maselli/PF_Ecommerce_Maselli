export const productos = [
  {
    id: 1,
    nombre: "Samsung Galaxy A14 4G",
    precio: "359999",
    categoria: "Samsung",
    stock: 5,
    descripcion:
      "128GB. Pantalla de 6.6. Cámara Principal de 50 MP. Batería de 5000mah",
    img: "https://shorturl.at/rxHPY",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy A34 5G",
    precio: "695999",
    categoria: "Samsung",
    stock: 5,
    descripcion:
      "128GB. Pantalla de 6.6. Más cámaras con más perfección. Más de dos días de batería",
    img: "https://shorturl.at/FUVZ4",
  },
  {
    id: 3,
    nombre: "Samsung Galaxy A54 5G",
    precio: "939999",
    categoria: "Samsung",
    stock: 5,
    descripcion: "256GB. Pantalla de 6,4. Más cámaras con más perfección",
    img: "https://shorturl.at/jrC34",
  },
  {
    id: 4,
    nombre: "Motorola Edge 40 Neo",
    precio: "699999",
    categoria: "Motorola",
    stock: 5,
    descripcion:
      "256GB. Colores exclusivos. Fotos increíbles en condiciones de poca luz. Carga rápida y batería para todo el dia.",
    img: "https://shorturl.at/hHJRV",
  },
  {
    id: 5,
    nombre: "Motorola Edge 40",
    precio: "899999",
    categoria: "Motorola",
    stock: 5,
    descripcion:
      "256GB. Disfrutá un diseño único, elegante y protección contra el agua. Carga rápida y batería para todo el dia.",
    img: "https://shorturl.at/fsJVY",
  },
  {
    id: 6,
    nombre: "Motorola Razr 40 Ultra",
    precio: "1299999",
    categoria: "Motorola",
    stock: 5,
    descripcion:
      "512GB. Diseño exclusivo con pantalla flexible de 6.9 y bisagra gota sin espacios entre sus lados.",
    img: "https://shorturl.at/BWY23",
  },
  {
    id: 7,
    nombre: "Redmi Note 11",
    precio: "377999",
    categoria: "Xiaomi",
    stock: 5,
    descripcion:
      "128GB. La undécima edición del teléfono inteligente Redmi más popular! Cámara inteligente de 50 MP.",
    img: "https://shorturl.at/rUW26",
  },
  {
    id: 8,
    nombre: "Redmi Note 12 Pro 5G",
    precio: "999900",
    categoria: "Xiaomi",
    stock: 5,
    descripcion:
      "128GB. Cámara 50MP | Sensor de cámara ﬂagship con OIS | Pantalla AMOLED de 120Hz",
    img: "https://shorturl.at/abepL",
  },
  {
    id: 9,
    nombre: "Redmi Note 12 Pro 5G",
    precio: "1229900",
    categoria: "Xiaomi",
    stock: 5,
    descripcion:
      "256GB. Revolucionaria cámara de 200MP con OIS |Batería de larga duración de 5000mAh",
    img: "https://shorturl.at/fluxX",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === category
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    resolve(productoFiltrado);
  });
};
