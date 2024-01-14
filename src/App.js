import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Search from './components/Search';
import { Route, Routes, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import AddToCart from './components/AddToCart';
import { CartProvider, useCart } from './context/CartContext';
import CateGory from './components/Category';





function App() {
  const [products, setProducts] = useState([])
  const [searchData, setSearchData] = useState("")
  const [category, selectedCategory] = useState("all")

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products)
        console.log(data.products)
      })
  }, [])
  useEffect(()=>{
    if(category === "all"){
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products)
        console.log(data.products)
      })
    }
    else{
      fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
        .then((data) => {
          setProducts(data.products)
          console.log(data.products)
        })
    }
    

  },[category])



  const handleCategory = (categoryName) => {
    selectedCategory(categoryName.toLowerCase())
  }
  const handleSearchProduct = (data) => {
    setSearchData(data)
  }
  const filteredProducts = searchData === "" ? products : products.filter((p) => p.title.toLowerCase().includes(searchData.toLowerCase()))

  const { cart } = useCart()
  return (
    <>
      <div className='nav' >
        <Search onSearch={handleSearchProduct}></Search>
        <Link to='/cart' > <button className="btn btn-danger position-relative" style={{ height: "50px", width: "100px", margin: "15px" }}>Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
        </button></Link>
      </div>
      <CateGory onCategory={handleCategory}></CateGory>
      <Routes>
        <Route path='/' element={(searchData && filteredProducts.length === 0) ? <p>No Result found</p> : <ProductList products={filteredProducts} ></ProductList>}></Route>
        <Route path='/product/:productId' element={<ProductDetails />} ></Route>
        <Route path='/cart' element={<AddToCart />}></Route>
        <Route path='/product/Laptops'element={<ProductList products={filteredProducts}/>}></Route>
        <Route path='/product/All'element={<ProductList products={filteredProducts}/>}></Route>
        <Route path='/product/Grocery'element={<ProductList products={filteredProducts}/>}></Route>
        <Route path='/product/Smartphones'element={<ProductList products={filteredProducts}/>}></Route>

        <Route path='/product/HomeDecor'element={<ProductList products={filteredProducts}/>}></Route>


      </Routes>

    </>


  );
}

export default App;
