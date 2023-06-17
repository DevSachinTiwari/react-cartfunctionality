import React from 'react'
import styles from './Product.module.scss';

const Product = ({product, addToCart}) => {
  return (
    <>
        <div className={styles.product} onClick={() => addToCart(product)}>
            <div className={styles.img_wrap}>
              <img src={product.image} alt=''/>
            </div>
            {product.name && <h3>{product.name}</h3>}
            {product.price && <p>{product.price}</p>}
            <div className={styles.addcart}>Add to Cart</div>
        </div>
    </>
  )
}

export default Product