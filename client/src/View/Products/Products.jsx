import React, { useState, useEffect } from 'react';
import style from './Products.module.css';
import ProductCard from '../../components/Product/Product.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions'; // Ajusta la ruta según tu estructura

const Products = () => {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Ajusta el estado según tu estructura

  useEffect(() => {
    // Dispatch la acción para cargar productos cuando el componente se monte
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
  };

  const categories = ["Carteras", "Hombres", "Mujer", "Plataformas", "Mujer/Zapatillas"];
  const colors = ["Azul", "Beige", "Blanco", "Celeste", "Fucsia", "Gris", "Marrón", "Naranja"];
  const sizes = ["34", "35", "36", "37", "38", "39", "40", "41"];
  const priceRanges = ["Desde", "Hasta"];

  return (
    <>
      <section className={`${style.productsContainer}`}>
        <button className={style.menuButton} onClick={toggleFilterMenu}>
          {isFilterMenuOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
        <Nav></Nav>
        <div className={style.galleryContainer}>
          <aside className={`${style.filterGallery} ${isFilterMenuOpen ? style.show : ''}`}>
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
              {products.map((product, index) => (
                <div key={index} className={style.productCard}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className={style.whatsappButton}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Products;
