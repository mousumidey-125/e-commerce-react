import { CartProvider, useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
function Navbar({ onSearch }) {
    const { cart } = useCart()
    const handleSearch = (e) => {
        onSearch(e.target.value)

    }
    return (
        <div className={styles.navbar}>
            
            <input type="text" className={`form-control ${styles.searchBar}` } placeholder='Search Products Here...' onChange={(e) => handleSearch(e)}  />
            <Link to='/cart' > 
            <button className={`btn btn-danger position-relative ${styles.cart}`} style={{  width: "100px", margin: "15px" }}>Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
            </button>
            </Link>
        </div>

    )

}

export default Navbar;