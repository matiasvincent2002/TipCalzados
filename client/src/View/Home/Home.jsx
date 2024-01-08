  // Importa todas las librerías y componentes necesarios
  import React, { useState, useEffect } from 'react';
  import style from './Home.module.css';
  import Header from '../../components/Header/Header';
  import { Carousel } from 'react-bootstrap';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import ProductCard from '../../components/Product/Product.jsx';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Footer from '../../components/Footer/Footer.jsx';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchProducts } from '../../redux/actions'; // Ajusta la ruta según tu estructura
  const ringoImage1 = './src/assets/ringo.jpg';
  const ringoImage2 = './src/assets/ringo2.jpg';
  const ringoImage3 = './src/assets/ringo3.jpg';
  
  const imagePaths = [ringoImage1, ringoImage2, ringoImage3];
  // Agrega más imágenes según sea necesario

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
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
      // Dispatch la acción para cargar productos cuando el componente se monte
      dispatch(fetchProducts());
    }, [dispatch]);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <div className={style.homeContainer}>
        <Header />

        {/* Carousel principal */}
        <div className={style.carouselContainer}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className={`w-100 ${style.customCarousel}`}
            interval={3000}
            slide
          >
            {imagePaths.map((path, idx) => (
              <Carousel.Item key={idx}>
                <img className={`d-block ${style.image}`} src={path} alt={`Imagen ${idx + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Sección de destacados */}
        <div className={style.containerFeaturedSection}>
          <div className={style.featuredSection}>
            <h2>Destacados</h2>
            <Slider {...featuredCarouselSettings}>
              {products.map((product) => (
                <div key={product.id} className={style.featuredItem}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Banner con formulario */}
        <div className={style.banner}>
          <h1>Recibí todas las ofertas</h1>
          <p>¿Quieres recibir nuestras ofertas? ¡Regístrate ya mismo y comienza a disfrutarlas!</p>
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
