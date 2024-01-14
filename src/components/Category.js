import { Link } from 'react-router-dom'
import styles from './Category.module.css'
function CateGory({onCategory}){
    const handleSmartPhones=()=>{
        onCategory("SmartPhones")

    }
    const handleAllProducts=()=>{
        onCategory("All")

    }
    const handleLaptop=()=>{
        onCategory("laptops")

    }
    const handleHomeDecor=()=>{
        onCategory("home-decoration")
    }
    const handleGrocery=()=>{
        onCategory("groceries")
    }
    return <>
    <ul className={styles.CateGory}>
    <Link to={'/product/All'} className={styles.link}>  <li onClick={handleAllProducts}>All</li> </Link>
    <Link to={'/product/Grocery'} className={styles.link}>  <li onClick={handleGrocery}>Grocery</li> </Link>
      <Link to={'/product/Laptops'} className={styles.link}> <li onClick={handleLaptop}>Laptop</li></Link>   
      <Link to={'/product/Smartphones'} className={styles.link}>  <li onClick={handleSmartPhones}>SmartPhones</li> </Link>
      <Link to={'/product/HomeDecor'} className={styles.link}>  <li onClick={handleHomeDecor}>Home Decor</li>  </Link>
    </ul>
    </>

}
export default CateGory;