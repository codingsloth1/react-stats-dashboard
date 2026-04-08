import SavedProducts from "../../pages/SavedProducts"
import Products from '../../pages/Products.jsx'
import Dashboard from "../../pages/Dashboard.jsx"
export default function Layout({changepages}){
    return(
    <div>
    {changepages == '1' && <SavedProducts/> }
    {changepages == '2' && <Products/> }
    {changepages == '3' && <Dashboard/> }
   
   
    </div>
    )
}