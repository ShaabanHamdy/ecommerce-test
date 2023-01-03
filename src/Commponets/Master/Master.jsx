
import Carts from '../Carts/Carts'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'

export default function Master() {
 
  return (
   <>
   <Navbar/>
  
   <div className="container">
    <div className="row">
      <div className="col-md-9">
      <Products/>
      </div>
      <div className="col-md-3">
      <Carts/>
      </div>
    </div>
   
   
   </div>
   
   </>
  )
}
