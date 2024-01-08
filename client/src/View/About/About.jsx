import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import style from './About.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
    return (
      <div className={style.aboutContent}>
        <Nav />
        <div className={style.whatsappButton}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
        <section className={style.aboutSection}>
          <h1 className={style.aboutHeading}>Acerca de Nosotros</h1>
          <p className={style.aboutText}>
            Bienvenido a Tip Calzados, una tienda establecida en diciembre de 2004, ubicada en GUERNICA, al sur de Buenos Aires.
          </p>
          <p className={style.aboutText}>
            Nos enorgullece ofrecer productos de reconocidas marcas líderes, asegurando la más alta calidad para nuestros clientes.
          </p>
          <p className={style.aboutText}>
            Algunas de las marcas destacadas en nuestro sitio web incluyen VIZZANO, HEYAS, BELSOULYE, FRAGOLA, PICADILLY y ONA SAENZ.
          </p>
        </section>
     

        <Footer />
      </div>
    );
  };
  
  export default About;