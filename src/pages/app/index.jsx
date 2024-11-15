import { BrowserRouter} from 'react-router-dom';
import './App.css'
import { Layout } from '../../component/layout';
import { ShopingCardProvider } from '../../context';
import { NavbarMobile } from '../../component/nav/navbarMobile';
import { NavbarDesktop } from '../../component/nav/navbarDesktop';


function App() {
  const screenWidth = window.screen.width; 
    const renderView = screenWidth > 768 ? <NavbarDesktop/> : <NavbarMobile/>
  console.log(`Ancho de la pantalla: ${screenWidth}`); 
  
return (
  <ShopingCardProvider>
  <BrowserRouter>
  {renderView}
  
  <Layout/>
  </BrowserRouter>
</ShopingCardProvider>
  )
}

export default  App;