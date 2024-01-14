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
        <div className={styles.CartContainer}>
            <p style={{ textAlign: "center", fontSize: "30px" }}>Your Cart</p>
            <p style={{ textAlign: "center", fontSize: "20px" }}>Total no of Product : {cart.length}</p>
            <p style={{ textAlign: "center", fontSize: "20px" }}>Total Price: {price}</p>
            {cart.map((item) => (
                <React.Fragment key={item.id}>
                    <div className={styles.cart}>
                        <div>
                            <img src={item.images[0]} style={{ height: '250px', width: '250px', objectFit: 'contain' }}></img>
                        </div>
                        <div>
                            <p >{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.discountPercentage}</p>
                            <p>{item.price}</p>
                            <p>{item.rating}</p>
                            <p>{item.title}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                </React.Fragment>

            ))}
        </div>
    </>

}
export default AddToCart;