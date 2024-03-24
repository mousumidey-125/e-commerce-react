import { useEffect, useState } from 'react'
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
          {product.title.length>20? <p className={styles.title}>{product.title.slice(0, 20) + "..."}</p>:<p className={styles.title}>{product.title}</p>}
          
          <Link to={`/product/${product.id}`} className={styles.link}>
         {product.description.length>50? <p className={styles.description}>{product.description.slice(0, 40) + "..."}</p>:<p className={styles.description}>{product.description}</p>}
         </Link>
          <p><b>₹{product.price}</b></p>
        </div>
      
      ))}
    </div>
  )

}

export default ProductList;