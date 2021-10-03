import {
  Switch,
  Route
} from "react-router-dom";
import ProductPage from "./pages/Product";
import AccessoryPage from "./pages/Accessory";
import ContactPage from "./pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import DetailsPage from "./pages/Details";
import DetailsPolo from "./pages/DetailsPolo";
import{DataProvider} from "./components/layout/DataProvider" 


function App() {
  return (

      <DataProvider>
        <Header/>   
          <Switch>
            <Route path="/" exact>
              <HomePage></HomePage>
            </Route>
            <Route path="/product">
              <ProductPage></ProductPage>
            </Route>
            <Route path="/details/:id">
              <DetailsPage></DetailsPage>
            </Route>
            <Route path="/detailspolo/:id">
              <DetailsPolo></DetailsPolo>
            </Route>
            <Route path="/accesory">
              <AccessoryPage></AccessoryPage>
            </Route>
            <Route path="/contact">
              <ContactPage></ContactPage>
            </Route>
            <Route path="/cart">
              <CartPage></CartPage>
            </Route>
          </Switch>
        <Footer/>
      </DataProvider>
    
  );
}

export default App;
