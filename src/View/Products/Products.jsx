import React from 'react';
import style from './Products.module.css';
import ProductCard from '../../components/Product/Product.jsx'; // Ajusta la ruta según tu estructura
const Products = () => {
  const featuredProducts = [
    {
      titulo: "Sandalias Bajas Romanas Confort Beira Rio Tipcalzado 8488",
      coloresDisponibles: ["Blanco", "Negro"], // Obtén estos valores del contenido real
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_910874-MLA72063076871_102023-W.webp",
        "https://http2.mlstatic.com/D_683974-MLA72063076873_102023-O.jpg",
        "https://http2.mlstatic.com/D_970941-MLA72005652816_102023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1390996815-sandalias-bajas-romanas-confort-beira-rio-tipcalzado-8488-_JM#position=1&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: 4.5,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 25999,
        numeroCuotas: 12,
        montoPorCuota: 5219,
      },
      envioGratis: true,
    },
     {
      titulo: "Sandalias Bajas Beira Rio Confort Tip Calzados Hot 8384",
      coloresDisponibles: ["Negro", "Plata"],
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_850416-MLA72771210925_112023-W.webp",
        "https://http2.mlstatic.com/D_814739-MLA72771366273_112023-O.jpg",
        "https://http2.mlstatic.com/D_801671-MLA72697273050_112023-O.jpg",
        "https://http2.mlstatic.com/D_729130-MLA72697430320_112023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1394995997-sandalias-bajas-beira-rio-confort-tip-calzados-hot-8384-_JM#position=3&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: null, // Valor de la calificación no proporcionado
        cantidadOpiniones: null, // Cantidad de opiniones no proporcionada
      },
      precio: {
        montoTotal: 21999,
        numeroCuotas: 12,
        montoPorCuota: 4416,
      },
      envioGratis: true,
    },
    {
      titulo: "Sandalias De Fiesta Plataforma Vizzano. Tipcalzado Hot 6210",
      calificacion: {
        valor: 4.8,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 38999,
        numeroCuotas: 12,
        montoPorCuota: 7166,
      },
      envioGratis: true,
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_802607-MLA71102699963_082023-W.webp",
        "https://http2.mlstatic.com/D_679650-MLA71064714158_082023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1383356595-sandalias-de-fiesta-plataforma-vizzano-tipcalzado-hot-6210-_JM#position=4&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
    },
    {
      titulo: "Sandalias Bajas Romanas Confort Beira Rio Tipcalzado 8488",
      coloresDisponibles: ["Blanco", "Negro"], // Obtén estos valores del contenido real
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_910874-MLA72063076871_102023-W.webp",
        "https://http2.mlstatic.com/D_683974-MLA72063076873_102023-O.jpg",
        "https://http2.mlstatic.com/D_970941-MLA72005652816_102023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1390996815-sandalias-bajas-romanas-confort-beira-rio-tipcalzado-8488-_JM#position=1&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: 4.5,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 25999,
        numeroCuotas: 12,
        montoPorCuota: 5219,
      },
      envioGratis: true,
    },
     {
      titulo: "Sandalias Bajas Beira Rio Confort Tip Calzados Hot 8384",
      coloresDisponibles: ["Negro", "Plata"],
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_850416-MLA72771210925_112023-W.webp",
        "https://http2.mlstatic.com/D_814739-MLA72771366273_112023-O.jpg",
        "https://http2.mlstatic.com/D_801671-MLA72697273050_112023-O.jpg",
        "https://http2.mlstatic.com/D_729130-MLA72697430320_112023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1394995997-sandalias-bajas-beira-rio-confort-tip-calzados-hot-8384-_JM#position=3&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: null, // Valor de la calificación no proporcionado
        cantidadOpiniones: null, // Cantidad de opiniones no proporcionada
      },
      precio: {
        montoTotal: 21999,
        numeroCuotas: 12,
        montoPorCuota: 4416,
      },
      envioGratis: true,
    },
    {
      titulo: "Sandalias De Fiesta Plataforma Vizzano. Tipcalzado Hot 6210",
      calificacion: {
        valor: 4.8,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 38999,
        numeroCuotas: 12,
        montoPorCuota: 7166,
      },
      envioGratis: true,
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_802607-MLA71102699963_082023-W.webp",
        "https://http2.mlstatic.com/D_679650-MLA71064714158_082023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1383356595-sandalias-de-fiesta-plataforma-vizzano-tipcalzado-hot-6210-_JM#position=4&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
    },
    {
      titulo: "Sandalias Bajas Romanas Confort Beira Rio Tipcalzado 8488",
      coloresDisponibles: ["Blanco", "Negro"], // Obtén estos valores del contenido real
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_910874-MLA72063076871_102023-W.webp",
        "https://http2.mlstatic.com/D_683974-MLA72063076873_102023-O.jpg",
        "https://http2.mlstatic.com/D_970941-MLA72005652816_102023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1390996815-sandalias-bajas-romanas-confort-beira-rio-tipcalzado-8488-_JM#position=1&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: 4.5,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 25999,
        numeroCuotas: 12,
        montoPorCuota: 5219,
      },
      envioGratis: true,
    },
     {
      titulo: "Sandalias Bajas Beira Rio Confort Tip Calzados Hot 8384",
      coloresDisponibles: ["Negro", "Plata"],
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_850416-MLA72771210925_112023-W.webp",
        "https://http2.mlstatic.com/D_814739-MLA72771366273_112023-O.jpg",
        "https://http2.mlstatic.com/D_801671-MLA72697273050_112023-O.jpg",
        "https://http2.mlstatic.com/D_729130-MLA72697430320_112023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1394995997-sandalias-bajas-beira-rio-confort-tip-calzados-hot-8384-_JM#position=3&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
      calificacion: {
        valor: null, // Valor de la calificación no proporcionado
        cantidadOpiniones: null, // Cantidad de opiniones no proporcionada
      },
      precio: {
        montoTotal: 21999,
        numeroCuotas: 12,
        montoPorCuota: 4416,
      },
      envioGratis: true,
    },
    {
      titulo: "Sandalias De Fiesta Plataforma Vizzano. Tipcalzado Hot 6210",
      calificacion: {
        valor: 4.8,
        cantidadOpiniones: 4,
      },
      precio: {
        montoTotal: 38999,
        numeroCuotas: 12,
        montoPorCuota: 7166,
      },
      envioGratis: true,
      imagenes: [
        "https://http2.mlstatic.com/D_NQ_NP_802607-MLA71102699963_082023-W.webp",
        "https://http2.mlstatic.com/D_679650-MLA71064714158_082023-O.jpg",
      ],
      enlace: "https://articulo.mercadolibre.com.ar/MLA-1383356595-sandalias-de-fiesta-plataforma-vizzano-tipcalzado-hot-6210-_JM#position=4&amp;search_layout=grid&amp;type=item&amp;tracking_id=ab3f2efe-e231-406e-b85f-48d1a2c87e3f",
    },
   
  ];

  const categories = ["Carteras", "Hombres", "Mujer", "Plataformas", "Mujer/Zapatillas"];
  const colors = ["Azul", "Beige", "Blanco", "Celeste", "Fucsia", "Gris", "Marrón", "Naranja"];
  const sizes = ["34", "35", "36", "37", "38", "39", "40", "41"];
  const priceRanges = ["Desde", "Hasta"];

  return (
    <section className={style.productsContainer}>
      <div className={style.galleryContainer}>
      <aside className={style.filterGallery}>
  <h2>Filtrar por:</h2>
  <div>
    <h3>Categoría</h3>
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  </div>
  <div>
    <h3>Color</h3>
    <ul>
      {colors.map((color, index) => (
        <li key={index}>
          <input type="checkbox" id={`color-${index}`} />
          <label htmlFor={`color-${index}`}>{color}</label>
        </li>
      ))}
    </ul>
  </div>
  <div>
    <h3>Talle</h3>
    <ul>
      {sizes.map((size, index) => (
        <li key={index}>
          <input type="checkbox" id={`size-${index}`} />
          <label htmlFor={`size-${index}`}>{size}</label>
        </li>
      ))}
    </ul>
  </div>
  <div>
  <h3>Precio</h3>
  <form>
    <label htmlFor="price-from">Desde:</label>
    <input type="number" id="price-from" placeholder="Ingrese precio mínimo" />

    <label htmlFor="price-to">Hasta:</label>
    <input type="number" id="price-to" placeholder="Ingrese precio máximo" />

    <button type="submit">Filtrar</button>
  </form>
</div>
</aside>
        <article className={style.productsDisplay}>
          <h1>Productos</h1>
          <div className={style.productGallery}>
            {featuredProducts.map((product, index) => (
              <div key={index} className={style.productCard}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Products;