import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import {CartProvider} from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="App">
      {/* wrap the whole app in the provider to take the data in any component */}
      <CartProvider>
        {/* wrap the app in BrowerRouter to navigate */}
        <BrowserRouter>
        {/* leave the navbar out of the switch beacause I want it to always be visible */}
          <NavBar />
          <Switch>
            {/* use the exact path beacause otherwise when reading the slash it will always go to this link */}
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            {/* to be able to navigate with parameters we use ":" */}
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;