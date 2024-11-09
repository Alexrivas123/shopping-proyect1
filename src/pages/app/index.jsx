import { BrowserRouter} from 'react-router-dom';
import './App.css'
import { Navbar } from '../../component/nav';
import { Layout } from '../../component/layout';
import { ShopingCardProvider } from '../../context';


function App() {
return (
  <ShopingCardProvider>
  <BrowserRouter>
  <Layout/>
  <Navbar/>
  </BrowserRouter>
</ShopingCardProvider>
  )
}

export default  App;