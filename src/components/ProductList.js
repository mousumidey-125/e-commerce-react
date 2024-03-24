import { useState } from 'react'
import styles from './ProductList.module.css'
import { Link } from 'react-router-dom';
function ProductList({ products}) {
  
  return (

    <div className={styles.container}>
      {products.map((product) => (
        
        <div className={styles.products} key={product.id} >
          <Link to={`/product/${product.id}`} >
          <img src={product.images[0]} style={{ height: '100px' , width:'150px'}} alt={product.title} />
          </Link>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.description}>{product.description}</p>
          <p>{product.price}</p>
        </div>
      
      ))}
    </div>
  )

}

export default ProductList;