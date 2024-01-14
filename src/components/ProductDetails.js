import { useEffect, useState } from "react";
import styles from './ProductDetails.module.css'
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
    const { productId } = useParams()
    const [productDetails, setProductdetails] = useState("")
    const [images, setImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0)
    const navigate=useNavigate()
    const {cart,setCart}=useCart()
    useEffect(() => {
        const getData = () => {
            fetch(`https://dummyjson.com/products/${productId}`)
                .then((res) => res.json())
                .then((data) => {
                    setProductdetails(data)
                    setImages([data.images])
                })
        }
        getData()
        
       
    }, [])

    
    // useEffect(() => {
    //     if (images.length > 0) {
    //         const intervalId = setTimeout(() => {
    //             handleNext();
    //         }, 5000);
    //         return () => clearTimeout(intervalId);
    //     }
    // }, [images, imageIndex]);

    const handleNext = () => {
        if (imageIndex === (images[0].length - 1)) {
            setImageIndex(0)
        }
        else {
            setImageIndex(imageIndex + 1)
        }
    }
    const handlePrevious = () => {
        if (imageIndex === 0) {
            setImageIndex(images[0].length - 1)
        }
        else {
            setImageIndex(imageIndex - 1)
        }
    }

    const handleCart = () => { 
       setCart([...cart,productDetails])
        navigate('/cart')
      
    }
   
const handleGoToCart=()=>{
    navigate('/cart')
}
if (!productDetails) {
    return <div>Loading...</div>;
}

    return <div className={styles.description}>

        <div className={styles.images}>
            {images.map((img, index) => (
                <React.Fragment key={img}>
                    {images[0].length > 1 ? 
                    <>
                        <span className="material-symbols-outlined" style={{ margin: "auto" }} onClick={() => handlePrevious()}>skip_previous</span>
                        <img src={img[imageIndex]} alt={productDetails.title} style={{ height: '300px', width: '250px' }} ></img>
                        <span className="material-symbols-outlined" style={{ margin: "auto" }} onClick={() => handleNext()}>skip_next</span>
                    </> :
                        <img src={img[imageIndex]} alt={productDetails.title} style={{ height: '300px', width: '250px' }} ></img>}
                </React.Fragment>

            ))}
        </div>
        <div className={styles.details} >
                     <p>{productDetails.title}</p>
                     <p>{productDetails.description}</p>
                     <p>{productDetails.discountPercentage}</p>
                     <p>{productDetails.price}</p>
                     <p>{productDetails.rating}</p>
                     <p>{productDetails.title}</p>
                     
                     {(cart.filter((data)=> data.id === productDetails.id).length)===1 ? <button className="btn btn-success" onClick={handleGoToCart}>Go To Cart</button> : <button onClick={handleCart} className="btn btn-danger">Add To Cart</button>}
                     
                     
                 </div>

    </div>

    
}
export default ProductDetails;