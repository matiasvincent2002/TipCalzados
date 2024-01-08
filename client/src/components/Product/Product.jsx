// ProductCard.jsx
import React from 'react';
import style from './Product.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={style.productCard}>
      <img src={product.imagenes[0]} alt={product.titulo} className={style.productImage} />
      <h3 className={style.productTitle}>{product.titulo}</h3>
      <p className={style.productPrice}>Precio: ${product.precio.montoTotal}</p>
      <p className={style.productInstallments}>
        {product.precio.numeroCuotas}x ${product.precio.montoPorCuota} sin interés
      </p>
      <p className={style.productRating}>
        Calificación: {product.calificacion.valor} con {product.calificacion.cantidadOpiniones} opiniones
      </p>
      {product.envioGratis && <p className={style.productShipping}>Envío gratis</p>}
      {/* Otros detalles del producto según tu estructura */}
    </div>
  );
};

export default ProductCard;
