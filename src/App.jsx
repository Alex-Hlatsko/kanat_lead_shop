import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProductsScreen from './screens/ProductsScreen'
import GeoScreen from './screens/GeoScreen'

function App() {

  return (
      <Routes>
        <Route path='/' element={<ProductsScreen/>}/>
        <Route path='/geo/:productId' element={<GeoScreen/>}/>
      </Routes>
  )
}

export default App
