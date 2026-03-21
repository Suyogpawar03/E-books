import { Routes , Route } from 'react-router-dom';
import { HomePage , Productlist, ProductDetail} from '../pages';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {< HomePage/>}/>
         <Route path="/Products" element = {< Productlist/>}/>
         <Route path="/Products/:id" element = {< ProductDetail/>}/>
         
      </Routes>
    
    </>
  )
}
