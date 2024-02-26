import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from 'react'; 
import CartList from './components/CartList';
function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://vlebazaar.in/image/cache/catalog/boAt-Rockerz-450-Bluetooth-Wireless-On-Ear-Headphone-with-Mic-Hazel-Beig/boAt-Rockerz-450-Bluetooth-Wireless-On-Ear-Headphone-with-Mic-Hazel-Beige-Rocker-1100x1100.jpg',
      name: 'Rockerz 450',
      category: 'Headphones',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://vlebazaar.in/image/image/catalog//B09N3XMZ5F/boAt-Airdopes-141-Bluetooth-Truly-Wireless-in-Ear-Headphones-with-42H-PlaytimeLo-1100x1100.jpg',
      name: 'Airdopes 141',
      category: 'Airdopes',
      seller: 'Watch Ltd Siyana',
      price: 2099
    },
    {
      url: 'https://m.media-amazon.com/images/I/719elVA3FvL._SX679_.jpg',
      name: 'boAt BassHeads 100 ',
      category: 'EarPhone',
      seller: 'Delhi Laptops',
      price: 500
    },
    {
      url: 'https://www.boat-lifestyle.com/cdn/shop/products/airdopes-121-v2-blue_600x.png?v=1678773275',
      name: 'airdopes-121-v2',
      category: 'Earcard',
      seller: 'Camron LTD',
      price: 3000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const[cart,setCart]=useState([])
  const[showCart, setShowCart]=useState(false)
  console.log(cart)
  const addToCart =(data) => {
setCart([...cart,{ ...data, quantity: 1}])
  }
  const handleShow =(value)=>{
setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}></Header>
      {
        showCart ?
        <CartList cart={cart}></CartList> :
        <ProductList product={product} addToCart={addToCart}></ProductList>
      }
      
    </div>
  );
}

export default App;
