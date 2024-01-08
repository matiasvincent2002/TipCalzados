// Footer.jsx
import React from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Agrega esta línea
import { faEnvelope, faLocation, faLocationPin, faLocationPinLock, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const logos = {
        visa: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
        mastercard: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
        amex: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
        diners: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png",
        ar_banelco: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png",
        ar_cabal: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png",
        ar_tarjeta_naranja: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png",
        ar_tarjeta_shopping: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png",
        mercadopago: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png",
        other: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/other@2x.png",
        ar_argencard: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png",
        ar_cencosud: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png",
        pagofacil: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png",
        rapipago: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png",
        visadebit: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png",
        maestro: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/maestro@2x.png",
        ar_cabaldebit: "//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabaldebit@2x.png"
      };
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
            <h4 className={style.heading}>Categorías</h4>
            <ul className={style.menu}>
              <li className={style.menuItem}><a className={style.menuLink} href="/">Inicio</a></li>
              <li className={style.menuItem}><a className={style.menuLink} href="https://tipcalzados.mitiendanube.com/productos/">Productos</a></li>
              <li className={style.menuItem}><a className={style.menuLink} href="/contacto/">Contacto</a></li>
              <li className={style.menuItem}><a className={style.menuLink} href="https://tipcalzados.mitiendanube.com/quienes-somos/">Quiénes Somos</a></li>
            </ul>
          </div>
          <div className={style.column}>
            <h4 className={style.heading}>Contactános</h4>
            <ul className={style.menu}>
              <li className={style.menuItem}><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>541137558225</li>
              <li className={style.menuItem}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>02224478906</li>
              <li className={style.menuItem}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>tipcalzados@gmail.com</li>
              <li className={style.menuItem}><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>av. Jauretche 601, Av jauretche 657</li>
            </ul>
          </div>
          <div className={style.column}>
            <h4 className={style.heading}>Sigamos conectados</h4>
            {/* Agrega aquí los enlaces de redes sociales */}
            <ul className={style.menu}>
                <li className={style.menuItemContact}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
                <li className={style.menuItemContact}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
            </ul>
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.row}>
          <div className={style.column}>
          <div className={style.paymentsShippingLogos}>
            <div className={style.column}><h3>Medio de pago</h3></div>
              <div className={style.paymentIcons}>
                {Object.keys(logos).map((logo, index) => (
                  <img
                    key={index}
                    src={logos[logo]}
                    alt={logo}
                    className={style.paymentIcon}
                    width="40"
                    height="25"
                  />
                ))}
              </div>
             
            </div>

          </div>
          
        </div>
        <div className={style.row}>
        <div className={style.column}>
            <div className={style.paymentsShippingLogos}>
            <div className={style.column}><h3>Medio de envios</h3></div>
            <div className={style.shippingIcons}>
             <img
                                      
                                        src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png"
                                        alt="rere"
                                        className={style.shippingIcon}
                                        width="40"
                                        height="25"
         />
                       
                            </div>
                        </div>
                    </div></div>
        <div className={style.legal}>
          <div className={style.row}>
          
            <div className={style.column}>
              <p className={style.copyright}>Copyright TIP CALZADOS - 2023. Todos los derechos reservados.</p>
              {/* Agrega aquí los enlaces legales */}
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
