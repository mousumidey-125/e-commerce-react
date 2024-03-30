import { Link } from 'react-router-dom'
import styles from './Category.module.css'
import { useLocation } from 'react-router-dom';
function CateGory({onCategory}){
    const location = useLocation();
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
    {/* <div className={location.pathname === '/home' ? styles.active : ''}>
                    <Link to={'/home'} className={styles.link}><p>Home</p></Link>
                </div> */}
    <Link to={'/product/All'} className={styles.link}>  <li onClick={handleAllProducts} className={location.pathname === '/product/All' ? styles.active : ''}>All</li> </Link>
    <Link to={'/product/Grocery'} className={styles.link}>  <li onClick={handleGrocery} className={location.pathname === '/product/Grocery' ? styles.active : ''}>Grocery</li> </Link>
      <Link to={'/product/Laptops'} className={styles.link}> <li onClick={handleLaptop} className={location.pathname === '/product/Laptops' ? styles.active : ''}>Laptop</li></Link>   
      <Link to={'/product/Smartphones'} className={styles.link}>  <li onClick={handleSmartPhones} className={location.pathname === '/product/Smartphones' ? styles.active : ''}>SmartPhones</li> </Link>
      <Link to={'/product/HomeDecor'} className={styles.link}>  <li onClick={handleHomeDecor} className={location.pathname === '/product/HomeDecor' ? styles.active : ''}>Home Decor</li>  </Link>
    </ul>
    </>

}
export default CateGory;