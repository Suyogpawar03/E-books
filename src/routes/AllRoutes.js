import { Routes , Route, Navigate } from 'react-router-dom';
import { HomePage , Productlist, ProductDetail, Login, Register, Cartpage} from '../pages';
export const AllRoutes = () => {
  


  return (
    <>
      <Routes>
        <Route path="/" element = {< HomePage/>}/>
         <Route path="/products" element = {< Productlist/>}/>
         <Route path="/products/:id" element = {< ProductDetail/>}/>

          <Route path="login" element = {<Login />}/>
          <Route path="register" element = {<Register />}/>

          <Route path="cart" element = {  <Cartpage /> }/>
         
      </Routes>
    
    </>
  )
}
