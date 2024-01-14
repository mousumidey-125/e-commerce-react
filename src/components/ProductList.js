import { useState } from 'react'
import styles from './ProductList.module.css'
import { Link } from 'react-router-dom';
function ProductList({ products}) {
  
  return (

    <div className={styles.container}>
      {products.map((product) => (
        
        <div className={styles.products} key={product.id} >
          <Link to={`/product/${product.id}`} >
          <img src={product.images[0]} style={{ height: '100px' }} alt={product.title} />
          </Link>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </div>
      
      ))}
    </div>
  )

}

export default ProductList;