import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Search from './components/Search';
import { Route, Routes, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import AddToCart from './components/AddToCart';
import { CartProvider, useCart } from './context/CartContext';
import CateGory from './components/Category';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';





function App() {
  const [products, setProducts] = useState([])
  const [searchData, setSearchData] = useState("")
  const [category, selectedCategory] = useState("all")

  const location = useLocation();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products)
        //console.log(data.products)
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
// console.log(filteredProducts)
console.log(products)
  const { cart } = useCart()
  const isCartPage = location.pathname === '/cart';
  return (
    <>
     <Navbar onSearch={handleSearchProduct}></Navbar>
     {!isCartPage && <CateGory onCategory={handleCategory}></CateGory>}
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
