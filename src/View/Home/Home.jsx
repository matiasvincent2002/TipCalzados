// Home.jsx
import React from 'react';
import style from './Home.module.css';
import Header from '../../components/Header/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../components/Product/Product.jsx'; // Ajusta la ruta según tu estructura
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer.jsx'; // Agrega la importación
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

const featuredCarouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Header />
      <div className={style.whatsappButton} >
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
      {/* Otras secciones de la página Home */}

      {/* Sección de destacados */}
      <div className={style.featuredSection}>
        <h2>Destacados</h2>
        <Slider {...featuredCarouselSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={style.featuredItem}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
  {/* Banner con formulario */}
  <div className={style.banner}>
        <h1>Recibí todas las ofertas</h1>
        <p>¿Quieres recibir nuestras ofertas? ¡Registrate ya mismo y comenzá a disfrutarlas!</p>
        <form>
          <label className={style.containerForm}>
          <input type="email" id="email" name="email" placeholder='email' />
          <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>

          </label>
        </form>
      </div>  
      <Footer />
    </div>
  );
};

export default Home;
