import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css'

function Search({onSearch}) {
    const navigate=useNavigate()
    const handleSearch = (e) => {
        onSearch(e.target.value)
        //navigate('/')
        
    }
    return <div className={styles.serachContainer}>
        <input type="text" className='form-control' placeholder='Search Products Here...' onChange={(e) => handleSearch(e)}/>
    </div>

}
export default Search;