import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemList from './components/ItemList/ItemList';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
// import mockdb from "./mockdb.json";

function App() {
//  const [items, setItems] = useState([]);

//  useEffect(() => {
//    new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve(mockdb);
//      }, 1000);

//    }).then((resultado) => setItems(resultado));

//  });

    return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
          <ItemListContainer />
          </Route>
          <Route  path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
