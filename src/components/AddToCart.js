import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import styles from './AddToCart.module.css'

function AddToCart() {
    const { cart, setCart } = useCart()
    const [price,setPrice]=useState(0)
    const handleDelete = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }
    useEffect(() => {
        const totalPrice = cart.reduce((total, item) => total + item.price , 0);
        setPrice(totalPrice);
      }, [cart]);
      
    return <>
    {cart.length== 0 ? <p></p> :
    <div className={styles.CartContainer}>

        
        
    <div className={styles.CartProduct}>
        {cart.map((item)=>
       <React.Fragment key={item.id}>
       <div className={styles.cart}>
           <div className={styles.image}>
               <img src={item.images[0]} style={{ height: '150px', width: '250px', objectFit: 'contain' }}></img>
           </div>
           <div className={styles.details}>
               <p >{item.title}</p>
               <p>{item.description}</p>
               <p>{item.price}</p>
               <button className={`btn btn-success ${styles.buy}` } >Buy Now</button>
               <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
           </div>
       </div>
   </React.Fragment>
        )}
    
        
    </div>

    <div className={styles.CartAmount}>
    <p style={{fontSize:'30px'}}>Price Details</p>
        <p style={{fontSize:'20px'}}>Total no of Product : {cart.length}</p>
        <p style={{fontSize:'20px'}}>Total Price: ₹{price}</p>

    </div>


</div>
        }
    
        
    </>

}
export default AddToCart;